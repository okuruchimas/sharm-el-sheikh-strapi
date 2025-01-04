export default {
  routes: [
    {
      method: "POST",
      path: "/companies/:slug/ratings",
      handler: "api::company.company.addRating",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/companies/:slug/comments",
      handler: "api::company.company.addComment",
      config: {
        auth: false,
      },
    },
  ],
};
