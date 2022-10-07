import { Entity, Column } from "typeorm";
import BasicColumns from "./BasicColumns";

@Entity()
class User extends BasicColumns {
  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  profileImageId!: string;

  @Column()
  lastAccessedAt!: Date;

  @Column({ nullable: true })
  passwordHash!: string;

  @Column({ nullable: true })
  googleId!: string;
}

export default User;
