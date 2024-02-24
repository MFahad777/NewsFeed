const socketIO = require("socket.io");

const app = require("./app");

const io = socketIO(app);

io.on("connection", (socket) => {

    console.log(socket.id);

});