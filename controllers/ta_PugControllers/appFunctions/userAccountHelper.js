const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");
const Site = require("../../../db/models/ta_PugModels/SiteStats");
const Visitor = require("../../../db/models/ta_PugModels/Visitor");
const VisitorStats = require("../../../db/models/ta_PugModels/VisitorStats");
const Vendor = require("../../../db/models/ta_PugModels/Vendor");
const Dream = require("../../../db/models/ta_PugModels/Dream");
const Student = require("../../../db/models/ta_PugModels/Student");
const bcrypt = require("bcryptjs");

const timer = () => {
  const joinDate = new Date(date_member_joined);
  // const [joinMonth, joinDay, joinYear] = [joinDate.getMonth(), joinDate.getDate(), joinDate.getFullYear()];
  let currentTime = Date.now() - joinDate
  const currentDate = new Date(currentTime);
  // const [currentMonth, currentDay, currentYear] = [currentDate.getMonth(), currentDate.getDate(), currentDate.getFullYear()];
  const hour = joinDate.getHours();
  // let useTime = new Date(joinDate)
  let currentSeconds = currentTime / 1000
  let currentMinutes = currentSeconds / 60
  let currentHours = currentMinutes / 60
  let currentDays = currentHours / 24
  let currentMonths = currentDays / 30
  let currentYears = currentMonths / 12
  let monthsLeft = Math.floor(currentYears) * 12
  let calcMonths = Math.floor(currentMonths - monthsLeft)
  let monthDaysLeft = monthsLeft * 30
  let daysLeft = Math.floor(currentDays) - monthDaysLeft
  let calcDays = daysLeft % 30
  let Years = Math.floor(currentYears)
  let Months = calcMonths
  let Days = calcDays
  let Hours = hour
};
const adminProfile = (pageToRender, req, res) => {
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
      let {
        password,
        name,
        id,
        email,
        date,
        loggedIn,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
      } = data;
      res.render(pageToRender, {
        password,
        name,
        id,
        email,
        date,
        loggedIn,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
      });
    });
  }
};
const updateAdminProfile = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let reqBody = req.body;
    let loggedIn = req.params.loggedIn;
    let { name, email, city, state, zipcode, privacy, userLevel } = reqBody;
    const newData = {};
    Object.entries(reqBody)
      .filter(([, value]) => value !== "")
      .forEach(([key, value]) => (newData[key] = value));
    User.findByIdAndUpdate(
      { _id: id },
      { $set: newData },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
          if (err) {
            let message =
              "This email is already registered. Please select a new e-mail.";
            res.render("my-profileSettings", { message });
          }
        }
        let message = "You have successfully updated your profile.";
        res.redirect(pageToRender + id);
      }
    );
  }
}
const updateAdminPassword = (pageToRender, req, res) => {
  let { email, password1, password2 } = req.body;
  let reqBody = req.body;
  if (password1 === password2) {
    User.findOne({ email }, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        let password = password1;
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
        id = data.id;
        User.findByIdAndUpdate(
          { _id: id },
          { $set: { password: password } },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            res.redirect(pageToRender + id);
          }
        );
      }
    });
  } else {
    let passwordMessage = "The passwords do not match each other";
    res.render("updateMyProfile", { passwordMessage });
  }
}
const adminDatabase = (pageToRender, req, res) => {
  console.log("UAH adminDatabase() User", req.user)
  let id = req.params.id;
  let value = 0;
  let adminID = id;
  User.findById({ _id: adminID }, (err, data) => {
    if (err) {
      console.log(err);
    }
    User.find()
      .sort({ name: "asc" })
      // .limit(10)
      .exec((err, userData) => {
        if (err) {
          console.log(err);
          done(null, userData);
        }
        /// reset id to req.params.id for passport/routes
        loggedIn = data.loggedIn;
        userLevel = data.userLevel;
        id = data.id;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          loggedIn,
          userLevel,
          users: userData,
          message,
        });
      });
  });
}
const adminMemberDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  let value = 0;
  let adminID = req.user._id;
  User.findById({ _id: id }, (err, userData) => {
    if (err) {
      console.log(err);
    }
    Member.find({ __v: value })
      .sort({ name: "asc" })
      // .limit(10)
      .exec((err, memberData) => {
        if (err) {
          console.log(err);
          done(null, memberData);
        }
        loggedIn = userData.loggedIn;
        userLevel = userData.userLevel;
        user_id = userData._id;
        let name = userData.name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          adminID,
          user_id,
          name,
          loggedIn,
          userLevel,
          members: memberData,
          message,
        });
      });
  });
}
const adminVendorDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
  let value = 0;
  // let memberID = id;
  User.findById({ _id: id }, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    Vendor.find({ __v: value })
      .sort({ name: "asc" })
      // .limit(10)
      .exec((err, vendorData) => {
        if (err) {
          console.log(err);
          done(null, vendorData);
        }
        loggedIn = memberData.loggedIn;
        // admin_role = memberData.admin_role;
        // membership_role = memberData.membership_role;
        // membership_status = memberData.membership_status;
        id = memberData.id;
        let userLevel = memberData.userLevel;
        // memberID = memberData.info;
        let name = memberData.name;
        let message = "TESTING DATA OUTPUT";
        console.log("UAH adminVendorDatabase() Data ", memberData)
        res.render(pageToRender, {
          id,
          user_id,
          userLevel,
          // user_admin_role,
          // memberID,
          name,
          loggedIn,
          // admin_role,
          vendors: vendorData,
          message,
        });
      });
  });
}
const adminDeleteMember = (pageToRender, req, res) => {
  let id = req.params.id;
  let adminID = req.body.adminID;
  Member.findByIdAndRemove({ _id: id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This profile does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(pageToRender + adminID);
  });
}
const adminDeleteVendor = (pageToRender, req, res) => {
  let id = req.params.id;
  let adminID = req.body.adminID;
  Vendor.findByIdAndRemove({ _id: id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This profile does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(pageToRender + adminID);
  });
}

