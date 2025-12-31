import fdb from "../model/fakeDB.json" with {type: "json"};

let posts=fdb.posts


//Get by author ID
export function  getPostByAuthId(authId){
    return posts.find(post=>post.authorID===authId);
}


//Get by post ID
export function  getPostById(postId){
    return posts.find(post=>post.id===postId);
}


//TODO: use the file system "fs" to write this posts object into the real Json. This why it says error.
//post new post
export function  addNewPost(post){
    posts.push(post);
    // const newPostId=post.id
    // const newPost=this.getPostById(newPostId);
    // if(!newPost){
    //     throw new Error("Add new post failed")
    // }
    console.log(posts);
    return {message:"Add new post successfully"};
}

//Delete the post
export function  deletePost(postId){
    posts=posts.filter((post) => {
       return post.id !== postId;
   });
}

//put post
