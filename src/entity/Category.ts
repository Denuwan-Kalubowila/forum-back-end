import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, BaseEntity } from "typeorm"
import { Question } from "./Question"

@Entity({name:"category"})
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn()
    cata_id: number

    @Column({length:10})
    category: string

    @OneToMany(()=>Question,(question)=>question.category)
    questions:Question[]



}