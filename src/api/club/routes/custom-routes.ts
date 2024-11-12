export default {
  routes: [
    {
      method: "POST",
      path: "/clubs/:slug/ratings",
      handler: "api::club.club.addRating",
      config: {
        auth: false,
      },
    },
  ],
};
