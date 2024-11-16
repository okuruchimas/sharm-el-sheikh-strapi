import { Strapi } from "@strapi/strapi";

export interface CommentInput {
  text: string;
  rating: number;
  email: string;
}

export async function handleAddComment(
  strapi: Strapi,
  slug: string,
  collectionType: string,
  relationField: string,
  commentData: CommentInput
) {
  const { text, rating, email } = commentData;

  const entryData = await strapi
    .service(`api::${collectionType}.${collectionType}`)
    .find({
      filters: { slug },
      populate: { comments: true, localizations: true },
    });

  if (!entryData || entryData.results.length === 0) {
    throw new Error(`${collectionType} not found.`);
  }

  const entry = entryData.results[0];
  const localizedEntries = [entry, ...entry.localizations];

  const existingComment = entry?.comments?.find(
    (comment) => comment.email === email
  );

  let updatedComment;

  if (existingComment) {
    updatedComment = await strapi
      .service("api::comment.comment")
      .update(existingComment.id, { data: { text, rating } });
  } else {
    updatedComment = await strapi.service("api::comment.comment").create({
      data: {
        text,
        rating,
        email,
        [relationField]: entry.id,
      },
    });
  }

  const updatedCommentId = updatedComment.id;

  for (const localizedEntry of localizedEntries) {
    const updatedComments = [...(entry.comments || []), updatedCommentId];

    await strapi
      .service(`api::${collectionType}.${collectionType}`)
      .update(localizedEntry.id, { data: { comments: updatedComments } });
  }

  const allComments = [
    ...(entry?.comments?.filter((el) => el.email !== email) || []),
    updatedComment,
  ];

  const totalComments = allComments.length || 0;
  const totalRating = allComments.reduce(
    (sum, comment) => sum + comment.rating,
    0
  );
  const newAverageRating = totalRating / totalComments || 0;

  const updateData = {
    totalComments,
    averageRating: newAverageRating.toFixed(1),
  };

  await Promise.all(
    localizedEntries.map((localizedEntry) =>
      strapi
        .service(`api::${collectionType}.${collectionType}`)
        .update(localizedEntry.id, { data: updateData })
    )
  );

  return updatedComment;
}