const memberProfileDB = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: user_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      if (memberData) {
        let {
          auth_register,
          first_name,
          last_name,
          date_member_joined,
          loggedIn,
          date_of_birth,
          membership_approved,
          membership_status,
          membership_role,
          member_student_status,
          member_student_role,
          member_student_id,
          dreamweaver_level,
          dreams_created,
          dreams_completed,
          admin_role,
        } = memberData;
        // let member_id = memberData.id
        let user_first_name = memberData.first_name
        let user_membership_role = memberData.membership_role
        let user_membership_status = memberData.membership_status
        let user_member_student_status = memberData.member_student_status
        let user_student_role = memberData.member_student_role
        Member.findById({ _id: id }, (err, data) => {
          if (err) {
            console.log(err);
          }
          let {
            auth_register,
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            email,
            phone,
            current_project,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_approved,
            membership_status,
            membership_role,
            member_student_status,
            member_student_id,
            dreamweaver_level,
            dreams_created,
            dreams_completed,
            admin_role,
          } = data;
          res.render(pageToRender, {
            auth_register,
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            email,
            phone,
            current_project,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_approved,
            membership_status,
            membership_role,
            member_student_status,
            member_student_id,
            dreamweaver_level,
            dreams_created,
            dreams_completed,
            admin_role,
            user_id,
            user_admin_role,
            user_first_name,
            user_membership_status,
            user_membership_role,
            user_member_student_status,
            user_student_role,
          });
        });
      }
    })
  }
}
const memberProfilePublic = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: user_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      if (memberData) {
        let {
          auth_register,
          first_name,
          last_name,
          date_member_joined,
          loggedIn,
          date_of_birth,
          membership_approved,
          membership_status,
          membership_role,
          member_student_status,
          member_student_role,
          member_student_id,
          dreamweaver_level,
          dreams_created,
          dreams_completed,
          admin_role,
        } = memberData;
        // let member_id = memberData.id
        let user_first_name = memberData.first_name
        let user_membership_role = memberData.membership_role
        let user_membership_status = memberData.membership_status
        let user_member_student_status = memberData.member_student_status
        let user_student_role = memberData.member_student_role
        Member.findById({ _id: id }, (err, data) => {
          if (err) {
            console.log(err);
          }
          let {
            auth_register,
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            email,
            phone,
            current_project,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_approved,
            membership_status,
            membership_role,
            member_student_status,
            member_student_id,
            dreamweaver_level,
            dreams_created,
            dreams_completed,
            admin_role,
            wallPost,
          } = data;
          res.render(pageToRender, {
            auth_register,
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            email,
            phone,
            current_project,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_approved,
            membership_status,
            membership_role,
            member_student_status,
            member_student_id,
            dreamweaver_level,
            dreams_created,
            dreams_completed,
            admin_role,
            wallPost,
            user_id,
            user_admin_role,
            user_first_name,
            user_membership_status,
            user_membership_role,
            user_member_student_status,
            user_student_role,
          });
        });
      }
    })
  }
}
const memberProfilePublicA = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
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
      let {
        first_name,
        last_name,
        id,
        password,
        date_member_joined,
        loggedIn,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_status,
        membership_role,
        member_student_status,
        member_student_id,
        dreamweaver_level,
        dreams_created,
        dreams_completed,
        admin_role,
      } = data;
      res.render(pageToRender, {
        first_name,
        last_name,
        id,
        user_id,
        password,
        date_member_joined,
        loggedIn,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_status,
        membership_role,
        member_student_status,
        member_student_id,
        dreamweaver_level,
        dreams_created,
        dreams_completed,
        admin_role,
        user_admin_role,
      });
    });
  }
}
const updateMemberProfilePublic = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: user_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let reqBody = req.body;
      let loggedIn = req.params.loggedIn;
      let {
        auth_register,
        first_name,
        last_name,
        date_member_joined,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_approved,
        membership_status,
        membership_role,
        admin_role,
      } = reqBody;
      const newData = {};
      Object.entries(reqBody)
        .filter(([, value]) => value !== "")
        .forEach(([key, value]) => (newData[key] = value));
      Member.findByIdAndUpdate(
        { _id: id },
        { $set: newData },
        { new: true },
        (err, data) => {
          if (err) {
            console.log(err);
            if (err) {
              let message =
                "This email is already registered. Please select a new e-mail.";
              res.render("member-profileSettings", { message });
            }
          }
          let message = "You have successfully updated your profile.";
          res.redirect(pageToRender + id);
        }
      );
    })
  }
}
const memberProfile = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
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
      let {
        auth_register,
        first_name,
        last_name,
        id,
        date_member_joined,
        loggedIn,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_approved,
        membership_status,
        membership_role,
        member_student_status,
        member_student_id,
        dreamweaver_level,
        dreams_created,
        dreams_completed,
        admin_role,
        wallPost,
      } = data;
      res.render(pageToRender, {
        auth_register,
        first_name,
        last_name,
        id,
        user_id,
        date_member_joined,
        loggedIn,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_approved,
        membership_status,
        membership_role,
        member_student_status,
        member_student_id,
        dreamweaver_level,
        dreams_created,
        dreams_completed,
        admin_role,
        user_admin_role,
        wallPost,
      });
    });
  }
}
const updateMemberProfile = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: user_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let reqBody = req.body;
      let loggedIn = req.params.loggedIn;
      let {
        auth_register,
        dreams_created,
        dreams_completed,
        first_name,
        last_name,
        date_member_joined,
        time_as_member,
        email,
        phone,
        current_project,
        address1,
        address2,
        city,
        state,
        zipCode,
        privacy,
        date_of_birth,
        membership_approved,
        membership_status,
        membership_role,
        admin_role,
        wallPost,
      } = reqBody;
      const newData = {};
      Object.entries(reqBody)
        .filter(([, value]) => value !== "")
        .forEach(([key, value]) => (newData[key] = value));
      Member.findByIdAndUpdate(
        { _id: id },
        { $set: newData },
        { new: true },
        (err, data) => {
          if (err) {
            console.log(err);
            if (err) {
              let message =
                "This email is already registered. Please select a new e-mail.";
              res.render("member-profileSettings", { message });
            }
          }
          let message = "You have successfully updated your profile.";
          res.redirect(pageToRender + id);
        }
      );
    })
  }
}
const updateMemberPassword = (pageToRender, req, res) => {
  let { email, password1, password2 } = req.body;
  if (password1 === password2) {
    Member.findOne({ email }, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        let password = password1;
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
        id = data.id;
        Member.findByIdAndUpdate(
          { _id: id },
          { $set: { password: password } },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            res.redirect(pageToRender + id);
          }
        );
      }
    });
  } else {
    let passwordMessage = "The passwords do not match each other";
    res.render("updateMemberProfile", { passwordMessage });
  }
}
const deleteMember = (pageToRender, req, res) => {
  let id = req.params.id;
  console.log("UAH DELETE MEMBER() REQ USER DATA ", req.user)
  let student_id = req.user.member_student_id
  if (student_id !== undefined) {
    Student.findByIdAndRemove({ _id: student_id }, { new: true }, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (!data) {
        let errorMessage = "This student profile does not exist.";
        res.json({ message: errorMessage });
      }
    })
  }
  Member.findByIdAndRemove({ _id: id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This profile does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(pageToRender);
  });
}
const memberDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let value = 0;
    let memberID = id;
    Member.findById({ _id: user_id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      Member.find()
        .sort({ name: "asc" })
        // .limit(10)
        .exec((err, memberData) => {
          if (err) {
            console.log(err);
            done(null, memberData);
          }
          /// reset id to req.params.id for passport/routes
          loggedIn = data.loggedIn;
          admin_role = data.admin_role;
          membership_role = data.membership_role;
          membership_status = data.membership_status;
          member_student_status = data.member_student_status;
          student_role = data.member_student_role;
          id = data.id;
          first_name = data.first_name;
          last_name = data.last_name;
          let message = "TESTING DATA OUTPUT";

          VisitorStats
            .find({}, async (err, visitorStatsData) => {
              if (err) {
                console.log(err);
              }
              if (visitorStatsData.length !== 0) {
                let {
                  last_visitor_info,
                  visitor_total_count,
                  visitor_unique_count,
                  visitor_total_state_count,
                  visitor_total_state_unique_count,
                  visitor_total_member_count,
                  max_total_visitors,
                  max_state_visitors,
                  exceeds_max_visitors,
                  exceeds_max_state_visitors,
                } = visitorStatsData[0]
              Site
                .find({}, async (err, siteData) => {
                  if (err) {
                    console.log(err);
                  }
                  if (siteData.length !== 0) {
                    let {
                      member_register_pending_count,
                      member_register_approved_count,
                      membership_approved_count,
                      member_total_count,
                      member_total_state_count,
                      member_total_private_count,
                      member_total_public_count,
                      member_total_active_count,
                      member_total_inactive_count,
                      member_dreamweaver_count,
                      member_server_count,
                      member_only_count,
                      member_project_manager_count,
                      member_site_manager_count,
                      member_admin_role_site_manager_count,
                      member_admin_role_local_administrator_count,
                      max_total_members,
                      max_state_members,
                      exceeds_max_members,
                      exceeds_max_state_members,
                    } = siteData[0]
                    res.render(pageToRender, {
                      id,
                      user_id,
                      memberID,
                      first_name,
                      last_name,
                      loggedIn,
                      membership_role,
                      admin_role,
                      membership_status,
                      member_student_status,
                      student_role,
                      members: memberData,
                      message,
                      // Site Stats
                      member_register_pending_count,
                      member_register_approved_count,
                      membership_approved_count,
                      member_total_count,
                      member_total_state_count,
                      member_total_private_count,
                      member_total_public_count,
                      member_total_active_count,
                      member_total_inactive_count,
                      member_dreamweaver_count,
                      member_server_count,
                      member_only_count,
                      member_project_manager_count,
                      member_site_manager_count,
                      member_admin_role_site_manager_count,
                      member_admin_role_local_administrator_count,
                      max_total_members,
                      max_state_members,
                      exceeds_max_members,
                      exceeds_max_state_members,
                      // Visitor Stats 
                      last_visitor_info,
                      visitor_total_count,
                      visitor_unique_count,
                      visitor_total_state_count,
                      visitor_total_state_unique_count,
                      visitor_total_member_count,
                      max_total_visitors,
                      max_state_visitors,
                      exceeds_max_visitors,
                      exceeds_max_state_visitors,
                    });
                  }
                })
              }
            })
        });
    });
  }
}
const memberDatabaseAZ = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let value = 0;
    let memberID = id;
    Member.findById({ _id: user_id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      Member
        .find({ State: "AZ" })
        .find({ privacy: "Show" })
        // .sort({ name: "asc" })
        // .limit(10)
        .exec((err, memberData) => {
          if (err) {
            console.log(err);
            done(null, memberData);
          }
          /// reset id to req.params.id for passport/routes
          loggedIn = data.loggedIn;
          admin_role = data.admin_role;
          membership_role = data.membership_role;
          membership_status = data.membership_status;
          member_student_status = data.member_student_status;
          student_role = data.member_student_role;
          id = data.id;
          first_name = data.first_name;
          last_name = data.last_name;
          let message = "TESTING DATA OUTPUT";

          VisitorStats
            .find({}, async (err, visitorStatsData) => {
              if (err) {
                console.log(err);
              }
              if (visitorStatsData.length !== 0) {
                let {
                  last_visitor_info,
                  visitor_total_count,
                  visitor_unique_count,
                  visitor_total_state_count,
                  visitor_total_state_unique_count,
                  visitor_total_member_count,
                  max_total_visitors,
                  max_state_visitors,
                  exceeds_max_visitors,
                  exceeds_max_state_visitors,
                } = visitorStatsData[0]
              Site
                .find({}, async (err, siteData) => {
                  if (err) {
                    console.log(err);
                  }
                  if (siteData.length !== 0) {
                    let {
                      member_register_pending_count,
                      member_register_approved_count,
                      membership_approved_count,
                      member_total_count,
                      member_total_state_count,
                      member_total_private_count,
                      member_total_public_count,
                      member_total_active_count,
                      member_total_inactive_count,
                      member_dreamweaver_count,
                      member_server_count,
                      member_only_count,
                      member_project_manager_count,
                      member_site_manager_count,
                      member_admin_role_site_manager_count,
                      member_admin_role_local_administrator_count,
                      max_total_members,
                      max_state_members,
                      exceeds_max_members,
                      exceeds_max_state_members,
                    } = siteData[0]
                    res.render(pageToRender, {
                      id,
                      user_id,
                      memberID,
                      first_name,
                      last_name,
                      loggedIn,
                      membership_role,
                      admin_role,
                      membership_status,
                      member_student_status,
                      student_role,
                      members: memberData,
                      message,
                      // Site Stats
                      member_register_pending_count,
                      member_register_approved_count,
                      membership_approved_count,
                      member_total_count,
                      member_total_state_count,
                      member_total_private_count,
                      member_total_public_count,
                      member_total_active_count,
                      member_total_inactive_count,
                      member_dreamweaver_count,
                      member_server_count,
                      member_only_count,
                      member_project_manager_count,
                      member_site_manager_count,
                      member_admin_role_site_manager_count,
                      member_admin_role_local_administrator_count,
                      max_total_members,
                      max_state_members,
                      exceeds_max_members,
                      exceeds_max_state_members,
                      // Visitor Stats 
                      last_visitor_info,
                      visitor_total_count,
                      visitor_unique_count,
                      visitor_total_state_count,
                      visitor_total_state_unique_count,
                      visitor_total_member_count,
                      max_total_visitors,
                      max_state_visitors,
                      exceeds_max_visitors,
                      exceeds_max_state_visitors,
                    });
                  }
                })
              }
            })
        });
    });
  }
}

