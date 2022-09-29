import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const connectionSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: true,
  entities: ["build/entity/*.js"],
  migrations: ["build/migration/*.js"],
});
