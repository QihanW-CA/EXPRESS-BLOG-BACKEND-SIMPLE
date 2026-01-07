// import * as dbQuery from "../service/queryDB.js";
import {getUserById,insertNewUserToDB} from "../service/userQuery.js";
import {contentToHash} from "../service/hashService.js";

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
   let newUser=req.body;
   const hashPassword=contentToHash(newUser.password)
   let user=new User(newUser.id,
       newUser.username,
       hashPassword,
       newUser.role)
   try{
      insertNewUserToDB(user.userinfo)
      res.json({"message":"User created successfully.",
      "user":newUser});
   }catch (err){
      next(err)
   }
}