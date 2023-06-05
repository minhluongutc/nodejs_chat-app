const express = require("express");
const handlebars = require("express-handlebars");
const route = require("./routers/index");

const app = express();

app.use(express.static("./src/public"));

// template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/resources/views");

route(app);

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
