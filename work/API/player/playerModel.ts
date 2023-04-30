import express from "express";
import mongoose, { Schema } from "mongoose";


interface Player{
    userName: String,
    position:String,
}

export enum PositionType {
  SUBSTITUTE = "SUBSTITUTE",
  ATTACKER = "ATTACKER",
  MIDFIELDER = "MIDFIELDER",
  DEFENDER = "DEFENDER",
  GOALKEEPER = "GOALKEEPER",
}

export const PlayerSchema = new Schema({
  userName: {require: true, type:String},
  position: {require : true, type:String},
  PositionType:{
    type: String,
    enum: PositionType,
    default: PositionType.SUBSTITUTE
  },
})


const PlayerModel= mongoose.model("players",PlayerSchema)

export default PlayerModel;