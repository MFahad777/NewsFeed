const NewsFeedModel = require("../Schemas/NewsFeed");

class NewsFeedController {

    addFeed(postData, user) {

        const feedInstance = NewsFeedModel();

        const generatedNewsFeed = feedInstance.addFeed(postData, user);

        return generatedNewsFeed;

    }


}

module.exports = NewsFeedController;