const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const League = mongoose.model("League", leagueSchema);

module.exports = League;
