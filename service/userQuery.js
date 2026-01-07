import getDB from "./sqliteDB.js";
const db=getDB()

//Get the User
export  function getUserById(id){
    const raw=db.prepare(`SELECT * FROM users WHERE id=${id}`);
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