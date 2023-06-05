const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/nodejs_chat-message",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connect successfullyyy!!!");
    } catch (error) {
        console.log("Connect failure!!!");
    }
}

module.exports = { connect };
