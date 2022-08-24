import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateShop1657345004676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `shop` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT,`createdAt` datetime NOT NULL,`updatedAt` datetime NOT NULL,`name` varchar(60) NOT NULL,PRIMARY KEY (id))"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `shop`");
  }
}
