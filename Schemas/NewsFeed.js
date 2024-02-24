const allFeeds = [];

class NewsFeed {

    addFeed(data, user) {

        const newsFeed = {
            data,
            userId: user.id
        }

        allFeeds.push({
            data,
            userId: user.id
        })

        return newsFeed;
    }

    getFeeds(userId) {
        return allFeeds.filter(feed => feed.userId === userId);
    }
}

module.exports = NewsFeed;