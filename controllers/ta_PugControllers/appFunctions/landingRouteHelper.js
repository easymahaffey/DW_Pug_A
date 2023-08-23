const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");
const Project = require("../../../db/models/ta_PugModels/Project");
const Site = require("../../../db/models/ta_PugModels/SiteStats");
const Visitor = require("../../../db/models/ta_PugModels/Visitor");
const VisitorStats = require("../../../db/models/ta_PugModels/VisitorStats");
const Vendor = require("../../../db/models/ta_PugModels/Vendor");
const Dream = require("../../../db/models/ta_PugModels/Dream");
const Student = require("../../../db/models/ta_PugModels/Student");
const bcrypt = require("bcryptjs");
const passportMember = require("passport");

const visitors = (req, res) => {
  let ip_address = req.ip
  let language = req.headers['accept-language']
  let user_agent = req.headers["user-agent"]
  // let new_visitor_info = { ip_address: req.ip, language: req.headers['accept-language'], user_agent: req.headers["user-agent"] }

  let visitor = new Visitor({
    ip_address,
    language,
    user_agent,
  });
  visitor.save((err, data) => {
    if (err) {
      console.log("VISITOR LOG ERROR", err);
    }
    // console.log("New VISITOR DATA ", data)
    return
  });
};

const visitorStats = (req, res) => {
  let new_visitor_info = { ip_address: req.ip, language: req.headers['accept-language'], user_agent: req.headers["user-agent"] }
  let new_ip = req.ip
  VisitorStats
    .find({}, async (err, visitorStatsData) => {
      if (err) {
        console.log(err);
      }
      if (visitorStatsData.length === 0) {
        let _id = 0
        let last_visitor_info = {}
        let visitor_total_count = 0
        let errorMessage = "Visitor DB initialization failed"
        console.log("VISITOR visitorStats() ", { message: errorMessage });
        return
      } else {
        let {
          _id,
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
        id = _id
        last_visitor_info = new_visitor_info
        visitor_total_count += 1
        // Visitor.find({ip_address})
        Visitor.find({}, async (err, visitorData) => {
          let count = 0
          let arr = []
          visitorData.forEach(
            IP => {
              let test1 = new_ip
              let test2 = IP.ip_address
              if (!arr.includes(test1)) {
                arr.push(test1)
              }
              if (!arr.includes(test2)) {
                arr.push(test2)
              }
            });
          VisitorStats
            .findByIdAndUpdate(
              { _id: id },
              {
                $set: {
                  last_visitor_info: last_visitor_info,
                  visitor_total_count: visitor_total_count,
                  visitor_unique_count: visitor_unique_count,
                  visitor_total_state_count: visitor_total_state_count,
                  visitor_total_state_unique_count: visitor_total_state_unique_count,
                  visitor_total_member_count: visitor_total_member_count,
                  max_total_visitors: max_total_visitors,
                  max_state_visitors: max_state_visitors,
                  exceeds_max_visitors: exceeds_max_visitors,
                  exceeds_max_state_visitors: exceeds_max_state_visitors,
                }
              },
              { new: true },
              (err, data) => {
                if (err) {
                  console.log(err);
                }
                // console.log("VISITOR STATS visitorStats() Visitor Stats DATA ", data)
                // console.log("VISITOR STATS visitorStats() Visitor Stats Total I ", visitorStatsData[0])
              }
            );
        })
      }
    })
};

const siteStats = (req, res) => {
  let id
  // console.log("SITE STAT REQ ", req)
  Site
    .find({}, async (err, siteData) => {
      if (err) {
        console.log(err);
      }
      if (siteData.length !== 0) {
        let {
          _id,
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
        id = _id
        Member
          .find({}, async (err, memberTotalData) => {
            if (err) {
              console.log(err);
            }
            if (memberTotalData) {
              member_total_count = memberTotalData.length
            }
            // })
            Member
              .find({ State: "AZ" }, async (err, memberTotalData) => {
                if (err) {
                  console.log(err);
                }
                if (memberTotalData) {
                  member_total_state_count = memberTotalData.length
                }
                // })
                Member
                  .find({ privacy: "Show" }, async (err, memberTotalData) => {
                    if (err) {
                      console.log(err);
                    }
                    if (memberTotalData) {
                      member_total_public_count = memberTotalData.length
                    }
                    // })
                    Member
                      .find({ privacy: "Hide" }, async (err, memberTotalData) => {
                        if (err) {
                          console.log(err);
                        }
                        if (memberTotalData) {
                          member_total_private_count = memberTotalData.length
                        }
                        // })
                        Member
                          .find({ membership_status: "Active" }, async (err, memberTotalData) => {
                            if (err) {
                              console.log(err);
                            }
                            if (memberTotalData) {
                              member_total_active_count = memberTotalData.length
                            }
                            // })
                            Member
                              .find({ membership_status: "Inactive" }, async (err, memberTotalData) => {
                                if (err) {
                                  console.log(err);
                                }
                                if (memberTotalData) {
                                  member_total_inactive_count = memberTotalData.length
                                }
                                // })
                                Member
                                  .find({ membership_role: "Member" }, async (err, memberTotalData) => {
                                    if (err) {
                                      console.log(err);
                                    }
                                    if (memberTotalData) {
                                      member_only_count = memberTotalData.length
                                    }
                                    // })
                                    Member
                                      .find({ membership_role: "Server" }, async (err, memberTotalData) => {
                                        if (err) {
                                          console.log(err);
                                        }
                                        if (memberTotalData) {
                                          member_server_count = memberTotalData.length
                                        }
                                        // })
                                        Member
                                          .find({ membership_role: "Dreamweaver" }, async (err, memberTotalData) => {
                                            if (err) {
                                              console.log(err);
                                            }
                                            if (memberTotalData) {
                                              member_dreamweaver_count = memberTotalData.length
                                            }
                                            // })
                                            Member
                                              .find({ membership_role: "Project Manager" }, async (err, memberTotalData) => {
                                                if (err) {
                                                  console.log(err);
                                                }
                                                if (memberTotalData) {
                                                  member_project_manager_count = memberTotalData.length
                                                }
                                                // })
                                                Member
                                                  .find({ membership_role: "Site Manager" }, async (err, memberTotalData) => {
                                                    if (err) {
                                                      console.log(err);
                                                    }
                                                    if (memberTotalData) {
                                                      member_site_manager_count = memberTotalData.length
                                                    }
                                                    // })
                                                    Member
                                                      .find({ admin_role: "Site Manager" }, async (err, memberTotalData) => {
                                                        if (err) {
                                                          console.log(err);
                                                        }
                                                        if (memberTotalData) {
                                                          member_admin_role_site_manager_count = memberTotalData.length
                                                        }
                                                        // })
                                                        Member
                                                          .find({ admin_role: "Local Administrator" }, async (err, memberTotalData) => {
                                                            if (err) {
                                                              console.log(err);
                                                            }
                                                            if (memberTotalData) {
                                                              member_admin_role_local_administrator_count = memberTotalData.length
                                                            }
                                                            // })
                                                            Member
                                                              .find({ auth_register: "No" }, async (err, memberTotalData) => {
                                                                if (err) {
                                                                  console.log(err);
                                                                }
                                                                if (memberTotalData) {
                                                                  member_register_pending_count = memberTotalData.length
                                                                }
                                                                // })
                                                                Member
                                                                  .find({ auth_register: "Yes" }, async (err, memberTotalData) => {
                                                                    if (err) {
                                                                      console.log(err);
                                                                    }
                                                                    if (memberTotalData) {
                                                                      member_register_approved_count = memberTotalData.length
                                                                    }
                                                                    // })
                                                                    Member
                                                                      .find({ membership_approved: "Yes" }, async (err, memberTotalData) => {
                                                                        if (err) {
                                                                          console.log(err);
                                                                        }
                                                                        if (memberTotalData) {
                                                                          membership_approved_count = memberTotalData.length
                                                                        }
                                                                        // })

                                                                        Site
                                                                          .findByIdAndUpdate(
                                                                            { _id: id },
                                                                            {
                                                                              $set: {
                                                                                member_register_pending_count: member_register_pending_count,
                                                                                member_register_approved_count: member_register_approved_count,
                                                                                membership_approved_count: membership_approved_count,
                                                                                member_total_count: member_total_count,
                                                                                member_total_state_count: member_total_state_count,
                                                                                member_total_private_count: member_total_private_count,
                                                                                member_total_public_count: member_total_public_count,
                                                                                member_total_active_count: member_total_active_count,
                                                                                member_total_inactive_count: member_total_inactive_count,
                                                                                member_dreamweaver_count: member_dreamweaver_count,
                                                                                member_server_count: member_server_count,
                                                                                member_only_count: member_only_count,
                                                                                member_project_manager_count: member_project_manager_count,
                                                                                member_site_manager_count: member_site_manager_count,
                                                                                member_admin_role_site_manager_count: member_admin_role_site_manager_count,
                                                                                member_admin_role_local_administrator_count: member_admin_role_local_administrator_count,
                                                                                max_total_members: max_total_members,
                                                                                max_state_members: max_state_members,
                                                                                exceeds_max_members: exceeds_max_members,
                                                                                exceeds_max_state_members: exceeds_max_state_members,
                                                                              }
                                                                            },
                                                                            { new: true },
                                                                            (err, data) => {
                                                                              if (err) {
                                                                                console.log(err);
                                                                              }
                                                                              // console.log("SITE STATS siteStats() Site Stats DATA ", data)
                                                                            }
                                                                          );
                                                                      })
                                                                  })
                                                              })
                                                          })
                                                      })
                                                  })
                                              })
                                          })
                                      })
                                  })
                              })
                          })
                      })
                  })
              })
          })
      } else {
        console.log("FAILED TO INITIALIZE SITE STAT DATA,")
        return
      }
    })
};

const initialLanding = (pageToRender, req, res) => {
  visitors(req)
  visitorStats(req)
  res.render(pageToRender);
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
        res.render("register_member", { passwordMessage, loggedIn });
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
const loginMember = (pageToRender, req, res, next) => {
  passportMember.authenticate("local", function (err, member, info) {
    if (err) {
      return next(err);
    }
    if (!member) {
      let message =
        "This member's email is not registered in our database. Please register.";
      let loggedIn = false;
      return res.render("register_member", { message, loggedIn });
    }
    if(member.auth_register !== "Yes"){
      let message =
        "You registration has been received and is pending approval at this time.";
      let loggedIn = false;
      // return res.redirect( { message, loggedIn }, "/");
      return res.render("landing", { message, loggedIn });
    } else if(member.membership_approved !== "Yes"){
      let message =
        "Your registration has been approved but your membership is pending or not approved at this time.";
      let loggedIn = false;
      // return res.redirect("/", { message, loggedIn });
      return res.render("landing", { message, loggedIn });
    }
    req.logIn(member, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect(pageToRender + member.id);
    });
  })(req, res, next);
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
      siteStats()
      let member_student_status = data.member_student_status;
      let student_role = data.member_student_role;
      let member_student_id = data.member_student_id;
      let { _id, first_name, loggedIn, membership_role, dreamweaver_level, dreams_created, dreams_completed, admin_role } = data;
      let id = _id;
      res.render(pageToRender, {
        id,
        first_name,
        loggedIn,
        membership_role,
        member_student_status,
        student_role,
        member_student_id,
        dreamweaver_level,
        dreams_created,
        dreams_completed,
        admin_role,
      });
    });
  }
};
const finalLandingMemberB = (pageToRender, req, res) => {
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
      let first_name = data.first_name;
      let last_name = data.last_name;
      let date_of_birth = data.date_of_birth;
      let date_member_joined = data.date_member_joined;
      let email = data.email;
      let phone = data.phone;
      let city = data.city;
      let state = data.state;
      let zipCode = data.zipCode;
      let privacy = data.privacy;
      let member_student_status = data.member_student_status;
      let member_student_id = data.member_student_id;
      if (member_student_status === "Active") {
        Student.findById({ _id: member_student_id }, (err, studentData) => {
          if (err) {
            console.log(err);
          }
          if (studentData) {
            studentData.student_loggedIn = true;
            studentData.save((err, data) => {
              if (err) {
                console.log(err);
              }
            });
          }
          let { loggedIn, membership_role, membership_status, _id, student_status, student_role } = studentData;
          let id = _id;
          res.render(pageToRender, {
            loggedIn,
            first_name,
            last_name,
            date_of_birth,
            date_member_joined,
            email,
            phone,
            city,
            state,
            zipCode,
            privacy,
            membership_role,
            membership_status,
            member_student_status,
            student_status,
            student_role,
            id,
          });
        });
      }
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
      req.logout(() => {
        Member.findByIdAndUpdate({ _id: id }, { $set: { loggedIn: false } }, { new: true }, (err, data) => {
          if (err) {
            console.log(err)
          } else {
            res.redirect(pageToRender);
          }
        })
      })
    });
  }
};

