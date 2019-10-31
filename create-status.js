exports.handler = async event => {
  console.log("Creating status: " + JSON.stringify(event));

  statuses.push(event); // Add post to all followers' feeds

  return new CreateStatusResult();
};

class CreateStatusRequest {
  //   username = "";

  // constructor() {
  //   this.username = "nickcummings21";
  // }
  constructor(username, text, attachment, timestamp) {
    this.username = username;
    this.text = text;
    this.attachment = attachment;
    this.timestamp = timestamp;
  }
}

class CreateStatusResult {
  constructor() {
    this.statusCode = 200;
  }
}

const statuses = [];
