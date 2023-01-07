// ファイル名をdataSourceにするとts.configの予約名と被るのでエラーが出るので_dataSourceにしている
// いろんなとこで使うこ可能性があるので別ファイルにした
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import * as entities from "@koremo/entities";

dotenv.config();

const dataSource = new DataSource({
  type: "mysql",
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  logging: false,
  entities: Object.values(entities),
  ssl: {
    rejectUnauthorized: false
  }
});

export default dataSource;