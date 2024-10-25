export default {
  routes: [
    {
      method: "POST",
      path: "/taxi-driver/:slug/comments",
      handler: "api::taxi-driver.taxi-driver.addComment",
      config: {
        auth: false,
      },
    },
  ],
};
