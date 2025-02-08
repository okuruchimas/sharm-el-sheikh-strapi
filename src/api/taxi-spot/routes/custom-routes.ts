export default {
  routes: [
    {
      method: "POST",
      path: "/taxi-spots/:slug/ratings",
      handler: "api::taxi-spot.taxi-spot.addRating",
      config: {
        auth: false,
      },
    },
  ],
};
