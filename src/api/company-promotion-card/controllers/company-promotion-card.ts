/**
 * company-promotion-card controller
 */

import { factories } from "@strapi/strapi";

interface CommentInput {
  text: string;
  rating: number;
  email: string;
}

export default factories.createCoreController(
  "api::company-promotion-card.company-promotion-card",
  ({ strapi }) => ({
    async addComment(ctx) {
      try {
        const body = ctx.request.body as any;

        if (!body.text || !body.rating || !body.email) {
          return ctx.badRequest("Text, rating, and email are required.");
        }

        const { text, rating, email }: CommentInput = body;
        const { slug } = ctx.params;

        const companyPromotionCard = await strapi
          .service("api::company-promotion-card.company-promotion-card")
          .find({
            filters: { slug },
            populate: { comments: true, localizations: true },
          });

        if (
          !companyPromotionCard ||
          companyPromotionCard.results.length === 0
        ) {
          return ctx.notFound("Company Promotion Card not found.");
        }

        const companyCard = companyPromotionCard.results[0];
        const localizedCompanyCards = [
          companyCard,
          ...companyCard.localizations,
        ];

        const existingComment = companyCard.comments.find(
          (comment) => comment.email === email
        );

        let commentId;

        if (existingComment) {
          await strapi
            .service("api::comment.comment")
            .update(existingComment.id, {
              data: { text, rating },
            });
          commentId = existingComment.id;
        } else {
          const newComment = await strapi
            .service("api::comment.comment")
            .create({
              data: {
                text,
                rating,
                email,
                company_promotion_card: companyCard.id,
              },
            });
          commentId = newComment.id;
        }

        for (const localizedCompanyCard of localizedCompanyCards) {
          const updatedComments = [...(companyCard.comments || []), commentId];

          await strapi
            .service("api::company-promotion-card.company-promotion-card")
            .update(localizedCompanyCard.id, {
              data: { comments: updatedComments },
            });
        }

        const allComments = await strapi.service("api::comment.comment").find({
          filters: { company_promotion_card: companyCard.id },
        });

        const totalComments = allComments.results.length;
        const totalRating = allComments.results.reduce(
          (sum, comment) => sum + comment.rating,
          0
        );
        const newAverageRating = totalRating / totalComments;

        const updateData = {
          totalComments,
          averageRating: newAverageRating.toFixed(1),
        };

        await Promise.all(
          localizedCompanyCards.map((localizedCompanyCard) =>
            strapi
              .service("api::company-promotion-card.company-promotion-card")
              .update(localizedCompanyCard.id, { data: updateData })
          )
        );

        return ctx.created({
          message: "Comment added or updated successfully.",
        });
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
