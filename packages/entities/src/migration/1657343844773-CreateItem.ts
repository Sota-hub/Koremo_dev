import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateItem1657343844773 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `item` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT,`createdAt` datetime NOT NULL,`updatedAt` datetime NOT NULL,`name` varchar(60) NOT NULL,`shopid` int UNSIGNED NOT NULL,`price` int UNSIGNED NOT NULL,`supplement` varchar(255),`status` int NOT NULL,PRIMARY KEY (id)) ENGINE = MYISAM"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `item`");
  }
}
