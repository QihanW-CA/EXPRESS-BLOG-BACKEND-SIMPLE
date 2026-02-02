import {selectIdByUsername,selectHashPassword} from "../service/userQuery.js";
import {comparePassAndHash} from "../service/hashService.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export function jwtAuthentication(req,res,next) {
    // const {username,password} = req.body;
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({"error":"No token provided."});
    }
    const raw=header.split(' ')[1]
    // jwt.signToken(userToken, (err,token)=>{
    //     if(err) next(err)
    //
    //     console.log("token signed",token)
    // })
    // jwt.verifyToken(raw,(err,token)=>{
    //     if (err) next(err)
    //     console.log("token verified",token)
    //     next()
    // })
    jwt.verify(raw,process.env.JWT_SECRTE,(err,decoded) => {
        if(err){
            next(err)
        }
        next()
    });
    console.log("JWT authentication called")
    // next()
}