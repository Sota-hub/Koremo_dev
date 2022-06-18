import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import BasicColumns from "./BasicColumns";

@Entity()
class User extends BaseEntity implements BasicColumns {
  @PrimaryGeneratedColumn() // generated automatically
  id!: string;

  @CreateDateColumn() // generated automatically
  createdAt!: Date;

  @UpdateDateColumn() // generated automatically
  updatedAt!: Date;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  passwordHash!: string;

  @Column({ nullable: true })
  profileImageUrl!: string;

  @Column()
  lastAccessedAt!: Date;
}

export default User;
