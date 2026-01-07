// import * as dbQuery from "../service/queryDB.js";
import {getUserById,insertNewUserToDB} from "../service/userQuery.js";
export function getUsernameById(req, res, next) {
   let userId= req.param.id
   try{
      const userResult=getUserById(userId)
      res.json(userResult)
   }catch (err){
      next(err)
   }
}
//Create new user
export function createNewUser(req,res,next){
   const newUser=req.body;
   try{
      insertNewUserToDB(newUser)
      res.json({"message":"User created successfully.",
      "user":newUser});
   }catch (err){
      next(err)
   }
}