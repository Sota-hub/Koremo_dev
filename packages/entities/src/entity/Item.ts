import { Entity, Column } from "typeorm";
import BasicColumns from "./BasicColumns";

@Entity()
class Item extends BasicColumns {
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
