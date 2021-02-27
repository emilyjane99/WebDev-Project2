"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userArray = exports.usersRouter = void 0;
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const users_1 = require("../models/users");
const usersRouter = express_1.default.Router();
exports.usersRouter = usersRouter;
let userArray = [];
exports.userArray = userArray;
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let urlencodedParser = body_parser_1.urlencoded({ extended: false });
//GET Request received on /Users
usersRouter.get('/', (req, res, next) => {
    //display users
    res.status(200).send(userArray);
});
//POST Request received on /Users
usersRouter.post('/', jsonParser, (req, res, next) => {
    //add new user
    if (userArray.length === 0) {
        let lastUser = 0;
        let newUser = new users_1.User(++lastUser, req.body.firstName, req.body.lastName, req.body.emailAddress, req.body.password);
        userArray.push(newUser);
        res.status(201).json(newUser);
    }
    else {
        let lastUser = userArray[userArray.length - 1].userId;
        let newUser = new users_1.User(++lastUser, req.body.firstName, req.body.lastName, req.body.emailAddress, req.body.password);
        userArray.push(newUser);
        res.status(201).json(newUser);
    }
    console.log(req.body.firstName);
    //res.status(201).send(res.json(userArray[userArray.length - 1]));
});
//# sourceMappingURL=userRoute.js.map