const renderRegister = (pageToRender, req, res) => {
  let id = req.params.id;
  Member.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      id = data.id;
      loggedIn = data.loggedIn;
      membership_role = data.membership_role;
      membership_status = data.membership_status;
      res.render(pageToRender, {
        id,
        loggedIn,
        membership_role,
        membership_status,
      });
    } else {
      let message =
        "You are not logged in as a member. Please login as a member.";
      res.render("login_member", { message });
    }
  });
};
const renderRegisterDream = (pageToRender, req, res) => {
  let id = req.params.id;
  Member.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      id = data.id;
      loggedIn = data.loggedIn;
      membership_role = data.membership_role;
      membership_status = data.membership_status;
      res.render(pageToRender, {
        id,
        loggedIn,
        membership_role,
        membership_status,
      });
    } else {
      let message =
        "You are not logged in as a member. Please login as a member.";
      res.render("login_member", { message });
    }
  });
};
const renderRegisterDreamB = (pageToRender, req, res) => {
  let id = req.params.id;
  Member.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      id = data.id;
      loggedIn = data.loggedIn;
      membership_role = data.membership_role;
      membership_status = data.membership_status;
      Dream.findById({ _id: id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          id = data.id;
          loggedIn = data.loggedIn;
          membership_role = data.membership_role;
          membership_status = data.membership_status
          res.render(pageToRender, {
            id,
            loggedIn,
            membership_role,
            membership_status,
          });
        } else {
          let message =
            "You are not logged in as a member. Please login as a member.";
          res.render("login_member", { message });
        }
      })
    }
  });
};
const studentRegister = (pageToRender, req, res) => {
  let id = req.params.id;
  Member.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      let { student_status, student_role } = req.body;
      let first_name = data.first_name;
      let last_name = data.last_name;
      let date_of_birth = data.date_of_birth;
      let date_member_joined = data.date_member_joined;
      let email = data.email;
      let phone = data.phone;
      let city = data.city;
      let state = data.state;
      let zipCode = data.zipCode;
      let privacy = data.privacy;
      let membership_role = data.membership_role;
      let membership_status = data.membership_status;
      Student.findOne({ email }, async (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          let message =
            "This student email is already registered in our database. Please log in or re-register.";
          let loggedIn = false;
          let id = data.id;
          res.render("login_member", { message, id, loggedIn });
        } else {
          let student_loggedIn = true;
          let member_id = req.params.id;
          let student = new Student({
            member_id,
            student_loggedIn,
            first_name,
            last_name,
            date_of_birth,
            date_member_joined,
            email,
            phone,
            city,
            state,
            zipCode,
            privacy,
            student_status,
            student_role,
            membership_role,
            membership_status,
          });
          student.save((err, data) => {
            if (err) {
              console.log(err);
            }
          });
          Member.findByIdAndUpdate(
            { _id: id },
            {
              $set: {
                member_student_id: student._id,
                member_student_status: student.student_status,
                member_student_role: student.student_role,
                member_completed_challenge: student.completed_challenge,
                member_completed_peer_training: student.completed_peer_training,
              },
            },
            { new: true },
            (err, data) => {
              if (err) {
                console.log("SAVE", err);
              }
              res.redirect(pageToRender + student.id);
            }
          );
        }
      });
    }
  });
};
const finalLandingStudent = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    student_role = "";
    res.redirect("/");
  } else {
    Student.findById({ _id: id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      let { first_name, last_name, date_member_joined, student_loggedIn, student_role, student_status } = data;
      let id = data.member_id;
      let loggedIn = true;
      Member.findById({ _id: id }, (err, memberData) => {
        if (err) {
          console.log(err);
        }
        let membership_role = memberData.membership_role
        let member_student_role = memberData.member_student_role
        let student_role = memberData.member_student_role
        let admin_role = memberData.admin_role
        let member_student_status = memberData.member_student_status
        let city = memberData.city;
        let state = memberData.state;
        let zipCode = memberData.zipCode;
        res.render(pageToRender, {
          id,
          first_name,
          last_name,
          loggedIn,
          city,
          state,
          zipCode,
          date_member_joined,
          student_loggedIn,
          student_role,
          admin_role,
          membership_role,
          student_status,
          member_student_role,
          member_student_status,
        });
      });
    });
  }
};
const logoutStudent = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    student_loggedIn = false;
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
      });
      student_id = data.member_student_id;
      Student.findById({ _id: student_id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        data.student_loggedIn = false;
        data.save((err, data) => {
          if (err) {
            console.log(err);
          }
        });
      });
      userLevel = "";
      membership_role = "";
      student_role = "";
      req.logout(() => {
        Student.findByIdAndUpdate({ _id: id }, { $set: { loggedIn: false } }, { new: true }, (err, data) => {
          if (err) {
            console.log(err)
          } else {
            res.redirect(pageToRender);
          }
        })
      });
    });
  }
};


