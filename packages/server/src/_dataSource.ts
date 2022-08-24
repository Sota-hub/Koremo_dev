// ファイル名をdataSourceにするとts.configの予約名と被るのでエラーが出るので_dataSourceにしている
// いろんなとこで使うこ可能性があるので別ファイルにした
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import * as entities from "@koremo/entities";

dotenv.config();

// Using cloud database for development
const host = process.env.HOST;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const port  = Number(process.env.PORT);

const dataSource = new DataSource({
  type: "mysql",
  host,
  port,
  username,
  password,
  database,
  logging: true,
  entities: Object.values(entities),
});

export default dataSource;
