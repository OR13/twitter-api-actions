const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    appKey: core.getInput("app-key"),
    appSecret: core.getInput("app-secret"),
    accessToken: core.getInput("access-token"),
    accessSecret: core.getInput("access-secret"),
    tweet: core.getInput("tweet"),
  };
};

async function run() {
  try {
    const opts = getOpts();
    const response = await lib.publishTweet(opts);
    core.setOutput("json", JSON.stringify(response));
    core.setOutput("text", response.data.id);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