const dreamProfile = (pageToRender, req, res) => {
  let member_id = req.user._id.toString()
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: member_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      if (memberData) {
        let {
          first_name,
          last_name,
          date_member_joined,
          loggedIn,
          date_of_birth,
          membership_status,
          membership_role,
          member_student_status,
          member_student_role,
          member_student_id,
          dreamweaver_level,
          dreams_created,
          dreams_completed,
          admin_role,
        } = memberData;
        let member_id = memberData.id
        let {
          current_project,
          dream_name,
          scrum_type,
          password,
          email,
          website,
          dw_first_name,
          dw_last_name,
          dw_member_id,
          address1,
          address2,
          city,
          State,
          zipCode,
          eligibility,
          team_vacancy,
          team_positions,
          team_members,
          synopsis,
          privacy,
          status,
          dw_membership_role,
          dw_membership_status,
          service_category,
          service_type,
          service,
          service_developer,
          stage,
          event_link,
          results,
        } = req.body;
        Dream.findById({ _id: id }, (err, dreamData) => {
          if (err) {
            console.log(err);
          }
          let {
            current_project,
            dream_name,
            start_date,
            scrum_type,
            password,
            email,
            website,
            dw_first_name,
            dw_last_name,
            dw_member_id,
            address1,
            address2,
            city,
            State,
            zipCode,
            eligibility,
            team_vacancy,
            team_positions,
            team_members,
            synopsis,
            privacy,
            status,
            dw_membership_role,
            dw_membership_status,
            service_category,
            service_type,
            service,
            service_developer,
            stage,
            event_link,
            results,
          } = dreamData;
          let dream_id = dreamData.id
          res.render(pageToRender, {
            first_name,
            last_name,
            loggedIn,
            member_id,
            dream_id,
            current_project,
            dream_name,
            start_date,
            scrum_type,
            password,
            email,
            website,
            dw_first_name,
            dw_last_name,
            dw_member_id,
            address1,
            address2,
            city,
            State,
            zipCode,
            eligibility,
            team_vacancy,
            team_positions,
            team_members,
            synopsis,
            privacy,
            status,
            dw_membership_role,
            dw_membership_status,
            service_category,
            service_type,
            service,
            service_developer,
            stage,
            event_link,
            results,
            date_of_birth,
            membership_status,
            membership_role,
            member_student_status,
            member_student_role,
            member_student_id,
            dreamweaver_level,
            dreams_created,
            dreams_completed,
            admin_role,
          });
        });
      }
    })
  }
}
const updateDreamProfile = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: user_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      if (memberData) {
        let {
          first_name,
          last_name,
          date_member_joined,
          loggedIn,
          date_of_birth,
          membership_status,
          membership_role,
          member_student_status,
          member_student_id,
          dreamweaver_level,
          dreams_created,
          dreams_completed,
          admin_role,
        } = memberData;
      }
      let reqBody = req.body;
      let {
        current_project,
        dream_name,
        start_date,
        scrum_type,
        password,
        email,
        website,
        dw_first_name,
        dw_last_name,
        dw_member_id,
        address1,
        address2,
        city,
        State,
        zipCode,
        eligibility,
        team_vacancy,
        team_positions,
        team_members,
        synopsis,
        privacy,
        status,
        dw_membership_role,
        dw_membership_status,
        service_category,
        service_type,
        service,
        service_developer,
        stage,
        event_link,
        results,
      } = reqBody;
      const newData = {};
      Object.entries(reqBody)
        .filter(([, value]) => value !== "")
        .forEach(([key, value]) => (newData[key] = value));
      Dream.findByIdAndUpdate(
        { _id: id },
        { $set: newData },
        { new: true },
        (err, data) => {
          if (err) {
            console.log(err);
            let message = "You have unsuccessfully updated the Dream Profile.";
            res.render("dream-profileSettings", { message });
          }
          let message = "You have successfully updated the Dream Profile.";
          // res.redirect(pageToRender + member_id);
          res.redirect(pageToRender + id);
        }
      );
    })
  }
}

