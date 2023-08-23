const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");
const Student = require("../../../db/models/ta_PugModels/Student");
const ModuleText = require("../../../db/models/ta_PugModels/Questions");

const renderUserChallenge = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    let loggedIn = false;
    let userLevel = "";
    let membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      if (!data) {
        let id = req.params.id;
        User.findById({ _id: id }, (err, data) => {
          if (err) {
            console.log(err);
          }
          let { name, userLevel, loggedIn, } = data;
          res.render(pageToRender, {
            name,
            userLevel,
            loggedIn,
            id,
          });
        });
      } else {
        let {
          loggedIn,
          admin_role,
          membership_role,
          member_student_status,
          id,
          first_name,
        } = data;
        let student_role = data.member_student_role
        res.render(pageToRender, {
          admin_role,
          first_name,
          membership_role,
          member_student_status,
          student_role,
          loggedIn,
          id,
        });
      }
    });
  }
};

const renderChallengeModule = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    let loggedIn = false;
    let userLevel = "";
    let membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let loggedIn = memberData.loggedIn;
      let admin_role = memberData.admin_role;
      let current_project = memberData.current_project;
      let membership_role = memberData.membership_role;
      let member_student_status = memberData.member_student_status;
      Student.findOne({ member_id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        if (!data) {
          let message =
            "You have not registered as a student. Please register for the Challenge.";
          loggedIn = true;
          let id = member_id;
          res.redirect("/registerStudent/" + id);
        } else {
          let {
            member_id,
            first_name,
            last_name,
            date_member_joined,
            email,
            phone,
            student_loggedIn,
            city,
            state,
            zipCode,
            student_role,
            student_privacy,
            student_text,
            student_image,
            student_url,
            student_test,
            student_enroll_date,
          } = data;
          let id = member_id;
          let student_id = data._id;
          res.render(pageToRender, {
            current_project,
            admin_role,
            membership_role,
            member_student_status,
            loggedIn,
            student_loggedIn,
            id,
            student_id,
            first_name,
            last_name,
            date_member_joined,
            email,
            phone,
            city,
            state,
            zipCode,
            student_role,
            student_privacy,
            student_text,
            student_image,
            student_url,
            student_test,
            student_enroll_date,
          });
        }
      });
    });
  }
};

const challengeModule = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let loggedIn = memberData.loggedIn;
      let admin_role = memberData.admin_role;
      let current_project = memberData.current_project;
      let membership_role = memberData.membership_role;
      let member_student_status = memberData.member_student_status;
      let student_id = memberData.member_student_id;
      let reqBody = req.body;
      let {
        questionGroupModule,
        questionModule,
        questionTitle,
        questionNumber,
        questionText,
        answerTime,
        answerText,
        answerCheckbox,
      } = reqBody;
      Student.findById({ _id: student_id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        let newAnswer = {
          questionGroupModule,
          questionModule,
          questionTitle,
          questionNumber,
          questionText,
          answerTime,
          answerText,
        };
        let question = reqBody.questionModule
        if (question[0] === question[1]) {
          let newAnswers = {
            questionGroupModule,
            questionModule,
            questionTitle,
            questionNumber,
            questionText,
            answerTime,
            answerText,
          }
          let newAnswer = {}
          for (let i = 0; i < Object.entries(newAnswers)[3][1].length; i++) {
            Object.entries(newAnswers)
              .forEach(([key, value]) => (newAnswer[key] = value[i]))
            data.answers.push(newAnswer);
          }
        } else {
          data.answers.push(newAnswer);
        }
        Student.findByIdAndUpdate(
          { _id: student_id },
          { $set: { answers: data.answers } },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            let {
              _id,
              member_id,
              first_name,
              last_name,
              student_loggedIn,
              student_role,
              questionGroupModule,
              questionModule,
              questionTitle,
              questionNumber,
              questionText,
              answerTime,
              answerText,
              answerCheckbox,
            } = data;
            let id = member_id;
            let student_id = _id;
            res.render(pageToRender, {
              admin_role,
              current_project,
              membership_role,
              member_student_status,
              loggedIn,
              id,
              student_id,
              first_name,
              last_name,
              student_loggedIn,
              student_role,
              questionGroupModule,
              questionModule,
              questionTitle,
              questionNumber,
              questionText,
              answerTime,
              answerText,
              answerCheckbox,
            });
          }
        );
      });
    });
  };
};

