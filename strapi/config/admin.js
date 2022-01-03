module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93e07b240b13e3060b3dd4e261374a5b'),
  },
});
