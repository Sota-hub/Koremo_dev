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
  @PrimaryGeneratedColumn()
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  profileImageUrl!: string;

  @Column()
  lastAccessedAt!: Date;
}

export default User;
