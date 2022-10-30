import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1657343844773 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `product` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT,`createdAt` datetime  DEFAULT CURRENT_TIMESTAMP NOT NULL,`updatedAt` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL, `ownerId` int UNSIGNED NOT NULL,`productImageId` varchar(240), `productName` varchar(60) NOT NULL, `shopName` varchar(60) NOT NULL,`price` int UNSIGNED NOT NULL,`supplement` varchar(255),`status` int NOT NULL,PRIMARY KEY (id))"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `product`");
  }
}
