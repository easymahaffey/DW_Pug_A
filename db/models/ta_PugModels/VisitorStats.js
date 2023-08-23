const mongoose = require("mongoose");

const VisitorInfoSchema = new mongoose.Schema({
  ip_address: { type: String, default: "",  trim: true },
  language: { type: String, default: "",  trim: true },
  user_agent: { type: String, default: "",  trim: true }
})

const VisitorStatsSchema = new mongoose.Schema({
  statsDate: { type: Date, default: Date.now() },
  last_visitor_info: [ VisitorInfoSchema ],
  visitor_total_count: { type: Number, default: 0 },
  visitor_unique_count: { type: Number, default: 0 },
  visitor_total_state_count: { type: Number, default: 0 },
  visitor_total_state_unique_count: { type: Number, default: 0 },
  visitor_total_member_count: { type: Number, default: 0 },

  max_total_visitors: { type: Number, default: 0 },
  max_state_visitors: { type: Number, default: 0 },
  exceeds_max_visitors: { type: Boolean, required: true, default: false },
  exceeds_max_state_visitors: { type: Boolean, required: true, default: false },

  
})


const VisitorStats = mongoose.model("VisitorStats", VisitorStatsSchema);

module.exports = VisitorStats;
