import express from "express";
import mongoose, { Schema } from "mongoose";

interface Game{
  Games: string[]
}

const gameSchema= new Schema({
  Games: String,
})

const GameModel= mongoose.model("game",gameSchema);

export default GameModel