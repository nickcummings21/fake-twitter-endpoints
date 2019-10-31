exports.handler = async event => {
  console.log("Unfollowing user: " + JSON.stringify(event));

  const index = userFollowers[event.activeUser].indexOf(event.unfollowUser);
  userFollowers[event.activeUser].splice(index, 1);

  return new UnfollowUserResult();
};

class UnfollowUserRequest {
  //   username = "";

  // constructor() {
  //   this.username = "nickcummings21";
  // }
  constructor(activeUser, unfollowUser) {
    this.activeUser = activeUser;
    this.unfollowUser = unfollowUser;
  }
}

class UnfollowUserResult {
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
