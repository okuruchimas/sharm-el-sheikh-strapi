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
          .find({ filters: { slug }, populate: { comments: true } });

        if (
          !companyPromotionCard ||
          companyPromotionCard.results.length === 0
        ) {
          return ctx.notFound("Company Promotion Card not found.");
        }

        const companyCard = companyPromotionCard.results[0];
        const existingComment = companyCard.comments.find(
          (comment) => comment.email === email
        );

        if (existingComment) {
          await strapi
            .service("api::comment.comment")
            .update(existingComment.id, {
              data: {
                text,
                rating,
              },
            });
        } else {
          await strapi.service("api::comment.comment").create({
            data: {
              text,
              rating,
              email,
              company_promotion_card: companyCard.id,
            },
          });
        }

        const allComments = await strapi
          .service("api::comment.comment")
          .find({ filters: { company_promotion_card: companyCard.id } });

        const comments = allComments.results;
        const newTotalComments = comments.length;

        const totalRating = comments.reduce(
          (sum, comment) => sum + comment.rating,
          0
        );
        const newAverageRating = totalRating / newTotalComments;

        await strapi
          .service("api::company-promotion-card.company-promotion-card")
          .update(companyCard.id, {
            data: {
              totalComments: newTotalComments,
              averageRating: newAverageRating.toFixed(1),
            },
          });

        return ctx.created({
          message: "Comment added or updated successfully.",
        });
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
