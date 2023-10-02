import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm"
import { Question } from "./Question"
import { Answer } from "./Answer"

@Entity({name:"user"})
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_id: number

    @Column({length:15})
    firstName: string

    @Column({length:15})
    lastName: string

    @Column({length:30})
    email: string

    @Column({length:30})
    password: string

    @Column()
    mobile:number

    @OneToMany(()=>Question,(question)=>question.user)
    questions:Question[]

    @OneToMany(()=>Answer,(answer)=>answer.user)
    answers:Question[]


}
