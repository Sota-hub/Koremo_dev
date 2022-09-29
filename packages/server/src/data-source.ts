// ファイル名をdataSourceにするとts.configの予約名と被るのでエラーが出るので_dataSourceにしている
// いろんなとこで使うこ可能性があるので別ファイルにした
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import * as entities from "@koremo/entities";

dotenv.config();

const dataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: true,
  entities: Object.values(entities),
});

export default dataSource;
