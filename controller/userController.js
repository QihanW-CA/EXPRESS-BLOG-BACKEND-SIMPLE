// import * as dbQuery from "../service/queryDB.js";
import {getUserById} from "../service/userQuery.js";
export function getUsernameById(req, res, next) {
   let userId= req.param.id
   try{
      const userResult=getUserById(userId)
      res.json(userResult)
   }catch (err){
      next(err)
   }
}