const renderRegisterUser = (pageToRender, req, res) => {
  let id = req.params.id;
  Member.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      let id = data._id;
      let loggedIn = data.loggedIn;
      let name = data.first_name;
      let email = data.email;
      let phone = data.phone;
      let city = data.city;
      let state = data.state;
      let zipcode = data.zipCode;
      let membership_role = data.membership_role;
      let membership_status = data.membership_status;
      res.render(pageToRender, { id, loggedIn, name, email, phone, city, state, zipcode, membership_role, membership_status });
    }
    if (!data) {
      User.findById({ _id: id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          id = data._id;
          loggedIn = data.loggedIn;
          userLevel = data.userLevel;
          res.render(pageToRender, { id, loggedIn });
        } else {
          let message =
            "You are not logged in as a member. Please login as a member to access admin login.";
          res.render("login_member", { message });
        }
      });
    }
  });
};
const registerUser = (pageToRender, req, res) => {
  let id = req.params.id;
  let { } = req.body;
  Member.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      let {
        name,
        email,
        password1,
        password2,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
      } = req.body;
      let member_id = id;
      if (password1 === password2) {
        User.findOne({ email }, async (err, data) => {
          if (err) {
            console.log(err);
          }
          if (data) {
            let message =
              "This admin email is already registered in our admin database. Please log in or re-register.";
            let loggedIn = false;
            let id = data.id;
            res.render("login", { message, id, loggedIn });
          } else {
            let password = password1;
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(password, salt);
            password = hashedPassword;
            let loggedIn = true;
            let info = req.params.id;
            // let member_id = member_id;
            let user = new User({
              name,
              email,
              password,
              loggedIn,
              city,
              state,
              zipcode,
              privacy,
              userLevel,
              member_id,
              info,
            });
            user.save((err, data) => {
              if (err) {
                console.log(err);
              }
              res.redirect("/finalLandingUser/" + data.id);
            });
          }
        });
      } else {
        let message = "The passwords do not match each other";
        let loggedIn = false;
        res.render("register", { id, message, loggedIn });
      }
    }
    if (!data) {
      User.findById({ _id: id }, (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          let {
            name,
            email,
            password1,
            password2,
            city,
            state,
            zipcode,
            privacy,
            userLevel,
          } = req.body;
          let userAdmin_id = id;
          if (password1 === password2) {
            User.findOne({ email }, async (err, data) => {
              if (err) {
                console.log(err);
              }
              if (data) {
                let message =
                  "This admin email is already registered in our admin database. Please log in or re-register.";
                let loggedIn = false;
                let id = data.id;
                res.render("login", { message, id, loggedIn });
              } else {
                let password = password1;
                let salt = await bcrypt.genSalt(10);
                let hashedPassword = await bcrypt.hash(password, salt);
                password = hashedPassword;
                let loggedIn = true;
                let info = req.params.id;
                let user = new User({
                  name,
                  email,
                  password,
                  loggedIn,
                  city,
                  state,
                  zipcode,
                  privacy,
                  userLevel,
                  userAdmin_id,
                  info,
                });
                user.save((err, data) => {
                  if (err) {
                    console.log(err);
                  }
                  res.redirect("/finalLandingUser/" + data.id);
                });
              }
            });
          } else {
            let message = "The passwords do not match each other";
            let loggedIn = false;
            res.render("register", { id, message, loggedIn });
          }
        }
      });
    }
  })
};
const renderLoginUser = (pageToRender, req, res) => {
  let id = req.params.id;
  Member.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      id = data.id;
      loggedIn = data.loggedIn;
      membership_role = data.membership_role;
      res.render(pageToRender, { id, membership_role, loggedIn });
    } else {
      let message =
        "You are not logged in as a member. Please login as a member to access admin login.";
      res.render("login_member", { message });
    }
  });
};
const loginAdmin = (pageToRender, req, res) => {
  let id = req.params.id;
  if (id === "undefined") {
    loggedIn = false;
    userLevel = "";
    membership_role = "";
    res.redirect("/");
  } else {
    Member.findById({ _id: id }, (err, data) => {
      let email = req.body.email;
      let password = req.body.password;
      let membership_role = data.membership_role;
      let member_id = data._id;
      User.findOne({ email }, async (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          bcrypt.compare(password, data.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              data.info = member_id;
              data.loggedIn = true;
              data.save((err, data) => {
                if (err) {
                  console.log(err);
                }
                let id = data._id;
                res.redirect(pageToRender + id);
              });
            } else {
              let message = "The Password You Entered Is Incorrect";
              res.render("login", { id, member_id, membership_role, message });
            }
          });
        }
      });
    });
  }
};
const adminLandingPage = (pageToRender, req, res) => {
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
      data.loggedIn = true;
      data.user_id = id;
      data.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
      let {
        name,
        loggedIn,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
        user_id,
        info,
      } = data;
      membership_role = "";
      res.render(pageToRender, {
        name,
        loggedIn,
        city,
        state,
        zipcode,
        privacy,
        userLevel,
        user_id,
        info,
        id,
      });
    });
  }
};
const userRenderRegisterMember = (pageToRender, req, res) => {
  let id = req.params.id;
  User.findById({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      id = data.id;
      loggedIn = data.loggedIn;
      userLevel = data.userLevel;
      res.render(pageToRender, { id, loggedIn, userLevel });
    } else {
      let message =
        "You are not logged in as a member. Please login as a member to access admin login.";
      res.render("login_member", { message });
    }
  });
};
const userRegisterMember = (pageToRender, req, res) => {
  let id = req.params.id;
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
      if (data) {
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
              let message =
                "This member's email is already registered in our database. Please log in or re-register.";
              let loggedIn = false;
              res.render("login_member", { message, loggedIn });
            } else {
              let password = password1;
              let salt = await bcrypt.genSalt(10);
              let hashedPassword = await bcrypt.hash(password, salt);
              password = hashedPassword;
              let loggedIn = false;
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
                  console.log("SAVE", err);
                }
                let id = userData._id;
                let name = userData.name;
                let userLevel = userData.userLevel;
                let loggedIn = userData.loggedIn;
                res.render(pageToRender + id, {
                  current_project,
                  first_name,
                  last_name,
                  id,
                  name,
                  loggedIn,
                  city,
                  state,
                  zipCode,
                  privacy,
                  membership_role,
                  userLevel,
                });
              });
            }
          });
        } else {
          let message = "The passwords do not match each other";
          let loggedIn = false;
          res.render("userRegisterMember", { message, loggedIn });
        }
      }
    });
  }
};
const adminLogout = (pageToRender, req, res) => {
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
      data.loggedIn = false;
      data.save((err, data) => {
        if (err) {
          console.log(err);
        }
      });
      member_id = data.info;
      userLevel = "";
      membership_role = "";
      req.logout(() => {
        Member.findByIdAndUpdate({ _id: member_id }, { $set: { loggedIn: false } }, { new: true }, (err, data) => {
          if (err) {
            console.log(err)
          } else {
            res.redirect(pageToRender);
          }
        })
        // Member.findById({ _id: member_id }, (err, data) => {
        //   if (err) {
        //     console.log(err);
        //   }
        //   data.loggedIn = false;
        //   data.save((err, data) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       res.redirect(pageToRender);
        //     }
        //   });
        // });
      });
    })
  }
};

