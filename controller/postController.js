// import { postAuthorById } from "../service/queryDB.js";
import ErrorModel from "../model/ErrorModel.js";
// import {addNewPost} from "../service/postQuery.js";
import {readPostByAuthorId} from "../service/postQuery.js";

//Get the post
export function getPostByAuthorId(req, res, next) {
  const authorId = req.params.id;
  // console.log(authorId);
  try {
    //Convert id to number otherwise it will return nothing.
    const postResult = readPostByAuthorId(Number(authorId));
    // console.log(postAuthorById(Number(authorId)));
    res.json(postResult);
  } catch (error) {
    next(error);
  }
}


//Post new post
export function postNewPost(req, res, next) {
  const post =req.body;
  console.log(post);
  if (!post) {
    return res.status(400).send({error: "Post not found"});
  }
  try{
    // const result= addNewPost(post);
    // res.json(result);
  }catch(err){
    next(err);
  }
}