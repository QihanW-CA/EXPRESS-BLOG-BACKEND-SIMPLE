// import * as dbQuery from "../service/queryDB.js";
import {getUserById,insertNewUserToDB,updatePassword,updateUserName,checkUsername} from "../service/userQuery.js";
import {contentToHash,comparePassAndHash} from "../service/hashService.js";
import {getUUID} from "../service/uuidService.js";
import {signToken,verifyToken} from "../service/jwtAuth.js";

//Register
export function userRegister(req, res,next) {
   const {username, password} = req.body;
   let isExists;
   try{
     isExists = checkUsername(username);
   }catch(err){
     next(err);
   }
   if(isExists===true){
      res.status(400).send({"error":"Username already exists"});
   }

   let newId=getUUID().toString();
   let hashedPassword= contentToHash(password);
   let newUser = new User(newId,username,hashedPassword,"user")
   try{
      insertNewUserToDB(newUser.userinfo);
   }catch (err){
      next(err);
   }
}

//Log in
//JWT will be created and verified in this section.
export function userLogin(req, res,next){
   const {username, password} = req.body;

}

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
//To change the username.
export function changeUsername(req,res,next){
   let [id,newName]=req.body;
   try{
     let result= updateUserName(id,newName)
      res.json(result)
   }catch (err){
      next(err)
   }
}
//To change password
export function changePassword(req,res,next){
   let [id,newPassword]=req.body;
   try{
      let result=updatePassword(id,newPassword)
      res.json(result)
   }catch (err){
      next(err)
   }
}