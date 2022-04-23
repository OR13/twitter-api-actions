const {
  TwitterApi,
  // TwitterApiV2Settings
} = require("twitter-api-v2");
// TwitterApiV2Settings.debug = true;

const publishTweet = async (options = {}) => {
  const { appKey, appSecret, accessToken, accessSecret, tweet } = options;
  const client = new TwitterApi({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  });
  const rwClient = client.readWrite;
  return rwClient.v2.tweet(tweet);
  // {
  //   data: {
  //     id: '1517909329151774720',
  //     text: '🎶 🎶 Hello from the command liiiiiine!!! 🎶 🎶'
  //   }
  // }
};

module.exports = publishTweet;
