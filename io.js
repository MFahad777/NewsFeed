const socketIO = require("socket.io");

const NewsFeedController = require("./Controllers/NewsFeedController");

const newsFeedInstance = new NewsFeedController();

const User = require("./Schemas/User");

const app = require("./app");

const io = socketIO.Server(app);

io.on("connection", (socket) => {

    const user = new User();

    socket.on("postPublish",(postData, userData) => {

        const createdUser = user.add(userData);

        const generatedFeed = newsFeedInstance.addFeed(postData, createdUser);

        socket.emit("newsFeed", generatedFeed);

    });

});