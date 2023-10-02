import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, BaseEntity } from "typeorm"
import { User } from "./User"
import { Category } from "./Category"
import { Answer } from "./Answer"

@Entity({name:"question"})
export class Question extends BaseEntity{

    @PrimaryGeneratedColumn()
    ques_id: number

    @Column({length:1000})
    question: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=>User,(user)=>user.questions)
    user:User

    @ManyToOne(()=>Category,(category)=>category.questions)
    category:Category

    @OneToMany(()=>Answer,(answer)=>answer.question)
    answers:Question[]

}