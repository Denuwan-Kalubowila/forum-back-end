import {Request,Response} from 'express'
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";



export const userData={
    async getAllUsers(req:Request,res:Response){
        const user= await User.find()
        return res.json(user)
    },
    async getUserByID(req:Request,res:Response){
        const uId=req.params.id
        const user= await AppDataSource
        .getRepository(User)
        .createQueryBuilder("user")
        .where("user.user_id = :id", { id: uId })
        .getOne()
        return res.json(user)
    },
    async addUser(req:Request,res:Response){
        const {
            fName,
            lName,
            email,
            password,
            mobile
        }=req.body
        const user=User.create({
            firstName:fName,
            lastName:lName,
            email:email,
            password:password,
            mobile:mobile
        })
        await user.save()
        return res.json(user)
    },
    async updateUser(req:Request,res:Response){
        const {...data}=req.body
        const uId=req.params.id
        const user= await AppDataSource
        .createQueryBuilder()
        .update(User)
        .set({
            firstName:data.fName,
            lastName:data.lName,
            email:data.email,
            password:data.password,
            mobile:data.mobile
        })
        .where("user.user_id = :id", { id: uId })
        .execute()
        return res.json(user)
      
    },
    async deleteUser(req:Request,res:Response){
        const uId=req.params.id
        const user= await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("user_id = :id", { id: uId })
        .execute()
        return res.json(user)
        
    }

}