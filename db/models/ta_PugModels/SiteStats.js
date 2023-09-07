const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
  statsDate: { type: Date, default: Date.now() },
  member_register_pending_count: { type: Number, default: 0 },
  member_register_approved_count: { type: Number, default: 0 },
  membership_approved_count: { type: Number, default: 0 },
  member_total_count: { type: Number, default: 0 },
  member_total_state_count: { type: Number, default: 0 },
  member_total_private_count: { type: Number, default: 0 },
  member_total_public_count: { type: Number, default: 0 },
  member_total_active_count: { type: Number, default: 0 },
  member_total_inactive_count: { type: Number, default: 0 },
  member_dreamweaver_count: { type: Number, default: 0 },
  member_server_count: { type: Number, default: 0 },
  member_only_count: { type: Number, default: 0 },
  member_project_manager_count: { type: Number, default: 0 },
  member_site_manager_count: { type: Number, default: 0 },
  member_admin_role_site_manager_count: { type: Number, default: 0 },
  member_admin_role_local_administrator_count: { type: Number, default: 0 },
  max_total_members: { type: Number, default: 0 },
  max_state_members: { type: Number, default: 0 },
  exceeds_max_members: { type: Boolean, required: true, default: false },
  exceeds_max_state_members: { type: Boolean, required: true, default: false },
  admin_total_count: { type: Number, default: 0 },
  admin_total_programmer_count: { type: Number, default: 0 },
  admin_total_local_admin_count: { type: Number, default: 0 },
  max_total_admins: { type: Number, default: 0 },
  max_state_admins: { type: Number, default: 0 },
  exceeds_max_admins: { type: Boolean, required: true, default: false },
  exceeds_max_state_admins: { type: Boolean, required: true, default: false },
  vendor_total_count: { type: Number, default: 0 },
  vendor_total_private_count: { type: Number, default: 0 },
  vendor_total_public_count: { type: Number, default: 0 },
  vendor_total_active_count: { type: Number, default: 0 },
  vendor_total_inactive_count: { type: Number, default: 0 },
  max_total_vendors: { type: Number, default: 0 },
  max_state_vendors: { type: Number, default: 0 },
  exceeds_max_vendors: { type: Boolean, required: true, default: false },
  exceeds_max_state_vendors: { type: Boolean, required: true, default: false },
  statsDate: { type: Date, default: Date.now() },
  project_total_count: { type: Number, default: 0 },
  project_state_count: { type: Number, default: 0 },
  max_total_projects: { type: Number, default: 0 },
  max_state_projects: { type: Number, default: 0 },
  exceeds_max_projects: { type: Boolean, required: true, default: false },
  exceeds_max_state_projects: { type: Boolean, required: true, default: false },
  dream_total_count: { type: Number, default: 0 },
  dream_total_completed_count: { type: Number, default: 0 },
  dream_total_uncompleted_count: { type: Number, default: 0 },
  dream_state_count: { type: Number, default: 0 },
  dream_state_completed_count: { type: Number, default: 0 },
  dream_state_uncompleted_count: { type: Number, default: 0 },
  max_total_dreams: { type: Number, default: 0 },
  max_state_dreams: { type: Number, default: 0 },
  exceeds_max_dreams: { type: Boolean, required: true, default: false },
  exceeds_max_state_dreams: { type: Boolean, required: true, default: false },
})


const Site = mongoose.model("Site", SiteSchema);

module.exports = Site;