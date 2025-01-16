/**
 * animation-company controller
 */

import { factories } from "@strapi/strapi";
import { handleAddRating } from "../../../utils/ratingHandler";

export default factories.createCoreController(
  "api::animation-company.animation-company",
  ({ strapi }) => ({
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
          "animation-company",
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
