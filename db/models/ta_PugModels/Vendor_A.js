const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  serviceDate: { type: Date, default: Date.now() },
  service: { type: String },
  serviceType: { type: String },
  serviceCategory: { type: String },
  tertiaryCategory: { type: String },
  serviceSource: { type: String },
  veteranService: { type: String },  
})
module.exports = mongoose.model("Service", ServiceSchema);

const PhoneSchema = new mongoose.Schema({
  phone: { type: String, trim: true },
  extension: { type: String, trim: true },
  alt_phone: { type: String, trim: true },
  alt_extension: { type: String, trim: true },
  cell_phone: { type: String, trim: true },
  fax: { type: String, trim: true },
})
module.exports = mongoose.model("Phone", PhoneSchema);

const AddressSchema = new mongoose.Schema({
  address1: { type: String, trim: true },
  address2: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zipCode: { type: String, trim: true },
  mail_address1: { type: String, trim: true },
  mail_address2: { type: String, trim: true },
  mail_city: { type: String, trim: true },
  mail_state: { type: String, trim: true },
  mail_zipCode: { type: String, trim: true },
})
module.exports = mongoose.model("Address", AddressSchema);

const PocSchema = new mongoose.Schema({
  poc_first_name: { type: String, trim: true },
  poc_last_name: { type: String, trim: true },
  poc_title: { type: String, trim: true },
  poc_email: { type: String, trim: true },
  poc_phone: [PhoneSchema],
})
module.exports = mongoose.model("POC", PocSchema);

const BranchSchema = new mongoose.Schema({
  point_of_contact: [PocSchema],
  alt_point_of_contact: [PocSchema],
  branch_website: { type: String, trim: true },
  branch_phone: [PhoneSchema],
  address: [AddressSchema],
 });
module.exports = mongoose.model("Branch", BranchSchema);

const OperationsSchema = new mongoose.Schema({
  business_hours: { type: String, trim: true },
  capacity: { type: String, trim: true },
  fees: { type: String, trim: true },
  more_details: { type: String, trim: true },
 });
module.exports = mongoose.model("Operations", OperationsSchema);

const InformationSchema = new mongoose.Schema({
  /// Arizona ///
  eligibility: { type: String, trim: true },
  referral_process: { type: String, trim: true },
  custody_level: { type: String, trim: true },
  adoc_approval: { type: String, trim: true },
  azrha: { type: String, trim: true },
  operations: [OperationsSchema],
 });
module.exports = mongoose.model("Information", InformationSchema);

const VendorSchema = new mongoose.Schema({
  organization_name: { type: String },
  member_id: { type: String },
  point_of_contact: [PocSchema],
  alt_point_of_contact: [PocSchema],
  date_organization_joined: { type: Date, required: true, default: Date.now() },
  org_email: { type: String },
  org_address: [BranchSchema],
  password: { type: String, trim: true },
  vendor_loggedIn: { type: Boolean, default: false },
  vendor_status: { type: String, default: "Active" },
  membership_role: { type: String, default: "Member" },
  membership_status: { type: String, default: "Active" },
  vendor_privacy: { type: String },
  vendor_text: { type: String },
  vendor_image: { type: String },
  vendor_url: { type: String },
  services: [ServiceSchema],
  branches: [BranchSchema],
});

module.exports = mongoose.model("Vendor", VendorSchema);
