exports.handler = async event => {
  console.log("Getting user story: " + JSON.stringify(event));

  if (event.lastKey >= stories[event.username]) {
    return new GetUserStoryResult(event.username, [], event.lastKey, false);
  }

  const key = event.lastKey + 1;
  const story = stories[event.username].slice(key, key + event.pageSize);
  const newLastKey =
    key + event.pageSize - 1 < stories[event.username].length
      ? key + event.pageSize - 1
      : stories[event.username].length - 1;
  const hasMore = newLastKey < stories[event.username].length - 1;

  return new GetUserStoryResult(event.username, story, newLastKey, hasMore);
};

class GetUserStoryRequest {
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

class GetUserStoryResult {
  constructor(username, story, lastKey, hasMore) {
    this.username = username;
    this.story = story;
    this.lastKey = lastKey;
    this.hasMore = hasMore;
    this.statusCode = 200;
  }
}

const stories = {
  nickcummings21: [
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
  freddyfreedom: [
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
        "Check out my new autobiography: Narrative of the Life of Frederick Douglass, an American slave #mystory #allaboutme",
      attachment: "",
      timestamp: ""
    }
  ],
  khanofkhans: [
    {
      user: "khanofkhans",
      text:
        "Thinking about vacationing in China this year... ;) #ConquerorsNeverSleep",
      attachment: "",
      timestamp: ""
    }
  ],
  mrblownapart: [
    {
      user: "mrblownapart",
      text: "Hey, guys! Check this out!",
      attachment:
        "https://images.squarespace-cdn.com/content/v1/5b84381785ede1ddd988a53c/1550525814481-FAET7IZIQ54WW5SIACAP/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/IMG_4570.jpeg?format=500w",
      timestamp: ""
    }
  ]
};
