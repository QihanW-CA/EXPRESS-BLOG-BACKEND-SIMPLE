import express from 'express';
import {
    changePassword,
    changeUsername,
    createNewUser,
    getUsernameByIdTest,
    userRegister
} from "../controller/userController.js";

const router = express.Router();

//Create new user
router.post("/create-new-user",userRegister,(err,next)=>{
    if(err){
        err.code=500;
        next(err);
    }
})

//Update password
router.put("/update-password",changePassword,(err,next)=>{
    if(err){
    err.code=500;
    next(err);
}})
//Update username
router.put("/update_username",changeUsername,(err,next)=>{
    if(err){
    err.code=500;
    next(err);
}})

//Additional function area
router.get("/get-username",getUsernameByIdTest,(err,next)=>{
    if(err){
        err.code=500;
        next(err);
    }
})

export default router;