const registerService = (pageToRender, req, res) => {
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
      if (memberData) {
        let {
          organization_name,
          password1,
          password2,
          org_branch,
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
          mail_state,
          mail_zipCode,
          eligibility,
          custody_level,
          adoc_approved,
          ahcccs_approved,
          azrha_approved,
          info,
          privacy,
          vendor_status,
          membership_role,
          service,
          service_type,
          service_category,
          service_source,
          veterans_services,
        } = req.body;
        if (password1 === password2) {
          ////// over-ride function
          Vendor.find({}, async (err, data) => {
            if (err) {
              console.log("VENDOR FIND ", err);
            }
            let password = password1;
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(password, salt);
            password = hashedPassword;
            let loggedIn = true;
            console.log("SERVICE MEMBER ID ", member_id);
            let vendor = new Vendor({
              member_id,
              password,
              loggedIn,
              organization_name,
              password,
              org_branch,
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
              mail_state,
              mail_zipCode,
              eligibility,
              custody_level,
              adoc_approved,
              ahcccs_approved,
              azrha_approved,
              info,
              privacy,
              vendor_status,
              membership_role,
              service,
              service_type,
              service_category,
              service_source,
              veterans_services,
            });
            vendor.save((err, data) => {
              if (err) {
                console.log("VENDOR SAVE ", err);
              }
              let id = memberData._id;
              let first_name = memberData.first_name;
              let loggedIn = memberData.loggedIn;
              let membership_role = memberData.membership_role;
              let admin_role = memberData.admin_role;
              res.render("final-landing", {
                organization_name,
                id,
                first_name,
                loggedIn,
                city,
                State,
                zipCode,
                privacy,
                membership_role,
                admin_role,
              });
            });
          });
        } else {
          let message = "The passwords do not match each other";
          res.render("register_service", { message, loggedIn });
        }
      }
    });
  }
};

