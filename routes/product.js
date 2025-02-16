import express from 'express';
import getProductByCategoryId from './../controllers/product.js'


const router = express.Router();

router.post('/', getProductByCategoryId);



export default router;