require("dotenv").config();

const userRoutes = require("./routes/users");

const newsFeedRoutes = require("./routes/newsFeed");

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.use("/api/users/",userRoutes);

app.use("/api/newsFeed", newsFeedRoutes);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))