const registerDream = (pageToRender, req, res) => {
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
      if (memberData) {
        let {
          current_project,
          dream_name,
          scrum_type,
          password1,
          password2,
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
        if (password1 === password2) {
          ////// over-ride function
          Dream.find({}, async (err, data) => {
            if (err) {
              console.log("LHR DREAM FIND ", err);
            }
            let password = password1;
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(password, salt);
            password = hashedPassword;
            let loggedIn = true;
            let dream = new Dream({
              member_id,
              password,
              loggedIn,
              current_project,
              dream_name,
              scrum_type,
              password1,
              password2,
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
              membership_role,
              membership_status,
              service_category,
              service_type,
              service,
              service_developer,
              stage,
              event_link,
              results,
            });
            dream.save((err, data) => {
              if (err) {
                console.log("DREAM SAVE ERR ", err);
              }
              let id = memberData._id;
              let dw_first_name = data.dw_first_name;
              let dw_last_name = data.dw_last_name;
              let first_name = memberData.first_name;
              let loggedIn = memberData.loggedIn;
              let membership_role = memberData.membership_role;
              let admin_role = memberData.admin_role;
              let dw_membership_role = data.dw_membership_role;
              let dw_membership_status = data.dw_membership_status;
              res.render("final-landing", {
                id,
                first_name,
                loggedIn,
                city,
                State,
                zipCode,
                privacy,
                membership_role,
                admin_role,
              });
            });
          });
        } else {
          let message = "The passwords do not match each other";
          res.render("register_service", { message, loggedIn });
        }
      }
    });
  }
};

