import { Entity, Column } from "typeorm";
import BasicColumns from "./BasicColumns";

@Entity()
class Shop extends BasicColumns {
  @Column()
  name!: string;
}

export default Shop;
