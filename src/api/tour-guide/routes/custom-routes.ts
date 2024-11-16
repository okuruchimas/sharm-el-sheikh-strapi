export default {
  routes: [
    {
      method: "POST",
      path: "/tour-guides/:slug/comments",
      handler: "api::tour-guide.tour-guide.addComment",
      config: {
        auth: false,
      },
    },
  ],
};
