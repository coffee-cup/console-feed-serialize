"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetic_1 = require("./arithmetic");
var Function_1 = require("./Function");
// import HTML from "./HTML"
var Map_1 = require("./Map");
var replicator_1 = require("./replicator");
var transforms = [Function_1.default, arithmetic_1.default, Map_1.default];
var replicator = new replicator_1.default();
replicator.addTransforms(transforms);
function Encode(data) {
    return JSON.parse(replicator.encode(data));
}
exports.Encode = Encode;
function Decode(data) {
    return replicator.decode(JSON.stringify(data));
}
exports.Decode = Decode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQXFDO0FBQ3JDLHVDQUFpQztBQUNqQyw0QkFBNEI7QUFDNUIsNkJBQXVCO0FBRXZCLDJDQUFxQztBQUVyQyxJQUFNLFVBQVUsR0FBRyxDQUFDLGtCQUFRLEVBQUUsb0JBQVUsRUFBRSxhQUFHLENBQUMsQ0FBQTtBQUU5QyxJQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQTtBQUNuQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBRXBDLGdCQUEwQixJQUFTO0lBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDNUMsQ0FBQztBQUZELHdCQUVDO0FBRUQsZ0JBQXVCLElBQVM7SUFDOUIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNoRCxDQUFDO0FBRkQsd0JBRUMifQ==