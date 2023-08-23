const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");
const Student = require("../../../db/models/ta_PugModels/Student");
const ModuleText = require("../../../db/models/ta_PugModels/Questions");

const renderUserPeerTraining = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
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
          let { name, userLevel, loggedIn, _id } = data;
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
          student_role,
          member_student_status,
          loggedIn,
          id,
        });
      }
    });
  }
};
const renderAdminSecurePage = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    User.findById({ _id: id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let { _id, name, loggedIn, userLevel } = data;
      let id = _id;
      res.render("triage-main-module-questions", {
        id,
        name,
        loggedIn,
        userLevel,
      });
    });
  }
};

const renderMemberSecurePage = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let loggedIn = memberData.loggedIn;
      let current_project = memberData.current_project;
      let membership_role = memberData.membership_role;
      let admin_role = memberData.admin_role;
      let member_student_status = memberData.member_student_status;
      let student_role = memberData.member_student_role;
      Student.findOne({ member_id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        if (!data) {
          let message =
            "You have not registered as a student. Please register for TriAge Challenge.";
          loggedIn = true;
          let id = member_id;
          res.render("register_student",
           {
             id,
             admin_role,
             student_role,
             membership_role,
             loggedIn,
          });
          // res.redirect("/registerStudent/" + id);
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
            // student_role,
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
            membership_role,
            admin_role,
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

const renderPeerTrainingModule = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
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
            password,
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
            membership_role,
            admin_role,
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
            password,
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
          });
        }
      });
    });
  }
};
const peerTrainingModule = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let loggedIn = memberData.loggedIn;
      let current_project = memberData.current_project;
      let membership_role = memberData.membership_role;
      let admin_role = memberData.admin_role;
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
            let student_id = data._id;
            res.render(pageToRender, {
              current_project,
              membership_role,
              admin_role,
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

const challengePTAnswers = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      loggedIn = true;
      let studentId = memberData.member_student_id
      Student.findById({ _id: studentId }, (err, studentData) => {
        if (err) {
          console.log(err);
        }
        if (!studentData) {
          let message =
            "You have not registered as a student. Please register for TriAge Challenge.";
          loggedIn = true;
          let id = member_id;
          res.redirect("/registerStudent/" + id);
        } else {
          Student.find({ answers: studentData.answers }, (err, data) => {
            if (err) {
              console.log(err);
            }
            let filteredAnswers = {}
            let studentAnswers = studentData.answers
            Object.entries(studentAnswers)
              .filter(([, value]) => value.questionNumber == "1A" || value.questionNumber == "1B" || value.questionNumber == "2A" || value.questionNumber == "2B" || value.questionNumber == "3A" || value.questionNumber == "3B" || value.questionNumber == "4A" || value.questionNumber == "4B" || value.questionNumber == "5A" || value.questionNumber == "5B" || value.questionNumber == "6A" || value.questionNumber == "6B" || value.questionNumber == "7A" || value.questionNumber == "7B" || value.questionNumber == "8A" || value.questionNumber == "8B" || value.questionNumber == "9A" || value.questionNumber == "9B" || value.questionNumber == "10A" || value.questionNumber == "10B")
              .forEach(([key, value]) => (filteredAnswers[key] = value));
            Object.values(filteredAnswers).sort((a, b) => {
              const questionA = a.questionNumber.toUpperCase()
              const questionB = b.questionNumber.toUpperCase()
              if (questionA < questionB) {
                return -1;
              }
              if (questionA > questionB) {
                return 1;
              }
              return 0
            })
            id = memberData._id;
            first_name = memberData.first_name;
            last_name = memberData.last_name;
            loggedIn = memberData.loggedIn;
            membership_role = memberData.membership_role;
            admin_role = memberData.admin_role;
            student_role = memberData.member_student_role;
            member_student_status = memberData.member_student_status;
            let member_student_id = memberData.member_student_id;
            student_status = data.student_status;
            let message = "TESTING DATA OUTPUT";
            let renderAnswers = Object.values(filteredAnswers)
            res.render(pageToRender, {
              id,
              first_name,
              last_name,
              member_student_id,
              student_role,
              student_status,
              loggedIn,
              membership_role,
              admin_role,
              answers: renderAnswers,
              message,
            });
          });
        }
      });
    });
  }
};

