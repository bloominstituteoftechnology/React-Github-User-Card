export default class User {
  constructor(data = {}) {
    if (data.avatar_url)
      this.avatar_url = data.avatar_url;
    else
      this.avatar_url = "./unknown.svg";
    this.followers_url = data.followers_url;
    this.hireable = data.hireable;
    this.location = data.location;
    this.username = data.login;
    this.name = data.name;
  }
}
