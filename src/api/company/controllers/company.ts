/**
 * company controller
 */

import { factories } from "@strapi/strapi";
import {
  handleAddComment,
  type CommentInput,
} from "../../../utils/commentHandler";
import { handleAddRating } from "../../../utils/ratingHandler";

export default factories.createCoreController(
  "api::company.company",
  ({ strapi }) => ({
    async addComment(ctx) {
      try {
        const body = ctx.request.body as CommentInput;
        const { slug } = ctx.params;

        if (!body.text || !body.rating || !body.email) {
          return ctx.badRequest("Text, rating, and email are required.");
        }

        const updatedComment = await handleAddComment(
          strapi,
          slug,
          "company",
          "company",
          body
        );

        return ctx.created(updatedComment);
      } catch (err) {
        ctx.throw(500, err);
      }
    },

    async addRating(ctx) {
      try {
        const body = ctx.request.body as { rating: number };
        const { slug } = ctx.params;

        if (!body.rating) {
          return ctx.badRequest("Rating is required.");
        }

        const { totalComments, averageRating } = await handleAddRating(
          strapi,
          slug,
          "company",
          body.rating
        );

        return ctx.created({
          message: "Rating added successfully",
          newTotalComments: totalComments,
          newAverageRating: averageRating,
        });
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
