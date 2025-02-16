import express from 'express';
import getAllCategories from './../controllers/category.js'


const router = express.Router();

router.post('/', getAllCategories);



export default router;