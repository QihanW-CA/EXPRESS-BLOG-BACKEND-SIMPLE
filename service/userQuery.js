/*
In this module, every method should be named in the Sqlite statements style.
For example:
    In Sqlite: SELECT username FROM users WHERE id=?
    In the module: selectUsernameById(id){}
This is to avoid name confusion in controllers.
 */
import getDB from "./sqliteDB.js";

//Get database.
const db=getDB()

//GET methods.

//Get the username by UUID.
export function selectUsernameById(id){
    const raw=db.prepare('SELECT username FROM users WHERE id=?');
    return raw.run(id)
}
export  function getUserById(id){
    const raw=db.prepare(`SELECT username FROM users WHERE id='${id}'`);
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
    return {"message":"Username updated successfully.","new username":newUsername};
}

//Update the password of user.
export function updatePassword(userId,newPassword){
    db.exec(`UPDATE users SET password=${newPassword} WHERE id=${userId}`)
    return {"message":"Password updated successfully.","new password":newPassword};

}

//Update the role of the user
export function updateRole(username,newRole){
    const raw= db.prepare("UPDATE users SET role=? WHERE username=?")
    const result=raw.all(newRole,username)
}

//Insert new user into db
export function insertNewUserToDB(newUser){

   const raw= db.prepare('INSERT INTO users VALUES (?,?,?,?)')
    try{
        raw.run(newUser.id.toString(),newUser.username,newUser.password.toString(),newUser.role.toString());
    }catch (err)
    {
        throw err;
    }
}
//Functional methods
//Compare username.
export function checkUsername(userName){
    const raw=db.prepare('SELECT username FROM users WHERE username=?');
    const result=raw.all(userName)
    if(!result){
        return{"exists":false}
    }
    console.log(result)
    // if(result.toString().toLocaleLowerCase()===userName.toLocaleLowerCase()){
    //     // throw new Error(" already exists")
    //     return {"exists":true}
    // }
}

export function getPasswordByUsername(username){
    const raw=db.prepare(`SELECT password FROM users WHERE username=${username}`);
    return raw.all()
}

//TEST function area
