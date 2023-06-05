const Users = require("../models/Users");
const bcrypt = require("bcryptjs");

class AuthController {
    // Register

    // [GET] render layout register
    async showRegister(req, res, next) {
        Users.find({})
            .then((Users) => res.json(Users))
            .catch((error) => next(error));
    }

    // [POST] create a new user
    async register(req, res) {
        try {
            // hash password
            const salt = await bcrypt.getSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            console.log(1);
            // create
            const newUser = await new Users({
                username: req.body.username,
                password: hashed,
                gender: req.body.gender,
            });
            console.log(newUser);
            // save to DB
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // Register
}
module.exports = new AuthController();
