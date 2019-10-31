exports.handler = async event => {
  console.log("Getting user story: " + JSON.stringify(event));

  if (event.lastKey >= hashtags[event.hashtag]) {
    return new GetPostsByHashtagResult(event.hashtag, [], event.lastKey, false);
  }

  const key = event.lastKey + 1;
  const posts = hashtags[event.hashtag].slice(key, key + event.pageSize);
  const newLastKey =
    key + event.pageSize - 1 < hashtags[event.hashtag].length
      ? key + event.pageSize - 1
      : hashtags[event.username].length - 1;
  const hasMore = newLastKey < hashtags[event.hashtag].length - 1;

  return new GetPostsByHashtagResult(event.hashtag, posts, newLastKey, hasMore);
};

class GetPostsByHashtagRequest {
  //   username = "";

  // constructor() {
  //   this.username = "nickcummings21";
  // }
  constructor(hashtag, lastKey, pageSize) {
    this.username = hashtag || "#killmenow";
    this.lastKey = lastKey || -1;
    this.pageSize = pageSize || 1;
  }
}

class GetPostsByHashtagResult {
  constructor(hashtag, posts, lastKey, hasMore) {
    this.hashtag = hashtag;
    this.posts = posts;
    this.lastKey = lastKey;
    this.hasMore = hasMore;
    this.statusCode = 200;
  }
}

const hashtags = {
  "#isitoveryet": [
    {
      user: "nickcummings21",
      text:
        "This project is taking foreverrrrrr #isitoveryet #cs340 #killmenow",
      attachment: "",
      timestamp: ""
    }
  ],
  "#cs340": [
    {
      user: "nickcummings21",
      text:
        "This project is taking foreverrrrrr #isitoveryet #cs340 #killmenow",
      attachment: "",
      timestamp: ""
    }
  ],
  "#killmenow": [
    {
      user: "nickcummings21",
      text:
        "This project is taking foreverrrrrr #isitoveryet #cs340 #killmenow",
      attachment: "",
      timestamp: ""
    }
  ],
  "#freedom4all": [
    {
      user: "freddyfreedom",
      text:
        "Hey @nickcummings21, I'm working on a project, too! It's for fighting prejudice in America! #freedom4all #america",
      attachment: "",
      timestamp: ""
    }
  ],
  "#america": [
    {
      user: "freddyfreedom",
      text:
        "Hey @nickcummings21, I'm working on a project, too! It's for fighting prejudice in America! #freedom4all #america",
      attachment: "",
      timestamp: ""
    }
  ],
  "#mystory": [
    {
      user: "freddyfreedom",
      text:
        "Check out my new autobiography: Narrative of the Life of Frederick Douglass, an American slave #mystory #allaboutme",
      attachment: "",
      timestamp: ""
    }
  ],
  "#allaboutme": [
    {
      user: "freddyfreedom",
      text:
        "Check out my new autobiography: Narrative of the Life of Frederick Douglass, an American slave #mystory #allaboutme",
      attachment: "",
      timestamp: ""
    }
  ],
  "#conquerorsneversleep": [
    {
      user: "khanofkhans",
      text:
        "Thinking about vacationing in China this year... ;) #ConquerorsNeverSleep",
      attachment: "",
      timestamp: ""
    }
  ]
};