const renderChallengeViewer = (pageToRender, req, res) => {
  let page_id = req.params.pg;
  let member_id = req.params.id;
  if (member_id === "undefined") {
    let loggedIn = false;
    let userLevel = "";
    let membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let loggedIn = memberData.loggedIn;
      let admin_role = memberData.admin_role;
      let current_project = memberData.current_project;
      let membership_role = memberData.membership_role;
      let member_student_status = memberData.member_student_status;
      Student.findOne({ member_id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        if (!data) {
          let message =
            "You have not registered as a student. Please register for TriAge Challenge.";
          loggedIn = true;
          let id = member_id;
          res.redirect("/registerStudent/" + id);
        } else {
          let {
            member_id,
            first_name,
            last_name,
            date_member_joined,
            email,
            phone,
            student_loggedIn,
            city,
            state,
            zipCode,
            student_role,
            student_privacy,
            student_text,
            student_image,
            student_url,
            student_test,
            student_enroll_date,
          } = data;
          let id = member_id;
          let student_id = data._id;
          ModuleText
            .find()
            // .find({ questions: questions })
            // .find({ moduletexts: data })
            .exec((err, textData) => {
              if (err) {
                console.log(err);
                done(null, textData);
              }
              let message = "TESTING DATA OUTPUT";

              for (let i = 0; i < textData.length; i++) { // i = page
                let newPage = textData[page_id]
                let {
                  _id,
                  textImage,
                  textTitle,
                  textNumber,
                  textSubTitle,
                  textContent,
                  questionGroupModule,
                  questionTitle,
                  questionTimer,
                  questionNumber,
                  questionText,
                  questionCheckboxTitle,
                  questionCheckbox,
                } = newPage
                let text_id = newPage._id
                res.render(pageToRender, {
                  admin_role,
                  current_project,
                  membership_role,
                  member_student_status,
                  loggedIn,
                  student_loggedIn,
                  id,
                  student_id,
                  first_name,
                  last_name,
                  date_member_joined,
                  email,
                  phone,
                  city,
                  state,
                  zipCode,
                  student_role,
                  student_privacy,
                  student_text,
                  student_image,
                  student_url,
                  student_test,
                  student_enroll_date,
                  text_id,
                  message,
                  data,
                  textImage,
                  textTitle,
                  textNumber,
                  textSubTitle,
                  textContent,
                  questionGroupModule,
                  questionTitle,
                  questionTimer,
                  questionNumber,
                  questionText,
                  questionCheckboxTitle,
                  questionCheckbox
                });
              };
            });
        };
      });
    });
  };
};

const challengeViewer = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    let loggedIn = false;
    let userLevel = "";
    let membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let loggedIn = memberData.loggedIn;
      let current_project = memberData.current_project;
      let membership_role = memberData.membership_role;
      let member_student_status = memberData.member_student_status;
      let student_id = memberData.member_student_id;
      let reqBody = req.body;
      let {
        questionGroupModule,
        questionModule,
        questionTitle,
        questionSubTitle,
        questionNumber,
        questionText,
        answerHeader,
        answerTime,
        answerText,
        answerCheckbox,
      } = reqBody;
      Student.findById({ _id: student_id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        let newAnswer = {
          questionGroupModule,
          questionModule,
          questionTitle,
          questionSubTitle,
          questionNumber,
          questionText,
          answerHeader,
          answerTime,
          answerText,
          answerCheckbox,
        };
        data.answers.push(newAnswer);
        Student.findByIdAndUpdate(
          { _id: student_id },
          { $set: { answers: data.answers } },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            let {
              _id,
              member_id,
              first_name,
              last_name,
              student_loggedIn,
              student_role,
              questionGroupModule,
              questionModule,
              questionTitle,
              questionSubTitle,
              questionNumber,
              questionText,
              answerHeader,
              answerTime,
              answerText,
              answerCheckbox,
            } = data;
            let id = member_id;
            let student_id = _id;
            res.render(pageToRender, {
              current_project,
              membership_role,
              member_student_status,
              loggedIn,
              id,
              student_id,
              first_name,
              last_name,
              student_loggedIn,
              student_role,
              questionGroupModule,
              questionModule,
              questionTitle,
              questionSubTitle,
              questionNumber,
              questionText,
              answerHeader,
              answerTime,
              answerText,
              answerCheckbox,
            });
          }
        );
      });
    });
  };
};

