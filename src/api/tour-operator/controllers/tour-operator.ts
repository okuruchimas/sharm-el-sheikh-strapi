/**
 * tour-operator controller
 */

import { factories } from "@strapi/strapi";
import {
  handleAddComment,
  type CommentInput,
} from "../../../utils/commentHandler";

export default factories.createCoreController(
  "api::tour-operator.tour-operator",
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
          "tour-operator",
          "tour-operator",
          body
        );

        return ctx.created(updatedComment);
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
