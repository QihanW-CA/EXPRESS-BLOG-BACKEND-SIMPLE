class UserPost {
  constructor(title, content, views, likes, user) {
    // this.title = title;
    // this.content = content;
    // this.views = views;
    // this.likes = likes;
    // this.user = user;
    this.obj = {
      title: title,
      content: content,
      views: views,
      likes: likes,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
}
