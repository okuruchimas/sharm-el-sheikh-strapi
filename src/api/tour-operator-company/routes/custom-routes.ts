export default {
  routes: [
    {
      method: "POST",
      path: "/tour-operator-companies/:slug/ratings",
      handler: "api::tour-operator-company.tour-operator-company.addRating",
      config: {
        auth: false,
      },
    },
  ],
};
