export default class User {
  constructor(data = {}) {
    this.avatar_url = data.avatar_url;
    this.followers_url = data.followers_url;
    this.hireable = data.hireable;
    this.location = data.location;
    this.username = data.login;
    this.name = data.name;
  }
}
