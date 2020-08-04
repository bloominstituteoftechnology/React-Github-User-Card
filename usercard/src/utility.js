export class User {
  constructor(userData = {}, followers = {}) {
    if (userData.avatar_url)
      this.avatar_url = userData.avatar_url;
    else
      this.avatar_url = "./unknown.svg";
    this.hireable = userData.hireable;
    this.location = userData.location;
    this.username = userData.login;
    this.name = userData.name;
    // followers is filled from a different API request and may be
    // empty if that request hasn't completed.
    this.followers = followers;
  }
}

export class Follower {
  constructor(followers = {}) {
    this.id = followers.id;
    this.username = followers.login;
  }
}
