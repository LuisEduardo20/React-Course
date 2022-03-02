module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-54-157-100-65.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d4i532n1fh5lev"),
      user: env("DATABASE_USERNAME", "rlepnwrelhhtrk"),
      password: env(
        "DATABASE_PASSWORD",
        "5ed33f375523bad552d1b811e0e49591ed3ad17a42cc055f50c46e25c7cc8059"
      ),
      ssl: { rejectUnauthorized: false },
      // ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