const updateDreamPassword = (pageToRender, req, res) => {
  let { email, password1, password2 } = req.body;
  if (password1 === password2) {
    Member.findOne({ email }, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        let password = password1;
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
        id = data.id;
        Member.findByIdAndUpdate(
          { _id: id },
          { $set: { password: password } },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            }
            res.redirect(pageToRender + id);
          }
        );
      }
    });
  } else {
    let passwordMessage = "The passwords do not match each other";
    res.render("updateMemberProfile", { passwordMessage });
  }
}
const updateDBDream = (pageToRender, req, res) => {
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
}
const deleteDBDream = (pageToRender, req, res) => {
  let id = req.params.id;
  let adminID = req.body.adminID;
  Dream.findByIdAndRemove({ _id: id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This profile does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(pageToRender + adminID);
  });
}
const deleteDream = (pageToRender, req, res) => {
  let id = req.params.id;
  Dream.findByIdAndRemove({ _id: id }, { new: true }, async (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!data) {
      let errorMessage = "This profile does not exist.";
      res.json({ message: errorMessage });
    }
    res.redirect(pageToRender);
  });
}
const dreamDatabase = (pageToRender, req, res) => {
  let member_id = req.user._id.toString()
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role.toString()
  let id = req.params.id;
  let value = 0;
  let memberID = id;
  Member.findById({ _id: member_id }, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    let privacy = "Private"
    Dream.find()
      // Dream.find({ State: "AZ" })
      // .sort({ city: -1 })
      // .limit(10)
      .exec((err, dreamData) => {
        if (err) {
          console.log(err);
          done(null, dreamData);
        }
        let {
          current_project,
          dream_name,
          scrum_type,
          password1,
          password2,
          dream_email,
          dream_website,
          dw_first_name,
          dw_last_name,
          dw_member_id,
          address1,
          address2,
          city,
          State,
          zipCode,
          eligibility,
          team_vacancy,
          team_positions,
          team_members,
          dream_synopsis,
          dream_privacy,
          dream_status,
          dw_membership_role,
          dw_membership_status,
          service_category,
          service_type,
          service,
          service_developer,
          dream_stage,
          dream_event_link,
          dream_results,
        } = dreamData;
        loggedIn = memberData.loggedIn;
        admin_role = memberData.admin_role;
        membership_role = memberData.membership_role;
        membership_status = memberData.membership_status;
        id = memberData.id;
        first_name = memberData.first_name;
        last_name = memberData.last_name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          user_id,
          user_admin_role,
          memberID,
          first_name,
          last_name,
          loggedIn,
          admin_role,
          membership_role,
          membership_status,
          dreams: dreamData,
          message,
          privacy,
        });
      });
  });
}
const dreamDatabasePublic = (pageToRender, req, res) => {
  let member_id = req.user._id.toString()
  let id = req.params.id;
  let value = 0;
  let memberID = id;
  Member.findById({ _id: member_id }, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    let privacy = "Public"
    Dream.find({ privacy: "Public" })
      // Dream.find({ State: "AZ" })
      // .sort({ city: -1 })
      // .limit(10)
      .exec((err, dreamData) => {
        if (err) {
          console.log(err);
          done(null, dreamData);
        }
        let {
          current_project,
          dream_name,
          scrum_type,
          password1,
          password2,
          dream_email,
          dream_website,
          dw_first_name,
          dw_last_name,
          dw_member_id,
          address1,
          address2,
          city,
          State,
          zipCode,
          eligibility,
          team_vacancy,
          team_positions,
          team_members,
          dream_synopsis,
          dream_privacy,
          dream_status,
          dw_membership_role,
          dw_membership_status,
          service_category,
          service_type,
          service,
          service_developer,
          dream_stage,
          dream_event_link,
          dream_results,
        } = dreamData;
        loggedIn = memberData.loggedIn;
        admin_role = memberData.admin_role;
        membership_role = memberData.membership_role;
        membership_status = memberData.membership_status;
        id = memberData.id;
        first_name = memberData.first_name;
        last_name = memberData.last_name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          memberID,
          first_name,
          last_name,
          loggedIn,
          admin_role,
          membership_role,
          membership_status,
          dreams: dreamData,
          message,
          privacy,
        });
      });
  });
}
const dreamDatabaseForecast = (pageToRender, req, res) => {
  let member_id = req.user._id.toString()
  let id = req.params.id;
  let value = 0;
  let memberID = id;
  Member.findById({ _id: member_id }, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    let privacy = "Private"
    Dream.find({ status: "Pending Approval" })
      // Dream.find({ State: "AZ" })
      // .sort({ city: -1 })
      // .limit(10)
      .exec((err, dreamData) => {
        if (err) {
          console.log(err);
          done(null, dreamData);
        }
        let {
          current_project,
          dream_name,
          scrum_type,
          password1,
          password2,
          dream_email,
          dream_website,
          dw_first_name,
          dw_last_name,
          dw_member_id,
          address1,
          address2,
          city,
          State,
          zipCode,
          eligibility,
          team_vacancy,
          team_positions,
          team_members,
          dream_synopsis,
          dream_privacy,
          dream_status,
          dw_membership_role,
          dw_membership_status,
          service_category,
          service_type,
          service,
          service_developer,
          dream_stage,
          dream_event_link,
          dream_results,
        } = dreamData;
        loggedIn = memberData.loggedIn;
        admin_role = memberData.admin_role;
        membership_role = memberData.membership_role;
        membership_status = memberData.membership_status;
        id = memberData.id;
        first_name = memberData.first_name;
        last_name = memberData.last_name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          memberID,
          first_name,
          last_name,
          loggedIn,
          admin_role,
          membership_role,
          membership_status,
          dreams: dreamData,
          message,
          privacy,
        });
      });
  });
}
const dreamDatabaseForecastPublic = (pageToRender, req, res) => {
  let member_id = req.user._id.toString()
  let id = req.params.id;
  let value = 0;
  let memberID = id;
  Member.findById({ _id: member_id }, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    let privacy = "Public"
    Dream.find({ status: "Pending Approval" })
      .find({ privacy: "Public" })
      // Dream.find({ State: "AZ" })
      // .sort({ city: -1 })
      // .limit(10)
      .exec((err, dreamData) => {
        if (err) {
          console.log(err);
          done(null, dreamData);
        }
        let {
          current_project,
          dream_name,
          scrum_type,
          password1,
          password2,
          dream_email,
          dream_website,
          dw_first_name,
          dw_last_name,
          dw_member_id,
          address1,
          address2,
          city,
          State,
          zipCode,
          eligibility,
          team_vacancy,
          team_positions,
          team_members,
          dream_synopsis,
          dream_privacy,
          dream_status,
          dw_membership_role,
          dw_membership_status,
          service_category,
          service_type,
          service,
          service_developer,
          dream_stage,
          dream_event_link,
          dream_results,
        } = dreamData;
        loggedIn = memberData.loggedIn;
        admin_role = memberData.admin_role;
        membership_role = memberData.membership_role;
        membership_status = memberData.membership_status;
        id = memberData.id;
        first_name = memberData.first_name;
        last_name = memberData.last_name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          memberID,
          first_name,
          last_name,
          loggedIn,
          admin_role,
          membership_role,
          membership_status,
          dreams: dreamData,
          message,
          privacy,
        });
      });
  });
}

