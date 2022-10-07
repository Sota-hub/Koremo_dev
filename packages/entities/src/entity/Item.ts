import { Entity, Column } from "typeorm";
import BasicColumns from "./BasicColumns";

@Entity()
class Item extends BasicColumns {
  @Column()
  itemName!: string;

  @Column()
  shopName!: string;

  @Column()
  price!: string;

  @Column({ nullable: true })
  supplement!: string;

  @Column()
  status!: number; // 1=InList, 2=Bought
}

export default Item;
