import Category from "../models/category.js";


 const getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find()
      res.status(200).json({
        sucess: true ,
        categories,
      })
    }catch(error){
        res.status(500).json({
            sucess: false,
            message: 'Error fetching categories',
            error: err.message
        });
    }
    }


    export default getAllCategories