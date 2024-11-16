export default {
  routes: [
    {
      method: "POST",
      path: "/photographers/:slug/comments",
      handler: "api::photographer.photographer.addComment",
      config: {
        auth: false,
      },
    },
  ],
};
