import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "brand" })
export class Brands {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
