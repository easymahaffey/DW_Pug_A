const mongoose = require("mongoose");

module.exports = mongoose.model("ModuleText", ModuleTextSchema);

const QuestionsSchema = new mongoose.Schema({
  questionGroupModule: { type: String },
  questionModule: { type: String },
  questionTitle: { type: String },
  questionTimer: { type: String },
  questionNumber: { type: String },
  questionText: { type: String },
  questionCheckboxTitle: { type: String },
  questionCheckbox: { type: String },
  
})

const AnswerSchema = new mongoose.Schema({
  answerDate: { type: Date, default: Date.now() },
  // questionGroupModule: { type: String },
  // questionModule: { type: String },
  // questionTitle: { type: String },
  // questionNumber: { type: String },
  // questionText: { type: String },
  answerTime: { type: Number },
  answerText: { type: String },
  answerCheckbox: { type: String },
})

const ModuleTextSchema = new mongoose.Schema({
  textImage: { type: String, trim: true },
  textTitle: { type: String, trim: true },
  textSubTitle: { type: String, trim: true },
  textNumber: { type: String, trim: true },
  textText: { type: String, trim: true },
  // textCheckbox: { type: String, trim: true }
  questions: [QuestionsSchema],
  answers: [AnswerSchema],
})

module.exports = mongoose.model("Questions", QuestionsSchema);



