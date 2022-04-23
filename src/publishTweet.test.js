const { publishTweet } = require(".");

describe.skip("publishTweet", () => {
  it("should return a document by number", async () => {
    const response = await publishTweet({
      appKey: process.env.TWITTER_APP_KEY,
      appSecret: process.env.TWITTER_APP_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      tweet:
        "Shout out to awesome contributors to https://github.com/PLhery/node-twitter-api-v2",
    });
    expect(response.data.id).toBeDefined();
  });
});
