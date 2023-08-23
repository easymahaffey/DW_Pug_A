const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  answerDate: { type: Date, default: Date.now() },
  questionGroupModule: { type: String, default: "" },
  questionModule: { type: String, default: "" },
  questionTitle: { type: String, default: "" },
  questionNumber: { type: String, default: "" },
  questionText: { type: String, default: "" },
  answerTime: { type: Number, default: null },
  answerText: { type: String, default: "" },
  answerCheckbox: { type: String, default: "" },
})

module.exports = mongoose.model("Answer", AnswerSchema);

const StudentSchema = new mongoose.Schema({
  member_id: { type: String },
  first_name: { type: String, trim: true, required: true },
  last_name: { type: String, trim: true, required: true },
  date_of_birth: { type: Date, default: Date.now() },
  date_member_joined: { type: Date, required: true, default: Date.now() },
  email: { type: String, unique: true, trim: true },
  phone: { type: String, trim: true },
  password: { type: String, trim: true },
  student_loggedIn: { type: Boolean, default: false },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zipCode: { type: String, required: true, trim: true },
  student_status: { type: String, default: "Active" },
  student_role: { type: String, default: "Student" },
  completed_challenge: { type: Boolean, default: false },
  completed_peer_training: { type: Boolean, default: false },
  student_privacy: { type: String },
  student_text: { type: String },
  student_image: { type: String },
  student_url: { type: String },
  student_test: { type: String },
  student_enroll_date: { type: Date, default: Date.now() },
  student_test_date: { type: Date, default: Date.now() },
  answers: [AnswerSchema],
  dark_mode: { type: Boolean, default: false },
});

module.exports = mongoose.model("Student", StudentSchema);
