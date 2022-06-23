import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import BasicColumns from "./BasicColumns";

@Entity()
class Frined extends BaseEntity implements BasicColumns {
  @PrimaryGeneratedColumn()
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  userId!: string;

  @Column()
  friendId!: string;

  @Column()
  status!: number; // 1=Friend, 2=Pending
}

export default Frined;