const updateChallengePTAnswers = (pageToRender, req, res) => {
  let memberId = req.user._id.toString();
  let studentId = req.user.member_student_id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let reqBody = req.body;
    let {
      id,
      questionGroupModule,
      questionModule,
      questionTitle,
      questionNumber,
      questionText,
      answerTime,
      answerText,
      answerCheckbox,
    } = reqBody;
    Student.findById({ _id: studentId }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let newAnswer = {
        id,
        answerDate: new Date,
        questionGroupModule,
        questionModule,
        questionTitle,
        questionNumber,
        questionText,
        answerTime,
        answerText,
        answerCheckbox,
      };

      for (let i = 0; i < data.answers.length; i++) {
        let dataAnswerId = data.answers[i]._id.toString()
        if (newAnswer.id === dataAnswerId && newAnswer.id !== undefined) {
          const newData = data.answers[i];
          Object.entries(newAnswer)
            .filter(([, value]) => value !== undefined)
            .forEach(([key, value]) => (newData[key] = value));
          Student.findByIdAndUpdate(
            { _id: studentId },
            { $set: { answers: data.answers } },
            { new: true },
            (err) => {
              if (err) {
                console.log(err)
              }
              let message = "You have successfully updated your answers.";
              res.redirect(pageToRender + memberId);
            })
        }
      }
    })
  }
};

const deleteChallengePTAnswers = (pageToRender, req, res) => {
  let id = req.params.id
  let answer_id = req.body.answerId;
  Member.findById(id, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    let student_id = memberData.member_student_id;
    Student.findById({ _id: student_id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let newAnswers = data.answers.filter(
        (answer) => answer.id !== answer_id
      );
      Student.findByIdAndUpdate(
        { _id: student_id },
        { $set: { answers: newAnswers } },
        { new: true },
        (err, data) => {
          if (err) {
            console.log(err);
          }
          Student
            .find({ answers: data.answers })
            .exec((err, data) => {
              if (err) {
                console.log(err);
                done(null, data);
              }
              member_id = data.member_id;
              current_project = memberData.current_project;
              first_name = memberData.first_name;
              last_name = memberData.last_name;
              loggedIn = memberData.loggedIn;
              admin_role = memberData.admin_role;
              membership_role = memberData.membership_role;
              date_member_joined = memberData.date_member_joined
              student_role = memberData.member_student_role;
              member_student_status = memberData.member_student_status;
              let member_student_id = memberData.member_student_id;
              student_status = data[0].student_status;
              let message = "TESTING DATA OUTPUT";
              let newGmNumbers = [];
              let newGmAnswers = [];
              let oldCptAnswers = [];
              for (let i = 0; i < data[0].answers.length; i++) {
                if (data[0].answers[i].questionGroupModule === "Challenge PT") {
                  let gmNumbers = data[0].answers[i].questionNumber;
                  newGmNumbers.push(gmNumbers)
                  let gmAnswer = data[0].answers[i].answerText;
                  let cptAnswer = data[0].answers[i];
                  newGmNumbers.push(gmAnswer)
                  newGmAnswers.push(gmAnswer)
                  oldCptAnswers.push(cptAnswer)
                }
              };
              res.render(pageToRender, {
                id,
                current_project,
                first_name,
                last_name,
                member_student_id,
                student_role,
                student_status,
                loggedIn,
                admin_role,
                membership_role,
                oldCptAnswers: oldCptAnswers,
                message,
                member_id,
                student_id,
                date_member_joined,
              });
            });
        }
      );
    });
  });
};

