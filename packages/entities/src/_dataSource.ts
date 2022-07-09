import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const connectionSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_ROOT_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  logging: true,
  entities: ["build/entity/*.js"],
  migrations: ["build/migration/*.js"],
});
