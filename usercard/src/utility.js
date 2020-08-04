export class User {
  constructor(data = {}, followers = {}) {
    if (data.avatar_url)
      this.avatar_url = data.avatar_url;
    else
      this.avatar_url = "./unknown.svg";
    this.hireable = data.hireable;
    this.location = data.location;
    this.username = data.login;
    this.name = data.name;
    // followers is filled from a different API request and may be
    // empty if that request hasn't completed.
    this.followers = followers;
  }
}

export class Follower {
  constructor(data = {}) {

  }
}
