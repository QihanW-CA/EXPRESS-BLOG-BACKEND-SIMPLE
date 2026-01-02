//Import sqlite
import * as sqlite from "node:sqlite";
const dbPath="./src/blog_db.db"
let db=new sqlite.DatabaseSync(dbPath)
// db.open();
// const stmt=db.prepare("SELECT * FROM posts WHERE author_id=1");
// const result=stmt.all()
// console.log( result)
export  default  function getDB(){
    return db;
}
