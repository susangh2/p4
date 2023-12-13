import type { Knex } from "knex";
import { env } from "./env";

const config: { [key: string]: Knex.Config } = {
  development: {
    debug: true,
    client: "postgresql",
    connection: {
      database: env.DB_NAME,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
