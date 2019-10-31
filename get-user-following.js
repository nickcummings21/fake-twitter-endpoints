exports.handler = async event => {
    console.log("Getting user following: " + JSON.stringify(event));
  
    const user = users.filter(user => user.username === event.username)[0];
    if (event.lastKey >= user.following.length) {
      return new GetUserFollowingResult(event.username, [], event.lastKey, false);
    }
  
    console.log(user);
    const key = event.lastKey + 1;
    const following = user.following.slice(key, key + event.pageSize);
  
    return new GetUserFollowingResult(
      event.username,
      following,
      event.lastKey + event.pageSize
    );
  };
  
  class GetUserFollowingRequest {
    //   username = "";
  
    // constructor() {
    //   this.username = "nickcummings21";
    // }
    constructor(username, lastKey, pageSize) {
      this.username = username || "nickcummings21";
      this.lastKey = lastKey || -1;
      this.pageSize = pageSize || 1;
    }
  }
  
  class GetUserFollowingResult {
  
    constructor(username, following, lastKey, hasMore) {
      this.username = username;
      this.following = following;
      this.lastKey = lastKey;
      this.hasMore = hasMore;
      this.statusCode = 200;
    }
  }
  
  const users = [
    {
      pic: "/nick-prof-pic.jpg",
      name: "Nick Cummings",
      email: "nickcummings21@yahoo.com",
      username: "nickcummings21",
      following: ["freddyfreedom", "khanofkhans", "mrblownapart"],
      followers: ["freddyfreedom", "khanofkhans"]
    },
    {
      pic: "/Frederick_Douglas.jpg",
      name: "Frederick Douglass",
      email: "freedom4all@gmail.com",
      username: "freddyfreedom",
      following: ["nickcummings21"],
      followers: ["nickcummings21"]
    },
    {
      pic: "/Genghis_Khan.png",
      name: "Genghis Khan",
      email: "mongolpride@hotmail.com",
      username: "khanofkhans",
      following: ["mrblownapart", "nickcummings21"],
      followers: ["mrblownapart", "nickcummings21"]
    },
    {
      pic: "/napoleon.jpg",
      name: "Napoleon Bonaparte",
      email: "bewarethedwarf@gmail.com",
      username: "mrblownapart",
      following: ["khanofkhans"],
      followers: ["khanofkhans", "nickcummings21"]
    }
  ];
  