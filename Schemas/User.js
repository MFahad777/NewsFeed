const allUsers = [];

const crypto = require("crypto");

class User {
    

    add({firstName, lastName, gender, age, email, password, followers, followings, pages, groups}) {

        const user = {
            id: crypto.randomUUID(),
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
        }

        allUsers.push(user);

        return user;
    }


}

module.exports = User;