const mainModuleQuestions = (pageToRender, req, res) => {
  let id = req.params.id;
  let {
    textImage,
    textTitle,
    textNumber,
    textSubTitle,
    textContent,
    questionGroupModule,
    questionTitle,
    questionSubTitle,
    questionTimer,
    questionNumber,
    questionText,
    questionCheckboxTitle,
    questionCheckbox,
  } = req.body;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    User.findById({ _id: id }, (err, userData) => {
      if (err) {
        console.log(err);
      }
      let { _id, name, loggedIn, userLevel } = userData;
      let id = _id;
      let moduleText = new ModuleText({
        textImage,
        textTitle,
        textNumber,
        textSubTitle,
        textContent,
        questionGroupModule,
        questionTitle,
        questionSubTitle,
        questionTimer,
        questionNumber,
        questionText,
        questionCheckboxTitle,
        questionCheckbox,
      });
      moduleText.save((err, textData) => {
        if (err) {
          console.log("MODULE TEXT SAVE ERROR", err);
        }
      });
      // let question = new Questions({
      //   questionGroupModule,
      //   questionTitle,
      //   questionTimer,
      //   questionNumber,
      //   questionText,
      //   questionCheckboxTitle,
      //   questionCheckbox,
      // });
      // question.save((err, questionData) => {
      //   if (err) {
      //     console.log("QUESTION SAVE ERROR", err);
      //   };
      //   console.log(
      //     "HELPER TEST INFO ",
      //     id,
      //     name,
      //     loggedIn,
      //     userLevel,
      //     textImage,
      //     textTitle,
      //     textNumber,
      //     textSubTitle,
      //     textContent,
      //     questionGroupModule,
      //     questionTitle,
      //     questionTimer,
      //     questionNumber,
      //     questionText,
      //     questionCheckboxTitle,
      //     questionCheckbox
      //     );
      res.render(pageToRender, {
        id,
        name,
        loggedIn,
        userLevel,
        textImage,
        textTitle,
        textNumber,
        textSubTitle,
        textContent,
        questionGroupModule,
        questionTitle,
        questionSubTitle,
        questionTimer,
        questionNumber,
        questionText,
        questionCheckboxTitle,
        questionCheckbox,
      });
    });
    // res.render(pageToRender, {
    //   id,
    //   name,
    //   loggedIn,
    //   userLevel,
    //   textImage,
    //   textTitle,
    //   textNumber,
    //   textSubTitle,
    //   textContent,
    //   questionGroupModule,
    //   questionTitle,
    //   questionTimer,
    //   questionNumber,
    //   questionText,
    //   questionCheckboxTitle,
    //   questionCheckbox,
    // });
    // });
  }
};

