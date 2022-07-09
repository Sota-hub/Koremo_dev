import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1657330375660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `user` (`id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT,`createdAt` datetime NOT NULL,`updatedAt` datetime NOT NULL,`name` varchar(30) NOT NULL,`email` varchar(60) NOT NULL,`profileImageUrl` varchar(240),`lastAccessedAt` datetime NOT NULL,`passwordHash` binary(60),`googleId` varchar(21),PRIMARY KEY (id)) ENGINE = MYISAM"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `user`");
  }
}