module.exports = {

  /////////////////////////////////////
  ///////// TriAge Challenge  /////////
  /////////////////////////////////////

  secureChallenge: (req, res) => {
    renderUserChallenge("triage-challenge", req, res);
  },
  secureMyChallenge: (req, res) => {
    renderUserChallenge("triage-my-challenge", req, res);
  },
  secureMemberChallenge: (req, res) => {
    renderChallengeModule("member-challenge", req, res);
  },

  renderSecureChallengeViewer: (req, res) => {
    renderChallengeViewer("triage-main-challenge-modules-viewer", req, res);
  },
  secureChallengeViewer: (req, res) => {
    challengeViewer("triage-main-challenge-modules-viewer", req, res);
  },

  secureMainChallengeModules: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules", req, res);
  },
  renderSecureMainChallengeModulesS1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s1", req, res);
  },
  renderSecureMainChallengeModulesS2a: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2a", req, res);
  },
  renderSecureMainChallengeModulesS2aq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2aq1", req, res);
  },
  secureMainChallengeModulesS2aq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s2aq1", req, res);
  },
  renderSecureMainChallengeModulesS2b: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2b", req, res);
  },
  renderSecureMainChallengeModulesS2c: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2c", req, res);
  },
  renderSecureMainChallengeModulesS2cq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2cq1", req, res);
  },
  secureMainChallengeModulesS2cq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s2cq1", req, res);
  },
  renderSecureMainChallengeModulesS2cq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2cq2", req, res);
  },
  secureMainChallengeModulesS2cq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s2cq2", req, res);
  },
  renderSecureMainChallengeModulesS2cq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2cq3", req, res);
  },
  secureMainChallengeModulesS2cq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s2cq3", req, res);
  },
  renderSecureMainChallengeModulesS2cq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2cq4", req, res);
  },
  secureMainChallengeModulesS2cq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s2cq4", req, res);
  },
  renderSecureMainChallengeModulesS2dr: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s2dr", req, res);
  },
  secureMainChallengeModulesS2dr: (req, res) => {
    challengeModule("triage-main-challenge-modules-s2dr", req, res);
  },
  renderSecureMainChallengeModulesS3a: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3a", req, res);
  },
  renderSecureMainChallengeModulesS3aq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3aq1", req, res);
  },
  secureMainChallengeModulesS3aq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3aq1", req, res);
  },
  renderSecureMainChallengeModulesS3b: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3b", req, res);
  },
  renderSecureMainChallengeModulesS3bq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3bq1", req, res);
  },
  secureMainChallengeModulesS3bq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3bq1", req, res);
  },
  renderSecureMainChallengeModulesS3bq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3bq2", req, res);
  },
  secureMainChallengeModulesS3bq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3bq2", req, res);
  },
  renderSecureMainChallengeModulesS3bq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3bq3", req, res);
  },
  secureMainChallengeModulesS3bq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3bq3", req, res);
  },
  renderSecureMainChallengeModulesS3bq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3bq4", req, res);
  },
  secureMainChallengeModulesS3bq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3bq4", req, res);
  },
  renderSecureMainChallengeModulesS3bq5: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3bq5", req, res);
  },
  secureMainChallengeModulesS3bq5: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3bq5", req, res);
  },
  renderSecureMainChallengeModulesS3br: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3br", req, res);
  },
  secureMainChallengeModulesS3br: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3br", req, res);
  },
  renderSecureMainChallengeModulesS3c: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3c", req, res);
  },
  renderSecureMainChallengeModulesS3cq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3cq1", req, res);
  },
  secureMainChallengeModulesS3cq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3cq1", req, res);
  },
  renderSecureMainChallengeModulesS3cq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3cq2", req, res);
  },
  secureMainChallengeModulesS3cq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3cq2", req, res);
  },
  renderSecureMainChallengeModulesS3cq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3cq3", req, res);
  },
  secureMainChallengeModulesS3cq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3cq3", req, res);
  },
  renderSecureMainChallengeModulesS3cq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3cq4", req, res);
  },
  secureMainChallengeModulesS3cq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3cq4", req, res);
  },
  renderSecureMainChallengeModulesS3cr: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3cr", req, res);
  },
  secureMainChallengeModulesS3cr: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3cr", req, res);
  },
  renderSecureMainChallengeModulesS3d: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3d", req, res);
  },
  renderSecureMainChallengeModulesS3dq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3dq1", req, res);
  },
  secureMainChallengeModulesS3dq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3dq1", req, res);
  },
  renderSecureMainChallengeModulesS3dq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3dq2", req, res);
  },
  secureMainChallengeModulesS3dq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3dq2", req, res);
  },
  renderSecureMainChallengeModulesS3dq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3dq3", req, res);
  },
  secureMainChallengeModulesS3dq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3dq3", req, res);
  },
  renderSecureMainChallengeModulesS3dq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3dq4", req, res);
  },
  secureMainChallengeModulesS3dq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3dq4", req, res);
  },
  renderSecureMainChallengeModulesS3dq5: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3dq5", req, res);
  },
  secureMainChallengeModulesS3dq5: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3dq5", req, res);
  },
  renderSecureMainChallengeModulesS3dr: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s3dr", req, res);
  },
  secureMainChallengeModulesS3dr: (req, res) => {
    challengeModule("triage-main-challenge-modules-s3dr", req, res);
  },
  renderSecureMainChallengeModulesS4a: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4a", req, res);
  },
  renderSecureMainChallengeModulesS4aq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4aq1", req, res);
  },
  secureMainChallengeModulesS4aq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4aq1", req, res);
  },
  renderSecureMainChallengeModulesS4bq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4bq1", req, res);
  },
  secureMainChallengeModulesS4bq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4bq1", req, res);
  },
  renderSecureMainChallengeModulesS4bq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4bq2", req, res);
  },
  secureMainChallengeModulesS4bq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4bq2", req, res);
  },
  renderSecureMainChallengeModulesS4bq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4bq3", req, res);
  },
  secureMainChallengeModulesS4bq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4bq3", req, res);
  },
  renderSecureMainChallengeModulesS4bq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4bq4", req, res);
  },
  secureMainChallengeModulesS4bq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4bq4", req, res);
  },
  renderSecureMainChallengeModulesS4br: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4br", req, res);
  },
  secureMainChallengeModulesS4br: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4br", req, res);
  },
  renderSecureMainChallengeModulesS4cq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4cq1", req, res);
  },
  secureMainChallengeModulesS4cq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4cq1", req, res);
  },
  renderSecureMainChallengeModulesS4cq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4cq2", req, res);
  },
  secureMainChallengeModulesS4cq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4cq2", req, res);
  },
  renderSecureMainChallengeModulesS4cq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4cq3", req, res);
  },
  secureMainChallengeModulesS4cq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4cq3", req, res);
  },
  renderSecureMainChallengeModulesS4cq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4cq4", req, res);
  },
  secureMainChallengeModulesS4cq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4cq4", req, res);
  },
  renderSecureMainChallengeModulesS4cq5: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4cq5", req, res);
  },
  secureMainChallengeModulesS4cq5: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4cq5", req, res);
  },
  renderSecureMainChallengeModulesS4cr: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s4cr", req, res);
  },
  secureMainChallengeModulesS4cr: (req, res) => {
    challengeModule("triage-main-challenge-modules-s4cr", req, res);
  },
  renderSecureMainChallengeModulesS5a: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5a", req, res);
  },
  renderSecureMainChallengeModulesS5aq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5aq1", req, res);
  },
  secureMainChallengeModulesS5aq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5aq1", req, res);
  },
  renderSecureMainChallengeModulesS5bq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5bq1", req, res);
  },
  secureMainChallengeModulesS5bq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5bq1", req, res);
  },
  renderSecureMainChallengeModulesS5bq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5bq2", req, res);
  },
  secureMainChallengeModulesS5bq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5bq2", req, res);
  },
  renderSecureMainChallengeModulesS5bq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5bq3", req, res);
  },
  secureMainChallengeModulesS5bq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5bq3", req, res);
  },
  renderSecureMainChallengeModulesS5bq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5bq4", req, res);
  },
  secureMainChallengeModulesS5bq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5bq4", req, res);
  },
  renderSecureMainChallengeModulesS5br: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5br", req, res);
  },
  secureMainChallengeModulesS5br: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5br", req, res);
  },
  renderSecureMainChallengeModulesS5c: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5c", req, res);
  },
  renderSecureMainChallengeModulesS5cq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5cq1", req, res);
  },
  secureMainChallengeModulesS5cq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5cq1", req, res);
  },
  renderSecureMainChallengeModulesS5cq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5cq2", req, res);
  },
  secureMainChallengeModulesS5cq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5cq2", req, res);
  },
  renderSecureMainChallengeModulesS5cr: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s5cr", req, res);
  },
  secureMainChallengeModulesS5cr: (req, res) => {
    challengeModule("triage-main-challenge-modules-s5cr", req, res);
  },
  renderSecureMainChallengeModulesS6a: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6a", req, res);
  },
  renderSecureMainChallengeModulesS6aq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6aq1", req, res);
  },
  secureMainChallengeModulesS6aq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6aq1", req, res);
  },
  renderSecureMainChallengeModulesS6aq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6aq2", req, res);
  },
  secureMainChallengeModulesS6aq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6aq2", req, res);
  },
  renderSecureMainChallengeModulesS6bq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6bq1", req, res);
  },
  secureMainChallengeModulesS6bq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6bq1", req, res);
  },
  renderSecureMainChallengeModulesS6bq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6bq2", req, res);
  },
  secureMainChallengeModulesS6bq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6bq2", req, res);
  },
  renderSecureMainChallengeModulesS6bq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6bq3", req, res);
  },
  secureMainChallengeModulesS6bq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6bq3", req, res);
  },
  renderSecureMainChallengeModulesS6bq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6bq4", req, res);
  },
  secureMainChallengeModulesS6bq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6bq4", req, res);
  },
  renderSecureMainChallengeModulesS6br: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6br", req, res);
  },
  secureMainChallengeModulesS6br: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6br", req, res);
  },
  renderSecureMainChallengeModulesS6cq1: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6cq1", req, res);
  },
  secureMainChallengeModulesS6cq1: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6cq1", req, res);
  },
  renderSecureMainChallengeModulesS6cq2: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6cq2", req, res);
  },
  secureMainChallengeModulesS6cq2: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6cq2", req, res);
  },
  renderSecureMainChallengeModulesS6cq3: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6cq3", req, res);
  },
  secureMainChallengeModulesS6cq3: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6cq3", req, res);
  },
  renderSecureMainChallengeModulesS6cq4: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6cq4", req, res);
  },
  secureMainChallengeModulesS6cq4: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6cq4", req, res);
  },
  renderSecureMainChallengeModulesS6cq5: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6cq5", req, res);
  },
  secureMainChallengeModulesS6cq5: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6cq5", req, res);
  },
  renderSecureMainChallengeModulesS6cr: (req, res) => {
    renderChallengeModule("triage-main-challenge-modules-s6cr", req, res);
  },
  secureMainChallengeModulesS6cr: (req, res) => {
    challengeModule("triage-main-challenge-modules-s6cr", req, res);
  },
};
