import { Entity, Column } from "typeorm";
import BasicColumns from "./BasicColumns";

@Entity()
class Friend extends BasicColumns {
  @Column()
  userId!: string;

  @Column()
  friendId!: string;

  @Column()
  status!: number;
}

export default Friend;