const studentAnswers = (pageToRender, req, res) => {
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
          let studentAnswers = studentData.answers
          let sortedAnswers = Object.values(studentAnswers).sort((a, b) => {
            const questionA = a.questionTitle.toUpperCase()
            const questionB = b.questionTitle.toUpperCase()
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
          member_student_role = memberData.member_student_role;
          member_student_status = memberData.member_student_status;
          let member_student_id = memberData.member_student_id;
          student_status = studentData.student_status;
          student_role = studentData.student_role;
          let message = "TESTING DATA OUTPUT";
          res.render(pageToRender, {
            id,
            first_name,
            last_name,
            member_student_id,
            member_student_status,
            member_student_role,
            student_status,
            student_role,
            loggedIn,
            membership_role,
            admin_role,
            answers: sortedAnswers,
            message,
          });
        }
      });
    });
  }
}
const updateStudentAnswer = (pageToRender, req, res) => {
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
}
const deleteStudentAnswer = (pageToRender, req, res) => {
  let answer_id = req.params.id;
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
          Student.find({ answers: data.answers })
            .sort({ questionTitle: "asc" })
            // .limit(10)
            .exec((err, data) => {
              if (err) {
                console.log(err);
                done(null, data);
              }
              res.redirect(pageToRender + id);
            });
        }
      );
    });
  });
}

