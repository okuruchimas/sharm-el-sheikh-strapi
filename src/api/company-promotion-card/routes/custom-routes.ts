export default {
  routes: [
    {
      method: "POST",
      path: "/company-promotion-cards/:slug/comments",
      handler: "api::company-promotion-card.company-promotion-card.addComment",
      config: {
        auth: false,
      },
    },
  ],
};
