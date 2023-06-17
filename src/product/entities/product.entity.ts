import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./common.entity";
@Entity()
export class Product extends CommonEntity {


  @Column()
  public name: string;

  @Column()
  public desc: string;

  @Column()
  public price: number;

  @Column({ default: false })
  public isSoldOut: boolean;

}
