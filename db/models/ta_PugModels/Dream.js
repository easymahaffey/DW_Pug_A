const mongoose = require("mongoose");

const DreamSchema = new mongoose.Schema({
  current_project: { type: String },
  dream_name: { type: String },
  scrum_type: { type: String },
  start_date: { type: Date, required: true, default: Date.now() },
  password: { type: String },
  email: { type: String },
  website: { type: String },
  dw_first_name: { type: String },
  dw_last_name: { type: String },
  dw_member_id: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  State: { type: String },
  zipCode: { type: String },
  eligibility: { type: String },
  team_vacancy: { type: String },
  team_positions: { type: String },
  team_members: { type: String },
  synopsis: { type: String },
  privacy: { type: String },
  status: { type: String, default :"Pending Approval" },
  dw_membership_role: { type: String },
  dw_membership_status: { type: String },
  service_category: { type: String },
  service_type: { type: String },
  service: { type: String },
  service_developer: { type: String },
  stage: { type: Number },
  event_link: { type: String },
  results: { type: String },  
})


module.exports = mongoose.model("Dream", DreamSchema);



