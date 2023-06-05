const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
    {
        username: { type: String, minlength: 6, require: true, unique: true },
        password: { type: String, minlength: 6, require: true },
        gender: { type: Boolean, require: true },
        avatar: {
            type: String,
            default: function () {
                if (this.gender == true) {
                    return "avt-default-male.jpg";
                } else {
                    return "avt-default-female.jpg";
                }
            },
        },
    },
    {
        collection: "Users",
        timestamps: true,
    }
);

module.exports = mongoose.model("Users", UsersSchema);
