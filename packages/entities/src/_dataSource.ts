import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const host = process.env.HOST;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const port = Number(process.env.PORT);

export const connectionSource = new DataSource({
  type: "mysql",
  host,
  port,
  username,
  password,
  database,
  logging: true,
  entities: ["build/entity/*.js"],
  migrations: ["build/migration/*.js"],
});