const vendorProfileSettingsDB = (pageToRender, req, res) => {
  let vendor_id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
  if (vendor_id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: user_id }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      Vendor.findById({ _id: vendor_id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        let {
          loggedIn,
          organization_name,
          org_branch,
          serviceDate,
          password,
          vendor_status,
          membership_role,
          membership_status,
          member_id,
          org_email,
          org_website,
          org_phone,
          org_phone_ext,
          org_alt_phone,
          org_cell_phone,
          org_fax,
          poc_first_name,
          poc_last_name,
          poc_title,
          alt_poc_first_name,
          alt_poc_last_name,
          alt_poc_title,
          alt_poc_phone,
          alt_poc_email,
          address1,
          address2,
          city,
          State,
          zipCode,
          mail_address1,
          mail_address2,
          mail_city,
          mail_State,
          mail_zipCode,
          eligibility,
          custody_level,
          adoc_approved,
          ahcccs_approved,
          azrha_approved,
          info,
          service,
          service_type,
          service_category,
          service_source,
          veterans_services,
        } = data;
        let id = data._id;
        user_loggedIn = memberData.loggedIn;
        user_admin_role = memberData.admin_role;
        user_membership_role = memberData.membership_role;
        user_membership_status = memberData.membership_status;
        user_member_student_status = memberData.member_student_status;
        user_student_role = memberData.member_student_role;
        user_id = memberData.id;
        first_name = memberData.first_name;
        last_name = memberData.last_name;
        res.render(pageToRender, {
          loggedIn,
          id,
          user_id,
          user_admin_role,
          user_membership_role,
          user_member_student_status,
          user_student_role,
          organization_name,
          org_branch,
          serviceDate,
          password,
          vendor_status,
          membership_role,
          membership_status,
          member_id,
          org_email,
          org_website,
          org_phone,
          org_phone_ext,
          org_alt_phone,
          org_cell_phone,
          org_fax,
          poc_first_name,
          poc_last_name,
          poc_title,
          alt_poc_first_name,
          alt_poc_last_name,
          alt_poc_title,
          alt_poc_phone,
          alt_poc_email,
          address1,
          address2,
          city,
          State,
          zipCode,
          mail_address1,
          mail_address2,
          mail_city,
          mail_State,
          mail_zipCode,
          eligibility,
          custody_level,
          adoc_approved,
          ahcccs_approved,
          azrha_approved,
          info,
          service,
          service_type,
          service_category,
          service_source,
          veterans_services,
        });
      });
    });
  }
}
const updateVendorProfileDB = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    let reqBody = req.body;
    // let loggedIn = true;
    let {
      organization_name,
      org_branch,
      serviceDate,
      password,
      vendor_status,
      membership_role,
      membership_status,
      member_id,
      org_email,
      org_website,
      org_phone,
      org_phone_ext,
      org_alt_phone,
      org_cell_phone,
      org_fax,
      poc_first_name,
      poc_last_name,
      poc_title,
      alt_poc_first_name,
      alt_poc_last_name,
      alt_poc_title,
      alt_poc_phone,
      alt_poc_email,
      address1,
      address2,
      city,
      State,
      zipCode,
      mail_address1,
      mail_address2,
      mail_city,
      mail_State,
      mail_zipCode,
      eligibility,
      custody_level,
      adoc_approved,
      ahcccs_approved,
      azrha_approved,
      info,
      service,
      service_type,
      service_category,
      service_source,
      veterans_services,
    } = reqBody;
    const newData = {};
    Object.entries(reqBody)
      .filter(([, value]) => value !== "")
      .forEach(([key, value]) => (newData[key] = value));
    Vendor.findByIdAndUpdate(
      { _id: id },
      { $set: newData },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
          let message =
            "This email is already registered. Please select a new e-mail.";
          res.render("service-profileSettingsDB", { message });
        }
        let message = "You have successfully updated your profile.";
        res.redirect(pageToRender + id);
      }
    );
  }
}
const vendorDatabase = (pageToRender, req, res) => {
  let id = req.params.id;
  let user_id = req.user._id.toString()
  let user_admin_role = req.user.admin_role
  let value = 0;
  let memberID = id;
  Member.findById({ _id: memberID }, (err, memberData) => {
    if (err) {
      console.log(err);
    }
    Vendor.find({ __v: value })
      .sort({ name: "asc" })
      // .limit(10)
      .exec((err, vendorData) => {
        if (err) {
          console.log(err);
          done(null, vendorData);
        }
        loggedIn = memberData.loggedIn;
        admin_role = memberData.admin_role;
        membership_role = memberData.membership_role;
        student_role = memberData.member_student_role;
        member_student_status = memberData.member_student_status;
        membership_status = memberData.membership_status;
        id = memberData.id;
        first_name = memberData.first_name;
        last_name = memberData.last_name;
        let message = "TESTING DATA OUTPUT";
        res.render(pageToRender, {
          id,
          user_id,
          user_admin_role,
          memberID,
          first_name,
          last_name,
          loggedIn,
          admin_role,
          membership_role,
          membership_status,
          member_student_status,
          student_role,
          vendors: vendorData,
          message,
        });
      });
  });
}
const deleteVendor = (pageToRender, req, res) => {
  let vendor_id = req.params.id;
  let adminID = req.body.adminID;
  Vendor.findByIdAndRemove(
    { _id: vendor_id },
    { new: true },
    async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (!data) {
        let errorMessage = "This profile does not exist.";
        res.json({ message: errorMessage });
      }
      res.redirect(pageToRender + adminID);
    }
  );
}

