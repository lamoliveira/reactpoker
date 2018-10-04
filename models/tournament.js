const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  tournamentname: { type: String, required: true },
  tournamentdate: { type: Date, required: true },
  tournamentrules: { type: String, required: true },
  buyin: {type:Number, default: 100 },
  buyinstakes: {type:Number, default: 1000 },
  rebuy: {type:Number, default: 100 },
  rebuystakes: {type:Number, default: 1000 },
  addon: {type:Number, default: 100 },
  addonstakes: {type:Number, default: 1200 },
  datecreated: { type: Date, default: Date.now },
  blinds: [{
    level:{type:Number, default: 0 },
    description: String,
    small: {type:Number, default: 0 },
    big: {type:Number, default: 0 },
    ante: {type:Number, default: 0 },
    minutes: {type:Number, default: 15 },
    obs: String
  }],
  league: {
    type: Schema.Types.ObjectId,
    ref: "League"
  }
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;
