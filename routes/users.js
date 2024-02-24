const router = require("express").Router;

const UserController = require("../Controllers/UserController");

const UserInstance = new UserController();

router.post("/addUser",UserInstance.add);


module.exports = router;