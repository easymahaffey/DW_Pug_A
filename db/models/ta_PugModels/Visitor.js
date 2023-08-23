const mongoose = require("mongoose");

const VisitorInfoSchema = new mongoose.Schema({
  ip_address: { type: String, default: "",  trim: true },
  language: { type: String, default: "",  trim: true },
  user_agent: { type: String, default: "",  trim: true }
})

const VisitorSchema = new mongoose.Schema({
  // visitor_info: [VisitorInfoSchema]
  ip_address: { type: String, default: "",  trim: true },
  language: { type: String, default: "",  trim: true },
  user_agent: { type: String, default: "",  trim: true }
})

const Visitor = mongoose.model("Visitor", VisitorSchema);

module.exports = Visitor;
