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
}

module.exports = NewsFeed;