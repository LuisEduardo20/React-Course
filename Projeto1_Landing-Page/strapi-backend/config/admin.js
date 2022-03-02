module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a062eb2e917ff85676be503b1cd0f7b'),
  },
});
