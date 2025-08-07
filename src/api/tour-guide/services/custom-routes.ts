export default {
  routes: [
    {
      method: "POST",
      path: "/tour-operators/:slug/comments",
      handler: "api::tour-operator.tour-operator.addComment",
      config: {
        auth: false,
      },
    },
  ],
};
