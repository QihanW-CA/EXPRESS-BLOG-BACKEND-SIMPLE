import getDB  from "./sqliteDB.js"
const db = getDB();

//Get the post by author ID
export function readPostByAuthorId(authorId){
  const raw= db.prepare(`SELECT * FROM posts WHERE author_id ==${authorId}`);
    let result;
    return result =raw.all()
}

export function readPostById(id) {
    const raw = db.prepare(`SELECT * FROM posts WHERE id = ${id}`);
}