import {Request,Response} from 'express'
import { AppDataSource } from "../data-source";
import { Answer } from '../entity/Answer';




export const answerData={
    async getAllCategories(req:Request,res:Response){
        const answer= await Answer.find()
        return res.json(answer)
    },
    async getAnswerByID(req:Request,res:Response){
        const ans_id=req.params.id
        const answer= await AppDataSource
        .getRepository(Answer)
        .createQueryBuilder("answer")
        .where("answer.answer_id= :id", { id: ans_id })
        .getOne()
        return res.json(answer)
    },
    async addAnswer(req:Request,res:Response){
        
        try {
            const {...data}=req.body
            const answer =new Answer()
            answer.answer=data.ans
            answer.created_at= data.date
            answer.user=data.uId
            answer.question=data.qId

            await answer.save()
            return res.json(answer)
            
        } catch (error) {
            console.log(error)
        }
        
    },
    async updateAnswer(req:Request,res:Response){
        const {...data}=req.body
        const ans_id=req.params.id
        const answer= await AppDataSource
        .createQueryBuilder()
        .update(Answer)
        .set({
            answer:data.answerData
        })
        .where("answer.answer_id= :id", { id: ans_id })
        .execute()
        return res.json(answer)
      
    },
    async deleteAnswer(req:Request,res:Response){
        const ans_id=req.params.id
        const answer= await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Answer)
        .where("answer_id= :id", { id: ans_id })
        .execute()
        return res.json(answer)
        
    }

}