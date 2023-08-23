const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");

const renderMemberSecurePage = (pageToRender, req, res)=> {
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
        let {
          first_name,
          current_project,
          admin_role,
          membership_role,
          membership_status,
          member_student_status,
          loggedIn,
          _id,
        } = data;
        let student_role = data.member_student_role
        let id = _id;
        res.render(pageToRender, {
          first_name,
          current_project,
          admin_role,
          membership_role,
          membership_status,
          student_role,
          member_student_status,
          loggedIn,
          id,
        });
      });
    }
}
const renderAdminSecurePage = (pageToRender, req, res)=> {
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
      let { name, userLevel, admin_id, loggedIn, _id } = data;
      let id = _id;
      res.render(pageToRender, {
        id,
        admin_id,
        name,
        userLevel,
        loggedIn,
      });
    });
  }
}

module.exports = {
  securePhases: (req, res) => {
    renderMemberSecurePage("landing_phases", req, res);
  },
  secureImage: (req, res) => {
    renderMemberSecurePage("landing_image", req, res);
  },
  securePhoenicia: (req, res) => {
    renderMemberSecurePage("dream-phoenicia", req, res);
  },
  secureTranscendence: (req, res) => {
    renderMemberSecurePage("dream-Transcendence", req, res);
  },
  secureWhatAreDreams: (req, res) => {
    renderMemberSecurePage("dream-what_are_dreams", req, res);
  },
  secureWorkgroupDeveloper: (req, res) => {
    renderMemberSecurePage("dream-workgroup_developer", req, res);
  },
  secureResources: (req, res) => {
    renderMemberSecurePage("dream-resources", req, res);
  },
  secureCompanyProfile: (req, res) => {
    renderMemberSecurePage("company-profile", req, res);
  },
  userSecureCompanyProfile: (req, res) => {
    renderAdminSecurePage("company-profile", req, res);
  },
  secureCompanyFaq: (req, res) => {
    renderMemberSecurePage("company-faq", req, res);
  },
  userSecureCompanyFaq: (req, res) => {
    renderAdminSecurePage("company-faq", req, res);
  },
  secureCompanyEvents: (req, res) => {
    renderMemberSecurePage("company-events", req, res);
  },
  userSecureCompanyEvents: (req, res) => {
    renderAdminSecurePage("company-events", req, res);
  },
  secureLocalNews: (req, res) => {
    renderMemberSecurePage("local-news", req, res);
  },
  userSecureLocalNews: (req, res) => {
    renderAdminSecurePage("local-news", req, res);
  },
  secureNationalNews: (req, res) => {
    renderMemberSecurePage("national-news", req, res);
  },
  userSecureNationalNews: (req, res) => {
    renderAdminSecurePage("national-news", req, res);
  },

  ///////// TriAge /////////

  secureHelpYou: (req, res) => {
    renderMemberSecurePage("triage-help-you", req, res);
  },
  secureHelpOthers: (req, res) => {
    renderMemberSecurePage("triage-help-others", req, res);
  },

};