module.exports = {
  initialLanding: (req, res) => {
    initialLanding("landing", req, res);
  },

  registerMember: (req, res) => {
    registerMember("/loginMember", req, res);
  },
  loginMember: (req, res, next) => {
    loginMember("/finalLandingMember/", req, res, next);
  },
  finalLandingMember: (req, res) => {
    // siteStats("/finalLandingMember/", req, res);
    finalLandingMember("final-landing", req, res);
  },
  logoutMember: (req, res) => {
    logoutMember("/", req, res);
  },

  renderStudentRegister: (req, res) => {
    renderRegister("register_student", req, res);
  },
  registerStudent: (req, res) => {
    studentRegister("/finalLandingStudent/", req, res);
  },
  finalLandingStudent: (req, res) => {
    finalLandingStudent("member-challenge", req, res);
  },
  logoutStudent: (req, res) => {
    logoutStudent("/", req, res);
  },
  renderRegisterUser: (req, res) => {
    renderRegisterUser("register", req, res);
  },
  registerUser: (req, res) => {
    registerUser("/finalLanding/", req, res);
  },
  renderLoginUser: (req, res) => {
    renderLoginUser("login", req, res);
  },
  loginUser: (req, res) => {
    loginAdmin("/finalLandingUser/", req, res);
  },
  finalLandingUser: (req, res) => {
    adminLandingPage("final-landing", req, res);
  },
  userRenderRegisterMember: (req, res) => {
    userRenderRegisterMember("register_member", req, res);
  },
  userRegisterMember: (req, res) => {
    userRegisterMember("final-landing", req, res);
  },
  logout: (req, res) => {
    adminLogout("/", req, res);
  },
  renderRegisterService: (req, res) => {
    renderRegister("register_service", req, res);
  },
  registerService: (req, res) => {
    registerService("final-landing", req, res);
  },
  renderRegisterDream: (req, res) => {
    renderRegisterDream("register_dream", req, res);
  },
  registerDream: (req, res) => {
    registerDream("final-landing", req, res);
  },
};
