import getDB from "./sqliteDB.js";
import {comparePassAndHash} from "./hashService.js";

const db=getDB()

//Get the User
export  function getUserById(id){
    const raw=db.prepare(`SELECT user_name FROM users WHERE id=${id}`);
    return raw.all()
}
function getHashPassword(id){
    let raw=db.prepare(`SELECT password FROM users WHERE id=${id}`);
    return raw.all()
}
//Update User information

//Update the user's name.
export function updateUserName(userId,newUsername){
    db.exec(`UPDATE users SET username=${newUsername} WHERE id=${userId}`)
}

//Update the password of user.
export function updatePassword(userId,newPassword){
    db.exec(`UPDATE users SET password=${newPassword} WHERE id=${userId}`)
}

//Insert new user into db
export function insertNewUserToDB(newUser){
    const userIdDB=getUserById(newUser.id)
    if(userIdDB){
       throw new Error("User already exists")
    }
    db.exec(`INSERT INTO users VALUES(
    ${newUser.id},
    ${newUser.username},
    ${newUser.password},
    ${newUser.role}                                 
    )`)
}
//Functional methods
//Compare username.
export function checkUsername(userName){
    const raw=db.prepare(`SELECT user_name FROM users WHERE user_name=${userName}`);
    const result=raw.all()
    if(!result){
        throw new Error("Can't find user name")
    }
    if(result.toString().toLocaleLowerCase()===userName.toLocaleLowerCase()){
        throw new Error("User already exists")
    }
}

//User check
export function userCheck(id,password){
    let hashPassword=getHashPassword(id);
    let passCheck=comparePassAndHash(password,hashPassword);
    if(!passCheck){
        throw new Error("Wrong password")
    }
    return passCheck;
}

//TODO:Finish the function that compare the password.
//Compare password.
export function checkPassword(password){
}