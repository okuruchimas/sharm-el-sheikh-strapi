export default {
  routes: [
    {
      method: "POST",
      path: "/animators/:slug/comments",
      handler: "api::animator.animator.addComment",
      config: {
        auth: false,
      },
    },
  ],
};
