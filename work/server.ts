import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; 
dotenv.config();
import cookieParser from 'cookie-parser';
const uri: string | undefined = process.env.MONGODB_URI;

//to be able to get data from client add this line
app.use(cookieParser())

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

app.use(express.json());
app.use(express.static("./public"));

import usersRouter from './API/user/userRoute';
app.use('/api/users', usersRouter);

import playerRouter from './API/player/playerRoute';
app.use('/api/courses', playerRouter);


import gameRouter from './API/game/gameRoute';
app.use('/api/courses', gameRouter);



app.listen(3000, () => {
  console.log("server listen on port 3000");
});