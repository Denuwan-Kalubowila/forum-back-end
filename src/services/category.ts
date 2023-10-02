import {Request,Response} from 'express'
import { AppDataSource } from "../data-source";
import { Category } from '../entity/Category';



export const categoryData={
    async getAllCategories(req:Request,res:Response){
        const category= await Category.find()
        return res.json(category)
    },
    async getcategoryByID(req:Request,res:Response){
        const cId=req.params.id
        const category= await AppDataSource
        .getRepository(Category)
        .createQueryBuilder("category")
        .where("category.cata_id = :id", { id: cId })
        .getOne()
        return res.json(category)
    },
    async addcategory(req:Request,res:Response){
        const {
            categoryData
        }=req.body
        const category=Category.create({
            category:categoryData
        })
        await category.save()
        return res.json(category)
    },
    async updatecategory(req:Request,res:Response){
        const {...data}=req.body
        const cId=req.params.id
        const category= await AppDataSource
        .createQueryBuilder()
        .update(Category)
        .set({
            category:data.categoryData
        })
        .where("category.cata_id = :id", { id: cId })
        .execute()
        return res.json(category)
      
    },
    async deletecategory(req:Request,res:Response){
        const cId=req.params.id
        const category= await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Category)
        .where("cata_id = :id", { id: cId })
        .execute()
        return res.json(category)
        
    }

}