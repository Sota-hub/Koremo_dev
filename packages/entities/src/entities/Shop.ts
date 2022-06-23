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
class Shop extends BaseEntity implements BasicColumns {
  @PrimaryGeneratedColumn()
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  name!: string;
}

export default Shop;
