import * as express  from "express";
import { userData } from "../services/users";
import { categoryData } from "../services/category";
import { questionData } from "../services/question";
import { answerData } from "../services/answer";

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


router.get('/answer',answerData.getAllCategories);
router.get('/answer/:id',answerData.getAnswerByID);
router.post('/answer',answerData.addAnswer);
router.put('/answer/:id',answerData.updateAnswer);
router.delete('/answer/:id',answerData.deleteAnswer);


export {
    router as route
}