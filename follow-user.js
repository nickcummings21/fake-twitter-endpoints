exports.handler = async event => {
  console.log("Following user: " + JSON.stringify(event));

  userFollowers[event.activeUser].push(event.followUser);

  return new FollowUserResult();
};

class FollowUserRequest {
  //   username = "";

  // constructor() {
  //   this.username = "nickcummings21";
  // }
  constructor(activeUser, followUser) {
    this.activeUser = activeUser;
    this.followUser = followUser;
  }
}

class FollowUserResult {
  constructor() {
    this.statusCode = 200;
  }
}

const userFollowers = {
  nickcummings21: ["khanofkhans", "freddyfreedom", "mrblownapart"],
  freddyfreedom: ["nickcummings21"],
  khanofkhans: ["nickcummings21", "mrblownapart"],
  mrblownapart: ["khanofkhans"]
};
