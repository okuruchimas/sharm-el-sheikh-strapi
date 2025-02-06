export default {
  routes: [
    {
      method: "POST",
      path: "/tours/:slug/ratings",
      handler: "api::tour.tour.addRating",
      config: {
        auth: false,
      },
    },
  ],
};
