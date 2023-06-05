const express = require("express");
const handlebars = require("express-handlebars");
const route = require("./routers");
const db = require("./config/db");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(express.static("./src/public"));

db.connect();

// template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/resources/views");

route(app);

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
