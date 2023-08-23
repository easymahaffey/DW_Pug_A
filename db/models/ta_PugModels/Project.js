const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  event_name: { type: String, trim: true },
  event_date: { type: Date },
  event_location: { type: Date },
})

module.exports = mongoose.model("Event", EventSchema);

const PartnerSchema = new mongoose.Schema({
  partner_name: { type: String, trim: true },
  partner_service: { type: String, trim: true },
  partner_location: { type: String, trim: true },
})

module.exports = mongoose.model("Partner", PartnerSchema);

const ProjectSchema = new mongoose.Schema({
  project_name: { type: String, unique: true, trim: true },
  site_manager_first_name: { type: String, trim: true},
  site_manager_last_name: { type: String, trim: true},
  site_manager_member_id: { type: String },
  site_manager_membership_role: { type: String },
  alt_site_manager_first_name: { type: String, trim: true},
  alt_site_manager_last_name: { type: String, trim: true},
  alt_site_manager_member_id: { type: String },
  alt_site_manager_membership_role: { type: String },
  local_admin_first_name: { type: String, trim: true},
  local_admin_last_name: { type: String, trim: true},
  local_admin_member_id: { type: String },
  local_admin_membership_role: { type: String },
  alt_local_admin_first_name: { type: String, trim: true},
  alt_local_admin_last_name: { type: String, trim: true},
  alt_local_admin_member_id: { type: String },
  alt_local_admin_membership_role: { type: String },
  peer_support_first_name: { type: String, trim: true},
  peer_support_last_name: { type: String, trim: true},
  peer_support_member_id: { type: String },
  peer_support_membership_role: { type: String },
  alt_peer_support_first_name: { type: String, trim: true},
  alt_peer_support_last_name: { type: String, trim: true},
  alt_peer_support_member_id: { type: String },
  alt_peer_support_membership_role: { type: String },
  project_start_date: { type: Date, default: Date.now() },
  email: { type: String, trim: true },
  phone: { type: String, trim: true },
  extension: { type: String, trim: true },
  fax: { type: String, trim: true },
  address1: { type: String, trim: true },
  address2: { type: String, trim: true },
  city: { type: String, required: true, trim: true },
  State: { type: String, required: true, trim: true },
  zipCode: { type: String, required: true, trim: true },
  mail_address1: { type: String, trim: true },
  mail_address2: { type: String, trim: true },
  mail_city: { type: String, trim: true },
  mail_state: { type: String, trim: true },
  mail_zipCode: { type: String, trim: true },
  partners: [ PartnerSchema ],
  events: [ EventSchema ],
});

module.exports = mongoose.model("Project", ProjectSchema);
