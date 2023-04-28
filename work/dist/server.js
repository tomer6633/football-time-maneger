"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var uri = process.env.MONGODB_URI;
//to be able to get data from client add this line
app.use(cookie_parser_1["default"]());
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
app.use(express_1["default"].json());
app.use(express_1["default"].static("./public"));
var userRoute_1 = require("./API/user/userRoute");
app.use('/api/users', userRoute_1["default"]);
var playerRoute_1 = require("./API/player/playerRoute");
app.use('/api/courses', playerRoute_1["default"]);
var gameRoute_1 = require("./API/game/gameRoute");
app.use('/api/courses', gameRoute_1["default"]);
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
