import getDB  from "./sqliteDB.js"
const db = getDB();

//Get the post by author ID
export function selectPostByAuthorId(authorId){
    const raw=db.prepare('SELECT * FROM posts WHERE author_id = ?');
    return raw.get(authorId)
}

export function selectPostById(id) {
    const raw=db.prepare('SELECT * FROM posts WHERE id = ?');
    return raw.get(id);
}

export function orderPostByAndSelectById(sort,id) {
    const raw=db.prepare('SELECT * FROM posts WHERE id=? ORDER BY ? LIMIT 20 ASC');
    return raw.get(id,sort);
}

export function orderPostByAndSelectByAuthorId(sort,authorId){
    const raw=db.prepare('SELECT * FROM posts WHERE author_id=? ORDER BY ? LIMIT 20 ASC');
    return raw.get(authorId,sort);
}

//Update the post
export function updatePost(postId, postBody){
    // db.exec(`UPDATE posts SET content=${postBody.content} WHERE id = ${postId}`);
    let raw=db.prepare('UPDATE posts SET content=? WHERE id = ?');
    raw.run(postBody, postId);
}

//Add new post
export function newPostToDB(authorId, postBody){
    const stmt = db.prepare(`
    INSERT INTO posts (id, title, content, views, likes, author_id, create_date)
    VALUES (?, ?, ?, ?, ?, ?, ?)
`);

    stmt.run(
        postBody.id,
        postBody.title,
        postBody.content,
        postBody.views,
        postBody.likes,
        postBody.authorID,
        postBody.createDate || new Date().toISOString()
    );

}

//Delete by author id
export function deleteByAuthorId(authorId){
    // db.exec(`DELETE FROM posts WHERE author_id=${id}`);
    let raw =db.prepare(`DELETE FROM posts WHERE author_id = ?`);
    raw.run(authorId);

}
//Delete by post id
export function deleteByPostId(post_id){
    // db.exec(`DELETE FROM posts WHERE id = ${post_id}`);
    let raw=db.prepare(`DELETE FROM posts WHERE id = ?`);
    raw.run(post_id);
}