import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    author!: string;

    @Column()
    country!: string;

    @Column()
    category!: string;

    @Column({type: "longtext"})
    content!: string;
    
    @Column()
    date!: string;

}