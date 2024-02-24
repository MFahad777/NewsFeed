const router = require("express").Router;

const NewsFeedController = require("../Controllers/NewsFeedController");

const NewsFeedInstance = new NewsFeedController();

router.post("/getFeeds", NewsFeedInstance.getFeeds);

module.exports = router;