import express from 'express';
import  loginOrSignUp  from './../controllers/user.js';

const router = express.Router();

// router.get("/get-data", (req, res) => {
//     res.status(200).json({
//         sucess: true,
//     });
// });

router.post('/login', loginOrSignUp);



export default router;