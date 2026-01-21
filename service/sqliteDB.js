/*This is module where open the database
and return a database object.
Other modules should use this to get the database.
*/
//Import sqlite
import * as sqlite from "node:sqlite";
const dbPath="./src/blog_db.db"
const db=new sqlite.DatabaseSync(dbPath)
//Allow modules to get the database.It should be open once some module uses function.
//It was not set when to close
export  default  function getDB(){
    return db;
}
