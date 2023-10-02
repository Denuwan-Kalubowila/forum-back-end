import {Request,Response} from 'express'
import { AppDataSource } from "../data-source";
import { Question } from '../entity/Question';
import { User } from '../entity/User';
import { Category } from '../entity/Category';



export const questionData={
    async getAllCategories(req:Request,res:Response){
        const question= await Question.find()
        return res.json(question)
    },
    async getquestionByID(req:Request,res:Response){
        const ques_id=req.params.id
        const question= await AppDataSource
        .getRepository(Question)
        .createQueryBuilder("question")
        .where("question.ques_id= :id", { id: ques_id })
        .getOne()
        return res.json(question)
    },
    async addquestion(req:Request,res:Response){
        
        try {
            
            const {...data}=req.body
            const userStatus=await AppDataSource
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.user_id=:id",{id:data.uId})
            .getOne()
            const cataStatus=await AppDataSource
            .getRepository(Category)
            .createQueryBuilder("category")
            .where("category.categoty_id=:id",{id:data.cId})
            .getOne()

            if(userStatus && cataStatus){
                const question =new Question()
                question.question=data.ques
                question.created_at= data.date
                question.user=data.uId
                question.category=data.cId

                await question.save()
                return res.json(question)
            }else{
                return {"message":"invalid user or category"}
            }
     
        } catch (error) {
            console.log(error)
        }
        
    },
    async updatequestion(req:Request,res:Response){
        const {...data}=req.body
        const ques_id=req.params.id
        const question= await AppDataSource
        .createQueryBuilder()
        .update(Question)
        .set({
            question:data.questionData
        })
        .where("question.ques_id= :id", { id: ques_id })
        .execute()
        return res.json(question)
      
    },
    async deletequestion(req:Request,res:Response){
        const ques_id=req.params.id
        const question= await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Question)
        .where("ques_id= :id", { id: ques_id })
        .execute()
        return res.json(question)
        
    }

}