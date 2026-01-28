# Simple Blog Back-end API  
A back-end project built with Express.js. Using Sqlite as database.Has very basic features like user sign in or up, JWT authentication, CRUD for  posts.
___
## The current state of project
* it is unfinished.
* I will and some new more features in the future.
___
## Before you start
* Make sure you have __Node.js__ installed.
* Learn some basic concepts of *back-end* and *Express.js*.
* the `.env` file has not included so add new one manually.
___
## How to use it?
1. Clone the whole project into your local computer or any computer you want to make it server.
2. Go to the folder has __app.js__ and open the terminal.Type in `node app.js`
3. The project should be running on port **3101**

### Posts
`/posts/`is prepared for the posts
#### Start point
* `/posts`

#### Query posts
* `/query-post`  
it supports some URL queries, such as:  
> `localhost.com/posts/query-post?id=0`  
>  
Now keep in mind in the real situations we use UUID to present id. It means id is not just a number but a long string.  
Or,  
you can do the query base on the author's id, like this:  
>`localhost.com/posts/query-post?authorId=0`
>  
Again, the author id here is also used UUID.  

NOTE:You only use one parameter to do the query. Otherwise, it returns a message like this:
>{message:"You can only pick one parameter from id and authorId", type:'error', }
>
You can find the data structure of Post in model folder.

### Users
`/users` 
* `/create-new-user` to create a new user
* `/update-username` to change the username
* `/update-password` to change the password

Same structure can be found in same place.
___
## See something, say something.
Not that serious but if you found any bug or something else. Just tell me in any way you like.

## Finally, we are here
Feel free to use this project in any conditions. If you feel it helps please give me a star.

## One little thing
If you want to offer me a job, contact the e-mail at my profile page.