module.exports = {
  /// Admin ///
  myProfile: (req, res) => {
    adminProfile("my-profile", req, res);
  },
  myProfileSettings: (req, res) => {
    adminProfile("my-profileSettings", req, res);
  },
  updateMyProfile: (req, res) => {
    updateAdminProfile("/myProfileSettings/", req, res);
  },
  myProfileSettingsDB: (req, res) => {
    adminProfile("my-profileSettingsDB", req, res);
  },
  updateMyProfileDB: (req, res) => {
    updateAdminProfile("my-profileSettingsDB", req, res);
  },
  updateMyPassword: (req, res) => {
    updateAdminPassword("/myProfileSettings/", req, res);
  },

  userMemberDatabase: (req, res) => {
    adminMemberDatabase("member-database", req, res);
  },
  userUpdateMemberDatabase: (req, res) => {
    adminDeleteMember("/userMemberDatabase/", req, res);
  },
  userVendorDatabase: (req, res) => {
    adminVendorDatabase("service-database", req, res);
  },
  userUpdateVendorDatabase: (req, res) => {
    adminDeleteVendor("/userVendorDatabase/", req, res);
  },
  userDatabase: (req, res) => {
    adminDatabase("user-database", req, res);
  },

  /// Members ///
  memberProfilePublic: (req, res) => {
    memberProfilePublic("member-profile-public", req, res);
  },
  updateMemberProfilePublic: (req, res) => {
    updateMemberProfilePublic("/memberProfilePublic/", req, res);
  },
  memberProfile: (req, res) => {
    memberProfile("member-profile", req, res);
  },
  memberProfileSettings: (req, res) => {
    memberProfile("member-profileSettings", req, res);
  },
  updateMemberProfileWall: (req, res) => {
    updateMemberProfile("/memberProfile/", req, res);
  },
  updateMemberProfile: (req, res) => {
    updateMemberProfile("/memberProfileSettings/", req, res);
  },
  updateMemberPassword: (req, res) => {
    updateMemberPassword("/memberProfileSettings/", req, res);
  },
  deleteMember: (req, res) => {
    deleteMember("/", req, res);
  },

  /// Dreams ///
  dreamProfile: (req, res) => {
    dreamProfile("dream-profile", req, res);
  },
  dreamProfileSettings: (req, res) => {
    dreamProfile("dream-profileSettings", req, res);
  },
  updateDreamProfile: (req, res) => {
    updateDreamProfile("/dreamProfileSettings/", req, res);
  },
  updateDreamPassword: (req, res) => {
    updateDreamPassword("/dreamProfileSettings/", req, res);
  },
  deleteDream: (req, res) => {
    deleteDream("/", req, res);
  },

  /// Member Database ///
  memberProfileSettingsDB: function (req, res) {
    memberProfileDB("member-profileSettingsDB", req, res);
  },
  updateMemberProfileDB: (req, res) => {
    updateMemberProfile("/memberProfileSettingsDB/", req, res);
  },
  memberDatabase: (req, res) => {
    memberDatabase("member-database", req, res);
  },
  memberDatabaseAZ: (req, res) => {
    memberDatabaseAZ("member-database", req, res);
  },
  updateMemberDatabase: (req, res) => {
    deleteMember("/memberDatabase/", req, res);
  },
  memberDatabasePublic: (req, res) => {
    memberDatabase("member-database-public", req, res);
  },
  updateMemberDatabasePublic: (req, res) => {
    deleteMember("/memberDatabase/", req, res);
  },

  /// Dream Database ///
  dreamSettingsDB: function (req, res) {
    dreamProfile("dream-profileSettingsDB", req, res);
  },
  updateDreamSettingsDB: (req, res) => {
    updateDreamProfile("/dreamDatabase/", req, res);
  },
  dreamDatabase: (req, res) => {
    dreamDatabase("dream-database", req, res);
  },
  dreamDatabasePublic: (req, res) => {
    dreamDatabasePublic("dream-database", req, res);
  },
  dreamDatabaseForecast: (req, res) => {
    dreamDatabaseForecast("dream-database", req, res);
  },
  dreamDatabaseForecastPublic: (req, res) => {
    dreamDatabaseForecastPublic("dream-database", req, res);
  },
  deleteDBDream: (req, res) => {
    deleteDBDream("/dreamDatabase/", req, res);
  },

  /// Student Answer Database ///
  studentAnswers: (req, res) => {
    studentAnswers("member-studentAnswers", req, res);
  },
  updateStudentAnswer: (req, res) => {
    updateStudentAnswer("/studentAnswers/", req, res);
  },
  deleteStudentAnswers: (req, res) => {
    deleteStudentAnswer("/studentAnswers/", req, res);
  },

  /// Vendor Database ///
  renderVendorProfileSettingsDB: function (req, res) {
    vendorProfileSettingsDB("service-profileSettingsDB", req, res);
  },
  updateVendorProfileDB: (req, res) => {
    updateVendorProfileDB("/vendorProfileSettingsDB/", req, res);
  },
  // updateVendorProfileDB: (req, res) => {
  //   updateVendorProfileDB("service-profileSettingsDB", req, res);
  // },
  renderVendorDatabase: (req, res) => {
    vendorDatabase("service-database", req, res);
  },
  updateVendorDatabase: (req, res) => {
    deleteVendor("/vendorDatabase/", req, res);
  },

};
