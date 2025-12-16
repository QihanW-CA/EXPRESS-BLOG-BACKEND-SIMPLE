class UserPost {
  constructor(id, title, content, views, likes, authorID, date) {
    // this.title = title;
    // this.content = content;
    // this.views = views;
    // this.likes = likes;
    // this.user = user;
    this.obj = {
      id: id,
      title: title,
      content: content,
      views: views,
      likes: likes,
      authorID: authorID,
      createDate: date,
    };
  }
}
