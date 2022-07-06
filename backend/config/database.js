module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ts-nextjs-strapi-eslint-database'),
      user: env('DATABASE_USERNAME', 'gaoyuan'),
      password: env('DATABASE_PASSWORD', 'gaoyuan'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
