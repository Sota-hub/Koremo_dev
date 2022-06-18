// ファイル名をdataSourceにするとts.configの予約名と被るのでエラーが出るのでDataSourceにしている
// いろんなとこで使うこ可能性があるので別ファイルにした
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import entities from "@koremo/entities";

dotenv.config();
const host = process.env.MYSQL_HOST;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

const dataSource = new DataSource({
  type: "mysql",
  host,
  username,
  password,
  database,
  logging: true,
  // synchronize: true,
  // ↑EntityとDBを同期(cliでsyncエラー出るので代わりにコメントアウトで対応中)
  entities: Object.values(entities),
});

export default dataSource;
