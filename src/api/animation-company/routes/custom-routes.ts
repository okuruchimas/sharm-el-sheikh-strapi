export default {
  routes: [
    {
      method: "POST",
      path: "/animation-companies/:slug/ratings",
      handler: "api::animation-company.animation-company.addRating",
      config: {
        auth: false,
      },
    },
  ],
};
