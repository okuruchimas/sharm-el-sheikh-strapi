import { Strapi } from "@strapi/strapi";

export async function handleAddRating(
  strapi: Strapi,
  slug: string,
  collectionType: string,
  rating: number
) {
  const entryData = await strapi
    .service(`api::${collectionType}.${collectionType}`)
    .find({
      filters: { slug },
      populate: { localizations: true },
    });

  if (!entryData || entryData.results.length === 0) {
    throw new Error(`${collectionType} not found.`);
  }

  const entry = entryData.results[0];

  const totalComments = entry.totalComments || 0;
  const averageRating = entry.averageRating || 0;
  const newTotal = totalComments + 1;
  const newAverageRating = (totalComments * averageRating + rating) / newTotal;

  const updateData = {
    totalComments: newTotal,
    averageRating: newAverageRating.toFixed(1),
  };

  const localizedEntries = [entry, ...entry.localizations];

  await Promise.all(
    localizedEntries.map((localizedEntry) =>
      strapi
        .service(`api::${collectionType}.${collectionType}`)
        .update(localizedEntry.id, { data: updateData })
    )
  );

  return updateData;
}