const renderMainModuleQuestionsDB = (pageToRender, req, res) => {
  let user_id = req.params.id;
  if (user_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
    res.redirect("/");
  } else {
    User.findById({ _id: user_id }, (err, userData) => {
      if (err) {
        console.log(err);
      }
      let { name, loggedIn, userLevel, info } = userData;
      let member_id = info;
      ModuleText
        .find()
        .exec((err, data) => {
          if (err) {
            console.log(err);
            done(null, data);
          }
          let {
            textImage,
            textTitle,
            textNumber,
            textSubTitle,
            textContent,
            questionGroupModule,
            questionModule,
            questionTitle,
            questionTimer,
            questionNumber,
            questionText,
            questionCheckboxTitle,
            questionCheckbox,
          } = data;
          let text_id = data._id;
          let message = "TESTING DATA OUTPUT";

          let pageText = [];
          for (let i = 0; i < data.length; i++) { // i = page
            let newPage = data[i]
            let newGmNumbers = [];
            let newGmQuestions = [];
            pageText.push(newPage)
          };
          let id = user_id;
          res.render(pageToRender, {
            id,
            member_id,
            text_id,
            name,
            loggedIn,
            userLevel,
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
        });
    });
  };
};
const mainModuleQuestionsDB = (pageToRender, req, res) => {
  let id = req.params.id;
  let {
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
  } = req.body;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    User.findById({ _id: id }, (err, userData) => {
      if (err) {
        console.log(err);
      }
      let { _id, name, loggedIn, userLevel } = userData;
      let id = _id;
      let moduleText = new ModuleText({
        textImage,
        textTitle,
        textNumber,
        textSubTitle,
        textContent,
        // questionGroupModule,
        // questionTitle,
        // questionTimer,
        // questionNumber,
        // questionText,
        // questionCheckboxTitle,
        // questionCheckbox,
      });
      moduleText.save((err, textData) => {
        if (err) {
          console.log("MODULE TEXT SAVE ERROR", err);
        }
      });
      let question = new Questions({
        questionGroupModule,
        questionTitle,
        questionTimer,
        questionNumber,
        questionText,
        questionCheckboxTitle,
        questionCheckbox,
      });
      question.save((err, questionData) => {
        if (err) {
          console.log("QUESTION SAVE ERROR", err);
        };
        console.log(
          "HELPER TEST INFO ",
          id,
          name,
          loggedIn,
          userLevel,
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
        );
        res.render(pageToRender, {
          id,
          name,
          loggedIn,
          userLevel,
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
        });
      });
      // res.render(pageToRender, {
      //   id,
      //   name,
      //   loggedIn,
      //   userLevel,
      //   textImage,
      //   textTitle,
      //   textNumber,
      //   textSubTitle,
      //   textContent,
      //   questionGroupModule,
      //   questionTitle,
      //   questionTimer,
      //   questionNumber,
      //   questionText,
      //   questionCheckboxTitle,
      //   questionCheckbox,
      // });
    });
  }
};
const mainModuleDeleteQuestion = (pageToRender, req, res) => {
  let id = req.params.id;
  let text_id = req.body.text_id;
  ModuleText.findByIdAndRemove({ _id: text_id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This question does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(id);
  });
}

const renderSecureModuleViewer = (pageToRender, req, res, next) => {
  let page_id = req.params.pg;
  console.log("REQ PARAMS ", req.params)
  console.log("PAGE ID ", page_id)
  let user_id = req.params.id;
  if (user_id === "undefined") {
    let loggedIn = false;
    let userLevel = "";
    let membership_role = "";
    res.redirect("/");
  } else {
    User.findById({ _id: user_id }, (err, userData) => {
      if (err) {
        console.log(err);
      }
      // console.log("USER DATA ", userData)
      let {
        name,
        email,
        loggedIn,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
        info,
      } = userData
      let id = userData._id
      // function compareTextNumbers(a, b) {
      //   return a - b;
      // }
      // textData.textNumber.sort(compareTextNumbers);

      // console.log("MODULE TEXT ", ModuleText.find( ({ textNumber }) => `textNumber` ))

      // console.log("MODULE TEXT III", ModuleText.populate( 'textNumber'))
      // console.log("MODULE TEXT V", ModuleText.find( { textNumber: "S1a" }
      // ))

      // console.log("MODULE TEXT II", ModuleText.find( ({ textNumber }) => textNumber === 'S1a' ).exec((err,data) => {
      //   if(err) { console.log(err)}
      //   data
      // }))

      // console.log("MODULE TEXT II", ModuleText.find({ path: 'textNumber', select: 'textNumber' }))

      //////// START TEST ////////
      ModuleText
        .find()
        .exec((err, testData) => {
          if (err) {
            console.log(err);
            done(null, testData);
          };
          let {
            textNumber
          } = testData;
          // return
          for (let i = 0; i < testData.length; i++) {

            testData.sort((a, b) => {
              return a.textNumber - b.textNumber
            })
            // testData[i].textNumber.sort((a,b) => {
            //   return a.textNumber - b.textNumber
            // })

            // console.log("MODULE TEXT II", testData)

            // console.log("NEW PAGE ARRAY TEST II", ModuleText.find({ _id: testData._id }, { $pull: 'textNumber' }).populate('textNumber'));



          }

          console.log("NEW PAGE ARRAY TEST II", ModuleText.find({}).where(('textNumber')).equals('S1').populate('textNumber'));

          // console.log("NEW PAGE ARRAY TEST II", ModuleText.find().where('textNumber').populate({path:'textNumber', options:{sort:{'textNumber':1}}}));

          // Athlete.
          //   find().
          //   where('sport').equals('Tennis').
          //   where('age').gt(17).lt(50).  //Additional where query
          //   limit(5).
          //   sort({ age: -1 }).
          //   select('name age').
          //   exec(callback);

        })

      /////////// END TEST ///////
      // populate()
      // console.log("NEW PAGE ARRAY TEST II", ModuleText.find({ _id: _id }, { $pull: 'textNumber' }).populate('textNumber'));
      // console.log("NEW PAGE ARRAY TEST III", ModuleText.find({}).populate({path:'*', options:{sort:{'textNumber':1}}}))

      // console.log("MODULE TEXT IV", ModuleText.find().populate('textNumber'))
      // console.log("MODULE TEXT VI", ModuleText.find({}).populate({select: 'textNumber'}))
      // console.log("MODULE TEXT VII", ModuleText.find().populate({ path: 'textNumber'}))
      // console.log("MODULE TEXT VII", ModuleText.find({}).populate({ path: 'textNumber', select: 'textNumber' }))

      ModuleText
        .find()
        // .find( textNumber => textNumber )
        // .find({textNumber})
        // .sort()

        // .populate({ path: 'modultexts', select: 'textNumber' })
        .exec((err, textData) => {
          if (err) {
            console.log(err);
            done(null, textData);
          }
          // if (textData){
          //   return textData
          // }

          // console.log("PeerTraining Helper TEXT ", textData)



          let newPageArray = [];
          let newPageNumberArray = [];

          let mapped = textData.map(({ textNumber }) => ({ textNumber }))
          // let mapped = textData.map((textNumber) => {
          //   return textNumber;
          // })

          function compareTextNumbers(a, b) {
            return a.textNumber - b.textNumber;
          }
          mapped.sort(compareTextNumbers);
          // mapped.sort(compareTextNumbers);

          let tryThisResult = mapped.map(({ textNumber }) => ({ textNumber }));

          // console.log("MAPPED TEXT DATA ARRAY II ", tryThisResult)

          for (let i = 0; i < textData.length; i++) {

            // function compareTextNumbers(number, number2) {
            //   let number = textData[i].textNumber; 
            //   let number2 = textData[i+1].textNumber; 
            //   return number - number2;
            // }

            // let nextPage = textData[i]

            // let nextPage = textData[i];
            // function findTextNumber(nextPage){
            //   return nextPage.textNumber
            // }
            // console.log("MODULE TEXT XX", ModuleText.find(findTextNumber)
            // )

            newPageArray.push(textData[i]);
            // newPageArray.sort();

            // let number = textData[i].textNumber;
            // textData.sort(-number);

            // let mapped = textData.map(({ textNumber}) => ({ textNumber }))

            // let mapped = textData.map((textNumber) => {
            //   return textNumber;
            // })

            // function compareTextNumbers(a, b) {
            //   return a.textNumber - b.textNumber;
            // }
            // mapped.sort(compareTextNumbers);

            // mapped.sort(compareTextNumbers);

            // let tryThisResult = mapped.map(({ textNumber}) => ({ textNumber }));

            // let tryThisResult = mapped.map(({ textNumber, value}) => ({ [textNumber]: value }));
            // tryThisResult.sort(compareTextNumbers)
            // mapped.sort((firstItem, secondItem) => {
            //   return firstItem.textNumber - secondItem.textNumber;
            // });
            // mapped.sort((a, b) => {
            //   if (a.textNumber > b.textNumber) {
            //     return 1;
            //   }
            //   if (a.textNumber < b.textNumber) {
            //     return -1;
            //   }
            //   return 0;
            // });

            // textData.sort(-[4])
            newPageArray.sort((a, b) => {
              // return a._id - b._id;
              return a.textNumber - b.textNumber;
            });

            // textData.sort((a, b) => {
            //   return b.textNumber - a.textNumber;
            // });

            // let a = textData[i];
            // let b = textData[i+1]
            newPageNumberArray.push(textData[i].textNumber)
            newPageNumberArray.sort();
            // newPageArray.sort((textNumber) => textNumber);
            // newPageArray = textData[i].textNumber.sort(compareTextNumbers);

            // console.log("MAPPED TEXT DATA ARRAY II ", tryThisResult)
            // console.log("MAPPED TEXT DATA ARRAY ", mapped)
            // console.log("TEXT DATA ARRAY ", textData)
            // console.log("NEW PAGE ARRAY ", newPageArray)

            //   console.log("NEW PAGE ARRAY TEST ", ModuleText.find().populate({path:'moduletexts', options:{sort:{'textNumber':1}}}).exec((err, data) => {
            //     if (err) {
            //         console.log(err)
            //     } else {
            //         return data
            //     }
            // }))

            console.log("NEW PAGE NUMBER ARRAY ", newPageNumberArray)

            // console.log("TextDATA ARRAY ", textData)
            let newPage = textData[page_id]
            let {
              textImage,
              textTitle,
              textNumber,
              textSubTitle,
              textContent,
              questionGroupModule,
              questionTitle,
              questionSubTitle,
              questionTimer,
              questionNumber,
              questionText,
              questionCheckboxTitle,
              questionCheckbox,
            } = newPage
            let text_id = newPage._id;
            res.render(pageToRender, {
              loggedIn,
              id,
              info,
              name,
              userLevel,
              email,
              city,
              state,
              zipcode,
              text_id,
              textImage,
              textTitle,
              textNumber,
              textSubTitle,
              textContent,
              questionGroupModule,
              questionTitle,
              questionSubTitle,
              questionTimer,
              questionNumber,
              questionText,
              questionCheckboxTitle,
              questionCheckbox
            });
          };
        });
    });
  } (req, res, next);
};

module.exports = {

  /////////////////////////////////////
  /////// TriAge Peer Training  ///////
  /////////////////////////////////////

  securePeerTraining: (req, res) => {
    renderUserPeerTraining("triage-peer-training", req, res);
  },
  secureMyPeerTraining: (req, res) => {
    renderUserPeerTraining("triage-my-peer-training", req, res);
  },
  secureMemberPeerTraining: (req, res) => {
    renderMemberSecurePage("member-peer-training", req, res);
  },

  secureMemberPeerTrainingModules: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules", req, res);
  },
  renderSecureMainPeerTrainingModulesS7a: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7a", req, res);
  },
  renderSecureMainPeerTrainingModulesS7aq1: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7aq1", req, res);
  },
  secureMainPeerTrainingModulesS7aq1: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s7aq1", req, res);
  },
  renderSecureMainPeerTrainingModulesS7aq2: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7aq2", req, res);
  },
  secureMainPeerTrainingModulesS7aq2: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s7aq2", req, res);
  },
  renderSecureMainPeerTrainingModulesS7aq3: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7aq3", req, res);
  },
  secureMainPeerTrainingModulesS7aq3: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s7aq3", req, res);
  },
  renderSecureMainPeerTrainingModulesS7aq4: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7aq4", req, res);
  },
  secureMainPeerTrainingModulesS7aq4: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s7aq4", req, res);
  },
  renderSecureMainPeerTrainingModulesS7b: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7b", req, res);
  },
  renderSecureMainPeerTrainingModulesS7c: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7c", req, res);
  },
  renderSecureMainPeerTrainingModulesS7d: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7d", req, res);
  },
  renderSecureMainPeerTrainingModulesS7dq1: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7dq1", req, res);
  },
  secureMainPeerTrainingModulesS7dq1: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s7dq1", req, res);
  },
  renderSecureMainPeerTrainingModulesS7dq2: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7dq2", req, res);
  },
  secureMainPeerTrainingModulesS7dq2: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s7dq2", req, res);
  },
  renderSecureMainPeerTrainingModulesS7dq3: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s7dq3", req, res);
  },
  secureMainPeerTrainingModulesS7dq3: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s7dq3", req, res);
  },
  renderSecureMainPeerTrainingModulesS8aGH: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8aGH", req, res);
  },
  secureMainPeerTrainingModulesS8aGH: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8aGH", req, res);
  },
  renderSecureMainPeerTrainingModulesS8aHRL: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8aHRL", req, res);
  },
  secureMainPeerTrainingModulesS8aHRL: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8aHRL", req, res);
  },
  renderSecureMainPeerTrainingModulesS8aq1: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8aq1", req, res);
  },
  secureMainPeerTrainingModulesS8aq1: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8aq1", req, res);
  },
  renderSecureMainPeerTrainingModulesS8aq2: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8aq2", req, res);
  },
  secureMainPeerTrainingModulesS8aq2: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8aq2", req, res);
  },

  renderSecureMainPeerTrainingModulesS8b: (req, res) => {
    challengePTAnswers("triage-main-peer-training-modules-s8b", req, res);
  },
  secureMainPeerTrainingModulesS8b: (req, res) => {
    updateChallengePTAnswers("/triage-main-peer-training-modules-s8b/", req, res);
  },
  secureMainPeerTrainingModulesS8bDelete: (req, res) => {
    deleteChallengePTAnswers("/triage-main-peer-training-modules-s8b/", req, res);
  },

  renderSecureMainPeerTrainingModulesS8cq1: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8cq1", req, res);
  },
  secureMainPeerTrainingModulesS8cq1: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8cq1", req, res);
  },
  renderSecureMainPeerTrainingModulesS8cq2: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8cq2", req, res);
  },
  secureMainPeerTrainingModulesS8cq2: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8cq2", req, res);
  },
  renderSecureMainPeerTrainingModulesS8cq3: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8cq3", req, res);
  },
  secureMainPeerTrainingModulesS8cq3: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8cq3", req, res);
  },
  renderSecureMainPeerTrainingModulesS8cq4: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8cq4", req, res);
  },
  secureMainPeerTrainingModulesS8cq4: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8cq4", req, res);
  },
  renderSecureMainPeerTrainingModulesS8cq5: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8cq5", req, res);
  },
  secureMainPeerTrainingModulesS8cq5: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8cq5", req, res);
  },
  renderSecureMainPeerTrainingModulesS8cq6: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8cq6", req, res);
  },
  secureMainPeerTrainingModulesS8cq6: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8cq6", req, res);
  },
  renderSecureMainPeerTrainingModulesS8cq7: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8cq7", req, res);
  },
  secureMainPeerTrainingModulesS8cq7: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8cq7", req, res);
  },
  renderSecureMainPeerTrainingModulesS8d: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8d", req, res);
  },
  renderSecureMainPeerTrainingModulesS8dq1: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8dq1", req, res);
  },
  secureMainPeerTrainingModulesS8dq1: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8dq1", req, res);
  },
  renderSecureMainPeerTrainingModulesS8dq2: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8dq2", req, res);
  },
  secureMainPeerTrainingModulesS8dq2: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8dq2", req, res);
  },
  renderSecureMainPeerTrainingModulesS8dq3: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s8dq3", req, res);
  },
  secureMainPeerTrainingModulesS8dq3: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s8dq3", req, res);
  },
  renderSecureMainPeerTrainingModulesS9a: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s9a", req, res);
  },
  renderSecureMainPeerTrainingModulesS9aq1: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s9aq1", req, res);
  },
  secureMainPeerTrainingModulesS9aq1: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s9aq1", req, res);
  },
  renderSecureMainPeerTrainingModulesS9b: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s9b", req, res);
  },
  secureMainPeerTrainingModulesS9b: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s9b", req, res);
  },
  renderSecureMainPeerTrainingModulesS9b1: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s9b1", req, res);
  },
  renderSecureMainPeerTrainingModulesS9c: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s9c", req, res);
  },
  renderSecureMainPeerTrainingModulesS9d: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s9d", req, res);
  },
  secureMainPeerTrainingModulesS9d: (req, res) => {
    peerTrainingModule("triage-main-peer-training-modules-s9d", req, res);
  },
  renderSecureMainPeerTrainingModulesS10a: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s10a", req, res);
  },
  renderSecureMainPeerTrainingModulesS10b: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s10b", req, res);
  },
  renderSecureMainPeerTrainingModulesS10c: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s10c", req, res);
  },
  renderSecureMainPeerTrainingModulesS10d: (req, res) => {
    renderPeerTrainingModule("triage-main-peer-training-modules-s10d", req, res);
  },


  /////////////////////////////////////
  //// TriAge Create Questions DB /////
  //////// Admin Access Only  /////////
  /////////////////////////////////////

  renderSecureMainModuleQuestions: (req, res) => {
    renderAdminSecurePage("triage-main-module-questions", req, res);
  },
  secureMainModuleQuestions: (req, res) => {
    mainModuleQuestions("triage-main-module-questions", req, res);
  },
  renderSecureMainModuleQuestionsDB: (req, res) => {
    renderMainModuleQuestionsDB("triage-main-module-questionsDB", req, res);
  },
  // secureMainModuleQuestionsDB: (req, res) => {
  //   mainModuleDeleteQuestion(renderMainModuleQuestionsDB, req, res);
  // },
  secureMainModuleQuestionsDB: (req, res) => {
    mainModuleDeleteQuestion("triage-main-module-questionsDB", req, res);
  },
  // secureMainModuleQuestionsDB: (req, res) => {
  //   mainModuleQuestionsDB("triage-main-module-questionsDB", req, res);
  // },
  renderSecureModuleViewer: (req, res) => {
    renderSecureModuleViewer("triage-main-modules-viewer", req, res);
  },

  secureMainModuleQuestions_B: (req, res) => {
    let id = req.params.id;
    console.log("Student ID REQ PARAMS ", id);
    let { answerNumber, answerText } = req.body;
    console.log("MODULE QUESTION REQ BODY ", req.body);
    if (id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    } else {
      Student.findById({ _id: id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        let {
          _id,
          first_name,
          student_loggedIn,
          student_status,
          student_role,
          answers,
        } = data;
        let id = _id;
        let answer = new Answer({
          answerNumber,
          answerText,
        });
        console.log("Question ", question);
        // question.bulkWrite()
        answer.save((err, data) => {
          if (err) {
            console.log("QUESTION SAVE ERROR", err);
          }
          res.render("triage-main-challenge-modules-s2cq4r", {
            id,
            first_name,
            student_loggedIn,
            student_status,
            student_role,
            answers,
          });
        });
      });
    }
  },

};
