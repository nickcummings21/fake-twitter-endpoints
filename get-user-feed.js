exports.handler = async event => {
    console.log("Getting user feed: " + JSON.stringify(event));
  
    if (event.lastKey >= feeds[event.username]) {
      return new GetUserFeedResult(event.username, [], event.lastKey, false);
    }
  
    const key = event.lastKey + 1;
    const feed = feeds[event.username].slice(key, key + event.pageSize);
    const newLastKey =
      key + event.pageSize - 1 < feeds[event.username].length
        ? key + event.pageSize - 1
        : feeds[event.username].length - 1;
    const hasMore = newLastKey < feeds[event.username].length - 1;
  
    return new GetUserFeedResult(event.username, feed, newLastKey, hasMore);
  };
  
  class GetUserFeedRequest {
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
  
  class GetUserFeedResult {
    constructor(username, feed, lastKey, hasMore) {
      this.username = username;
      this.feed = feed;
      this.lastKey = lastKey;
      this.hasMore = hasMore;
      this.statusCode = 200;
    }
  }
  
  const feeds = {
    nickcummings21: [
      {
        user: "freddyfreedom",
        text:
          "Hey @nickcummings21, I'm working on a project, too! It's for fighting prejudice in America! #freedom4all #america",
        attachment: "",
        timestamp: ""
      },
      {
        user: "freddyfreedom",
        text:
          "Check out my new autobiography: Narrative of the Life of Frederick Douglass, an American slave #myfeed #allaboutme",
        attachment: "",
        timestamp: ""
      },
      {
        user: "khanofkhans",
        text:
          "Thinking about vacationing in China this year... ;) #ConquerorsNeverSleep",
        attachment: "",
        timestamp: ""
      },
      {
        user: "mrblownapart",
        text: "Hey, guys! Check this out!",
        attachment: "/strange-planet.jpg",
        timestamp: ""
      }
    ],
    freddyfreedom: [
      {
        user: "nickcummings21",
        text: "This is my first status! :)",
        attachment: "",
        timestamp: ""
      },
      {
        user: "nickcummings21",
        text:
          "Working on a project for my CS 340 class. I hope I get it done soon... because if I don't then I am going to lose points on my project, which would be super depressing since that would affect my grade overall in the class and I don't want that to happen.",
        attachment: "",
        timestamp: ""
      },
      {
        user: "nickcummings21",
        text:
          "This project is taking foreverrrrrr #isitoveryet #cs340 #killmenow",
        attachment: "",
        timestamp: ""
      }
    ],
    khanofkhans: [
      {
        user: "nickcummings21",
        text: "This is my first status! :)",
        attachment: "",
        timestamp: ""
      },
      {
        user: "nickcummings21",
        text:
          "Working on a project for my CS 340 class. I hope I get it done soon... because if I don't then I am going to lose points on my project, which would be super depressing since that would affect my grade overall in the class and I don't want that to happen.",
        attachment: "",
        timestamp: ""
      },
      {
        user: "nickcummings21",
        text:
          "This project is taking foreverrrrrr #isitoveryet #cs340 #killmenow",
        attachment: "",
        timestamp: ""
      },
      {
        user: "mrblownapart",
        text: "Hey, guys! Check this out!",
        attachment: "/strange-planet.jpg",
        timestamp: ""
      }
    ],
    mrblownapart: [
      {
        user: "khanofkhans",
        text:
          "Thinking about vacationing in China this year... ;) #ConquerorsNeverSleep",
        attachment: "",
        timestamp: ""
      }
    ]
  };
  