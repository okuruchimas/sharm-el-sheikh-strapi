export default {
  routes: [
    {
      method: "POST",
      path: "/photography-locations/:slug/ratings",
      handler: "api::photography-location.photography-location.addRating",
      config: {
        auth: false,
      },
    },
  ],
};
