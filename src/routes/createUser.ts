import * as express  from "express";
import { userData } from "../services/users";
import { categoryData } from "../services/category";
import { questionData } from "../services/question";

const router=express.Router()

router.get('/user',userData.getAllUsers);
router.get('/user/:id',userData.getUserByID);
router.post('/user',userData.addUser);
router.put('/user/:id',userData.updateUser);
router.delete('/user/:id',userData.deleteUser);


router.get('/category',categoryData.getAllCategories);
router.get('/category/:id',categoryData.getcategoryByID);
router.post('/category',categoryData.addcategory);
router.put('/category/:id',categoryData.updatecategory);
router.delete('/category/:id',categoryData.deletecategory);


router.get('/question',questionData.getAllCategories);
router.get('/question/:id',questionData.getquestionByID);
router.post('/question/',questionData.addquestion);
router.put('/question/:id',questionData.updatequestion);
router.delete('/question/:id',questionData.deletequestion);


export {
    router as route
}