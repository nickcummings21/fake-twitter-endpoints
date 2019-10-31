export const handler = async (
  event: GetUserRequest
): Promise<GetUserResult> => {
  console.log("Getting user: " + event.username);
  return new GetUserResult(event.username);
};

class GetUserRequest {
  username: string;

  // constructor() {
  //   this.username = "nickcummings21";
  // }
  constructor(username?: string) {
    this.username = username || "nickcummings21";
  }
}

class GetUserResult {
  username: string;
  profilePic: string;

  constructor(username: string) {
    this.username = username;
    this.profilePic = users.filter(user => user.username === username)[0].pic;
  };
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
