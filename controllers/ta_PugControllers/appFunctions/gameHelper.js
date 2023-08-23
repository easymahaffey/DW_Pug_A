const Member = require("../../../db/models/ta_PugModels/Member");
const Student = require("../../../db/models/ta_PugModels/Student");

const renderGameModule = (pageToRender, req, res) => {
  let member_id = req.params.id;
  if (member_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let loggedIn = data.loggedIn;
      let member_student_status = data.member_student_status;
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


module.exports = {
  
  /////////////////////////////////////
  /////////   TriAge Games    /////////
  /////////////////////////////////////

  secureGames: (req, res) => {
    renderGameModule("member-games", req, res);
  },
  secureGameModules: (req, res) => {
    renderGameModule("triage-game-modules", req, res);
  },
  secureGamePongTitle: (req, res) => {
    renderGameModule("triage-game-pong-title", req, res);
  },
  secureGamePong: (req, res) => {
    renderGameModule("triage-game-pong", req, res);
  },
  secureGameBouncyBallTitle: (req, res) => {
    renderGameModule("triage-game-bouncy-ball-title", req, res);
  },
  secureGameBouncyBall: (req, res) => {
    renderGameModule("triage-game-bouncy-ball", req, res);
  },
  secureCardGameTitle: (req, res) => {
    renderGameModule("triage-game-card-game-title", req, res);
  },
  secureCardGame: (req, res) => {
    renderGameModule("triage-game-card-game", req, res);
  },

}