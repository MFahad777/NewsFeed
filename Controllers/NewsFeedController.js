const NewsFeedModel = require("../Schemas/NewsFeed");

const feedInstance = NewsFeedModel();

class NewsFeedController {

    addFeed(postData, user) {

        const generatedNewsFeed = feedInstance.addFeed(postData, user);

        return generatedNewsFeed;

    }

    getFeeds(req, res, next) {

        const userId = req.query.userId;

        return res.status(200).json(feedInstance.getFeeds(userId));
    }


}

module.exports = NewsFeedController;