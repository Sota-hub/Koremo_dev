import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFriend1657342968435 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `friend` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT,`createdAt` datetime NOT NULL,`updatedAt` datetime NOT NULL,`userid` int UNSIGNED NOT NULL,`friendid` int UNSIGNED NOT NULL,`status` int NOT NULL,PRIMARY KEY (id)) ENGINE = MYISAM"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `friend`");
  }
}
