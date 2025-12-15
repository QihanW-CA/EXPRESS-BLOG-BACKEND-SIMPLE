class UserBio {
  constructor(user, content) {
    this.obj = {
      id: user.id,
      username: user.username,
      bio: content,
    };
  }
}
