const UserModel = require("../Schemas/User");
class UserController {


    addUser(req, res, next) {

        const {
            firstName, 
            lastName, 
            gender, 
            age, 
            email, 
            password, 
            followers, 
            followings, 
            pages, 
            groups
        } = req.body;

        const user = new UserModel();

        user.addUser(firstName, lastName, gender, age, email, password, followers, followings, pages, groups);
    }
}

module.exports = UserController;