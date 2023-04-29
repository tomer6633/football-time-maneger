import express from "express";
import mongoose, { Schema } from "mongoose";
import { PlayerSchema } from "../player/playerModel";

interface Game{
  players: string[]
}

const gameSchema= new Schema({
  players: String,
})

const GameModel= mongoose.model("game",gameSchema)