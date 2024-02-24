const socketIO = require("socket.io");

const NewsFeed = require("./Schemas/NewsFeed");

const User = require("./Schemas/User");

const app = require("./app");

const io = socketIO(app);

io.on("connection", (socket) => {


    socket.on("postPublish",(postData, userData) => {

        const user = new User();

        const newsFeed = new NewsFeed();

        const createdUser = user.add(userData);

        const generatedFeed = newsFeed.addFeed(postData, createdUser);

        socket.emit("newsFeed", generatedFeed)

    })

});