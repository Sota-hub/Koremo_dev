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
class Item extends BaseEntity implements BasicColumns {
  @PrimaryGeneratedColumn()
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  name!: string;

  @Column()
  shopId!: string;

  @Column()
  price!: string;

  @Column({ nullable: true })
  supplement!: string;

  @Column()
  status!: number; // 1=InList, 2=Bought
}

export default Item;
