// import * as dbQuery from "../service/queryDB.js";
import {getUserById,insertNewUserToDB,userCheck} from "../service/userQuery.js";
import {contentToHash} from "../service/hashService.js";
import {signToken,verifyToken} from "../service/jwtAuth.js";

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

export function logInUser(req,res,next){
   const [id,password]=req.body;
   let username;

   let isExist=userCheck(id,password);
   if(!isExist||isExist!==true){
      res.status(401).send({"message":"User not found or password is incorrect.",})
   }
   try{
       username=getUserById(id)
   }catch (err){
      next(err)
   }
   // verifyToken({id:id,username:username})
   // signToken({id:id,username:username})
   return res.status(200).send({"message":"User logged in",})
}