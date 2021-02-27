import { urlencoded } from 'body-parser';
import express from 'express';
import { User } from '../models/users';

const usersRouter = express.Router();

let userArray:User[]=[];
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let urlencodedParser = urlencoded({extended: false});

//GET Request received on /Users
usersRouter.get('/', (req,res,next)=>{
    //display users
    res.status(200).send(userArray);
});

//POST Request received on /Users
usersRouter.post('/', jsonParser, (req, res,next)=>{
    //add new user
    if(userArray.length === 0)
    {
        let lastUser = 0;
        let newUser = new User(++lastUser, req.body.firstName, req.body.lastName, req.body.emailAddress, req.body.password); 
        userArray.push(newUser);
        res.status(201).json(newUser);
    }
    else
    {
        let lastUser = userArray[userArray.length - 1].userId;
        let newUser = new User(++lastUser, req.body.firstName, req.body.lastName, req.body.emailAddress, req.body.password); 
        userArray.push(newUser);
        res.status(201).json(newUser);
    }
    console.log(req.body.firstName);
   //res.status(201).send(res.json(userArray[userArray.length - 1]));
})

export {usersRouter}
export {userArray}