const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  postDate: { type: Date, default: Date.now() },
  postTitle: { type: String, default: "" },
  postText: { type: String, default: "" },
  authorFirstName: { type: String, default: "" },
  authorLastName: { type: String, default: "" },
  authorID: { type: String, default: "" },
  dreamID: { type: String, default: "" },
})

const MemberSchema = new mongoose.Schema({
  auth_register: { type: String, required: true, maxLength: 3, default: "No" },
  current_project: { type: String, required: true },
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date, default: Date.now() },
  date_member_joined: { type: Date, required: true, default: Date.now() },
  time_as_member: { type: Date, required: true, default: Date.now() },
  email: { type: String, require: true, unique: true, trim: true },
  phone: { type: String, trim: true },
  password: { type: String, require: true, trim: true },
  loggedIn: { type: Boolean, required: true, default: false },
  address1: { type: String, trim: true },
  address2: { type: String, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zipCode: { type: String, required: true, trim: true },
  privacy: { type: String, default: "Show" },
  membership_approved: { type: String, required: true, maxLength: 3, default: "No" },
  membership_status: { type: String, default: "Active" },
  membership_role: { type: String, default: "Member" },
  admin_role: { type: String, default: "Inactive" },
  social_media_profile: { type: String, trim: true },
  dreamweaver_level: { type: Number, default: 0 },
  dreams_created: { type: Number, default: 0 },
  dreams_completed: { type: Number, default: 0 },
  member_student_status: { type: String, default: "Inactive" },
  member_student_role: { type: String, default: "Student" },
  member_student_id: { type: String, trim: true },
  wallPost: { type: String, trim: true },
  memberPosts: [PostSchema],
  dreamPosts: [PostSchema],
  dark_mode: { type: Boolean, default: false },
});

// Virtual for Member's full name
MemberSchema.virtual("name").get(function () {
  return this.last_name + ", " + this.first_name;
});

// Virtual for Member's time as member
MemberSchema.virtual("membershipTime").get(function () {
  var membershipTime_string = "";
  if (this.date_membership_joined) {
    membershipTime_string = DateTime.fromJSDate(
      this.date_member_joined
    ).toLocaleString(DateTime.DATE_MED);
  }
  membershipTime_string += " - ";
  if (this.time_as_member) {
    membershipTime_string += DateTime.fromJSDate(
      this.time_as_member
    ).toLocaleString(DateTime.DATE_MED);
  }
  return membershipTime_string;
});

// Virtual for Member's profile URL
MemberSchema.virtual("url").get(function () {
  return "/member-profile/" + this._id;
});

// Virtual for Member's profile settings URL
MemberSchema.virtual("url").get(function () {
  return "/member-profileSettings/" + this._id;
});

// Virtual for Member's student settings URL
MemberSchema.virtual("url").get(function () {
  return "/member-studentSettings/" + this._id;
});

// Virtual for Member's account settings URL
MemberSchema.virtual("url").get(function () {
  return "/member-accountSettings/" + this._id;
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
