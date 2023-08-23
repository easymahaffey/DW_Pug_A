const Member = require("../../../db/models/ta_PugModels/Member")
const User = require("../../../db/models/ta_PugModels/User")
const bcrypt = require("bcryptjs")
const passportMember = require("passport");

const landedOnSite = (pageToRender, req, res) => {
  res.json({ message: "You are connected with the site." })
};
const displayRegister = (pageToRender, req, res) => {
  res.json({ message: "You are at the registeration page." })
};
const registerMember = (pageToRender, req, res) => {
  let {
    current_project,
    first_name,
    last_name,
    email,
    password1,
    password2,
    address1,
    address2,
    city,
    state,
    zipCode,
    privacy,
    membership_status,
    membership_role,
  } = req.body;
  if (password1 === password2) {
    Member.findOne({ email }, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        let passwordMessage =
          "This member's email is already registered in our database. Please log in or re-register.";
        let loggedIn = false;
        res.json({ message: passwordMessage });
        // res.render("register_member", { message: passwordMessage, loggedIn }); // For production
      } else {
        let password = password1;
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
        let loggedIn = true;
        let member = new Member({
          current_project,
          first_name,
          last_name,
          email,
          password,
          loggedIn,
          address1,
          address2,
          city,
          state,
          zipCode,
          privacy,
          membership_status,
          membership_role,
        });
        member.save((err, data) => {
          if (err) {
            console.log("REGISTER ERROR", err);
          }
          res.redirect(pageToRender);
        });
      }
    });
  } else {
    let passwordMessage = "The passwords do not match each other";
    let loggedIn = false;
    res.render("register", { passwordMessage, loggedIn });
  }
};
const displayLogin = (pageToRender, req, res) => {
  res.json({ message: "You are at the login page." })
};
const loginMember = (pageToRender, req, res) => {
  passportMember.authenticate("local", function (err, member, info) {
    if (err) {
      return (err);
    }
    if (info !== undefined) {
      res.json(info)
    } else
      if (!member) {
        let message =
          "This member's email is not registered in our database. Please register.";
        let loggedIn = false;
        return res.render("register_member", { message, loggedIn });
      }
    req.logIn(member, function (err) {
      if (err) {
        return (err);
      }
      return res.json({ message: "Welcome, Test, to the website!" });
    });
  })(req, res);
};
const finalLandingMember = (pageToRender, req, res) => {
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
      data.loggedIn = true;
      data.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
      let member_student_status = data.member_student_status;
      let member_student_id = data.member_student_id;
      if (member_student_status === "Active") {
        Student.findById({ _id: member_student_id }, (err, data) => {
          if (err) {
            console.log(err);
          }
          if (data) {
            data.student_loggedIn = true;
            data.save((err, data) => {
              if (err) {
                console.log(err);
              }
            });
          }
        });
      }
      let { first_name, loggedIn, membership_role, _id } = data;
      let id = _id;
      res.render(pageToRender, {
        first_name,
        loggedIn,
        membership_role,
        member_student_status,
        id,
      });
    });
  }
};
const logoutMember = (pageToRender, req, res) => {
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
      data.loggedIn = false;
      data.save((err, data) => {
        if (err) {
          console.log(err);
        }
        if (!data) {
          return
        }
      });
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      req.logout();
      res.redirect(pageToRender);
    });
  }
};

module.exports = {
  landedOnSite: (req, res) => {
    landedOnSite("/", req, res)
  },
  displayRegister: (req, res) => {
    displayRegister("/register_member", req, res)
  },
  registerMember: (req, res) => {
    registerMember("/register_member", req, res);
  },
  displayLogin: (req, res) => {
    displayLogin("/login_member", req, res);
  },
  loginMember: (req, res, next) => {
    loginMember("/finalLandingMember/", req, res, next);
  },
  finalLandingMember: (req, res) => {
    finalLandingMember("final-landing", req, res);
  },
  logoutMember: (req, res) => {
    logoutMember("/", req, res);
  },
}