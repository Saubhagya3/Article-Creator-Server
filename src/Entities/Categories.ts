import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Categories extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    category!: string;

}