import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, ManyToOne, BaseEntity } from "typeorm"
import { User } from "./User"
import { Question } from "./Question"

@Entity({name:"answer"})
export class Answer extends BaseEntity {

    @PrimaryGeneratedColumn()
    answer_id: number

    @Column({length:1000})
    answer: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=>User,(user)=>user.answers)
    user:User

    @ManyToOne(()=>Question,(question)=>question.answers)
    question:Question

}