"use strict";
exports.__esModule = true;
exports.PlayerSchema = exports.PositionType = void 0;
var mongoose_1 = require("mongoose");
var PositionType;
(function (PositionType) {
    PositionType["SUBSTITUTE"] = "SUBSTITUTE";
    PositionType["ATTACKER"] = "ATTACKER";
    PositionType["MIDFIELDER"] = "MIDFIELDER";
    PositionType["DEFENDER"] = "DEFENDER";
    PositionType["GOALKEEPER"] = "GOALKEEPER";
})(PositionType = exports.PositionType || (exports.PositionType = {}));
exports.PlayerSchema = new mongoose_1.Schema({
    userName: { require: true, type: String },
    position: { require: true, type: String },
    PositionType: {
        type: String,
        "enum": PositionType,
        "default": PositionType.SUBSTITUTE
    }
});
var PlayerModel = mongoose_1["default"].model("players", exports.PlayerSchema);
exports["default"] = PlayerModel;
