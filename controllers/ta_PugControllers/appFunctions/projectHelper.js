const User = require("../../../db/models/ta_PugModels/User");
const Member = require("../../../db/models/ta_PugModels/Member");
const Project = require("../../../db/models/ta_PugModels/Project");
const Vendor = require("../../../db/models/ta_PugModels/Vendor");
const Dream = require("../../../db/models/ta_PugModels/Dream");
const bcrypt = require("bcryptjs");

module.exports = {
  renderRegisterProject: (req, res) => {
    let user_id = req.params.id;
    if (user_id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    }
    User.findById({ _id: user_id }, (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        id = data.id;
        let name = data.name;
        let loggedIn = data.loggedIn;
        let userLevel = data.userLevel;
        res.render("register_project", { id, name, loggedIn, userLevel });
      } else {
        let message =
          "You are not logged in as an admin user. Please login as a admin user to register the Project.";
        res.render("login", { message });
      }
    });
  },
  registerProject: (req, res) => {
    let user_id = req.params.id;
    if (user_id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    } else {
      User.findById({ _id: user_id }, (err, userData) => {
        if (err) {
          console.log(err);
        }
        if (userData) {
          let {
            user_id,
            project_name,
            password1,
            password2,
            site_manager_first_name,
            site_manager_last_name,
            site_manager_member_id,
            site_manager_membership_role,
            alt_site_manager_first_name,
            alt_site_manager_last_name,
            alt_site_manager_member_id,
            alt_site_manager_membership_role,
            local_admin_first_name,
            local_admin_last_name,
            local_admin_member_id,
            local_admin_membership_role,
            alt_local_admin_first_name,
            alt_local_admin_last_name,
            alt_local_admin_member_id,
            alt_local_admin_membership_role,
            peer_support_first_name,
            peer_support_member_id,
            peer_support_membership_role,
            alt_peer_support_first_name,
            alt_peer_support_member_id,
            alt_peer_support_membership_role,
            project_start_date,
            email,
            phone,
            extension,
            fax,
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
            partners,
            events,
          } = req.body;
          if (password1 === password2) {
            Project.find({}, async (err, data) => {
              if (err) {
                console.log("VENDOR FIND ", err);
              }
              let password = password1;
              let salt = await bcrypt.genSalt(10);
              let hashedPassword = await bcrypt.hash(password, salt);
              password = hashedPassword;
              let project = new Project({
                user_id,
                project_name,
                site_manager_first_name,
                site_manager_last_name,
                site_manager_member_id,
                site_manager_membership_role,
                alt_site_manager_first_name,
                alt_site_manager_last_name,
                alt_site_manager_member_id,
                alt_site_manager_membership_role,
                local_admin_first_name,
                local_admin_last_name,
                local_admin_member_id,
                local_admin_membership_role,
                alt_local_admin_first_name,
                alt_local_admin_last_name,
                alt_local_admin_member_id,
                alt_local_admin_membership_role,
                peer_support_first_name,
                peer_support_member_id,
                peer_support_membership_role,
                alt_peer_support_first_name,
                alt_peer_support_member_id,
                alt_peer_support_membership_role,
                project_start_date,
                email,
                phone,
                extension,
                fax,
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
                partners,
                events,
              });
              project.save((err, projectData) => {
                if (err) {
                  console.log("PROJECT SAVE ", err);
                }
                let id = user_id;
                let name = userData.name;
                let loggedIn = userData.loggedIn;
                let userLevel = userData.userLevel;
                res.render("final-landing", {
                  id,
                  name,
                  loggedIn,
                  userLevel,
                });
              });
            });
          } else {
            let message = "The passwords do not match each other";
            res.render("register_Project", { message, loggedIn });
          }
        }
      });
    }
  },

  /////////////////////////////////////
  ///////// Dream AZ Projects ////////
  /////////////////////////////////////

  secureProjectAzPhoenix: (req, res) => {
    let id = req.params.id;
    if (id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    } else {
      Member.findById({ _id: id }, (err, memberData) => {
        if (err) {
          console.log(err);
        }
        if (memberData == null) {
          let id = req.params.id;
          User.findById({ _id: id }, (err, userData) => {
            if (err) {
              console.log(err);
            }
            let {
              _id,
              user_id,
              loggedIn,
              current_project,
              name,
              city,
              state,
              zipcode,
              userLevel,
              privacy,
            } = userData;
            let id = _id;
            Project.findOne(
              // { project_name: current_project },
              { project_name: "Dreamweaver Phoenix" },
              (err, projectData) => {
                if (err) {
                  console.log(err);
                }
                if (!projectData) {
                  let message = "This project is not registered.";
                  res.json({ message: message });
                }
                let {
                  project_name,
                  site_manager_first_name,
                  site_manager_last_name,
                  site_manager_member_id,
                  site_manager_membership_role,
                  alt_site_manager_first_name,
                  alt_site_manager_last_name,
                  alt_site_manager_member_id,
                  alt_site_manager_membership_role,
                  local_admin_first_name,
                  local_admin_last_name,
                  local_admin_member_id,
                  local_admin_membership_role,
                  alt_local_admin_first_name,
                  alt_local_admin_last_name,
                  alt_local_admin_member_id,
                  alt_local_admin_membership_role,
                  peer_support_first_nameEasy,
                  peer_support_member_id,
                  peer_support_membership_role,
                  alt_peer_support_first_name,
                  alt_peer_support_member_id,
                  alt_peer_support_membership_role,
                  project_Start_date,
                  project_email,
                  project_phone,
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
                  partners = projectData[0].partners,
                  events = projectData[0].events,
                } = projectData;
                let project_address1 = projectData.address1;
                let project_address2 = projectData.address2;
                let project_city = projectData.city;
                let project_state = projectData.State;
                let project_zipCode = projectData.zipCode;
                res.render("triage-project-az-phoenix", {
                  /// Project Data ///
                  project_name,
                  site_manager_first_name,
                  site_manager_last_name,
                  site_manager_member_id,
                  site_manager_membership_role,
                  alt_site_manager_first_name,
                  alt_site_manager_last_name,
                  alt_site_manager_member_id,
                  alt_site_manager_membership_role,
                  local_admin_first_name,
                  local_admin_last_name,
                  local_admin_member_id,
                  local_admin_membership_role,
                  alt_local_admin_first_name,
                  alt_local_admin_last_name,
                  alt_local_admin_member_id,
                  alt_local_admin_membership_role,
                  peer_support_first_nameEasy,
                  peer_support_member_id,
                  peer_support_membership_role,
                  alt_peer_support_first_name,
                  alt_peer_support_member_id,
                  alt_peer_support_membership_role,
                  project_Start_date,
                  project_email,
                  project_phone,
                  project_address1,
                  project_address2,
                  project_city,
                  project_state,
                  project_zipCode,
                  mail_address1,
                  mail_address2,
                  mail_city,
                  mail_state,
                  mail_zipCode,
                  partners,
                  events,
                  /// User data ///
                  id,
                  user_id,
                  loggedIn,
                  project_name,
                  name,
                  city,
                  state,
                  zipcode,
                  userLevel,
                  privacy,
                });
              }
            );
          });
        } else {
          let {
            current_project,
            loggedIn,
            city,
            State,
            zipCode,
            date_member_joined,
            membership_role,
            admin_role,
            member_student_status,
            _id,
            first_name,
            last_name,
          } = memberData;
          let student_role = memberData.member_student_role;
          let id = _id;
          Project.findOne(
            { project_name: "Dreamweaver Phoenix" },
            // { project_name: current_project },
            (err, projectData) => {
              if (err) {
                console.log(err);
              }
              if (!projectData) {
                let message = "This project is not registered.";
                res.json({ message: message });
              }
              let = {
                project_name,
                site_manager_first_name,
                site_manager_last_name,
                site_manager_member_id,
                site_manager_member_title,
                site_manager_membership_role,
                alt_site_manager_first_name,
                alt_site_manager_last_name,
                alt_site_manager_member_id,
                alt_site_manager_membership_role,
                local_admin_first_name,
                local_admin_last_name,
                local_admin_member_id,
                local_admin_membership_role,
                alt_local_admin_first_name,
                alt_local_admin_last_name,
                alt_local_admin_member_id,
                alt_local_admin_membership_role,
                peer_support_first_nameEasy,
                peer_support_member_id,
                peer_support_membership_role,
                alt_peer_support_first_name,
                alt_peer_support_member_id,
                alt_peer_support_membership_role,
                project_start_date,
                project_email,
                project_phone,
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
                partners = projectData[0].partners,
                events = projectData[0].events,
              } = projectData;

              let project_address1 = projectData.address1;
              let project_address2 = projectData.address2;
              let project_city = projectData.city;
              let project_state = projectData.State;
              let project_zipCode = projectData.zipCode;
              res.render("triage-project-az-phoenix", {
                /// Project Data ///
                project_name,
                site_manager_first_name,
                site_manager_last_name,
                site_manager_member_id,
                site_manager_member_title,
                site_manager_membership_role,
                alt_site_manager_first_name,
                alt_site_manager_last_name,
                alt_site_manager_member_id,
                alt_site_manager_membership_role,
                local_admin_first_name,
                local_admin_last_name,
                local_admin_member_id,
                local_admin_membership_role,
                alt_local_admin_first_name,
                alt_local_admin_last_name,
                alt_local_admin_member_id,
                alt_local_admin_membership_role,
                peer_support_first_nameEasy,
                peer_support_member_id,
                peer_support_membership_role,
                alt_peer_support_first_name,
                alt_peer_support_member_id,
                alt_peer_support_membership_role,
                project_start_date,
                project_email,
                project_phone,
                project_address1,
                project_address2,
                project_city,
                project_state,
                project_zipCode,
                mail_address1,
                mail_address2,
                mail_city,
                mail_state,
                mail_zipCode,
                partners,
                events,
                /// Member data ///
                city,
                State,
                zipCode,
                date_member_joined,
                first_name,
                last_name,
                membership_role,
                student_role,
                admin_role,
                member_student_status,
                current_project,
                loggedIn,
                id,
              });
            }
          );
        }
      });
    }
  },
  secureProjectAzTucson: (req, res) => {
    let id = req.params.id;
    if (id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    } else {
      Member.findById({ _id: id }, (err, memberData) => {
        if (err) {
          console.log(err);
        }
        if (memberData == null) {
          let id = req.params.id;
          console.log("PROJECT HELPER Member Data ", memberData)
          User.findById({ _id: id }, (err, userData) => {
            if (err) {
              console.log(err);
            }
            let {
              _id,
              user_id,
              loggedIn,
              current_project,
              name,
              city,
              state,
              zipcode,
              userLevel,
              privacy,
            } = userData;
            let id = _id;
            Project.findOne(
              // { project_name: current_project },
              { project_name: "Dreamweaver Tucson" },
              (err, projectData) => {
                if (err) {
                  console.log(err);
                }
                if (!projectData) {
                  let message = "This project is not registered.";
                  res.json({ message: message });
                }
                let {
                  project_name,
                  site_manager_first_name,
                  site_manager_last_name,
                  site_manager_member_id,
                  site_manager_membership_role,
                  alt_site_manager_first_name,
                  alt_site_manager_last_name,
                  alt_site_manager_member_id,
                  alt_site_manager_membership_role,
                  local_admin_first_name,
                  local_admin_last_name,
                  local_admin_member_id,
                  local_admin_membership_role,
                  alt_local_admin_first_name,
                  alt_local_admin_last_name,
                  alt_local_admin_member_id,
                  alt_local_admin_membership_role,
                  peer_support_first_nameEasy,
                  peer_support_member_id,
                  peer_support_membership_role,
                  alt_peer_support_first_name,
                  alt_peer_support_member_id,
                  alt_peer_support_membership_role,
                  project_Start_date,
                  project_email,
                  project_phone,
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
                  partners = projectData[0].partners,
                  events = projectData[0].events,
                } = projectData;
                let project_address1 = projectData.address1;
                let project_address2 = projectData.address2;
                let project_city = projectData.city;
                let project_state = projectData.State;
                let project_zipCode = projectData.zipCode;
                res.render("triage-project-az-tucson", {
                  /// Project Data ///
                  project_name,
                  site_manager_first_name,
                  site_manager_last_name,
                  site_manager_member_id,
                  site_manager_membership_role,
                  alt_site_manager_first_name,
                  alt_site_manager_last_name,
                  alt_site_manager_member_id,
                  alt_site_manager_membership_role,
                  local_admin_first_name,
                  local_admin_last_name,
                  local_admin_member_id,
                  local_admin_membership_role,
                  alt_local_admin_first_name,
                  alt_local_admin_last_name,
                  alt_local_admin_member_id,
                  alt_local_admin_membership_role,
                  peer_support_first_nameEasy,
                  peer_support_member_id,
                  peer_support_membership_role,
                  alt_peer_support_first_name,
                  alt_peer_support_member_id,
                  alt_peer_support_membership_role,
                  project_Start_date,
                  project_email,
                  project_phone,
                  project_address1,
                  project_address2,
                  project_city,
                  project_state,
                  project_zipCode,
                  mail_address1,
                  mail_address2,
                  mail_city,
                  mail_state,
                  mail_zipCode,
                  partners,
                  events,
                  /// User data ///
                  id,
                  user_id,
                  loggedIn,
                  project_name,
                  name,
                  city,
                  state,
                  zipcode,
                  userLevel,
                  privacy,
                });
              }
            );
          });
        } else {
          let {
            current_project,
            loggedIn,
            city,
            State,
            zipCode,
            date_member_joined,
            membership_role,
            admin_role,
            member_student_status,
            _id,
            first_name,
            last_name,
          } = memberData;
          let student_role = memberData.member_student_role
          let id = _id;
          Project.findOne(
            { project_name: "Dreamweaver Tucson" },
            // { project_name: current_project },
            (err, projectData) => {
              if (err) {
                console.log(err);
              }
              if (!projectData) {
                let message = "This project is not registered.";
                res.json({ message: message });
              }
              let = {
                project_name,
                site_manager_first_name,
                site_manager_last_name,
                site_manager_member_id,
                site_manager_member_title,
                site_manager_membership_role,
                alt_site_manager_first_name,
                alt_site_manager_last_name,
                alt_site_manager_member_id,
                alt_site_manager_membership_role,
                local_admin_first_name,
                local_admin_last_name,
                local_admin_member_id,
                local_admin_membership_role,
                alt_local_admin_first_name,
                alt_local_admin_last_name,
                alt_local_admin_member_id,
                alt_local_admin_membership_role,
                peer_support_first_nameEasy,
                peer_support_member_id,
                peer_support_membership_role,
                alt_peer_support_first_name,
                alt_peer_support_member_id,
                alt_peer_support_membership_role,
                project_start_date,
                project_email,
                project_phone,
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
                partners = projectData[0].partners,
                events = projectData[0].events,
              } = projectData;

              let project_address1 = projectData.address1;
              let project_address2 = projectData.address2;
              let project_city = projectData.city;
              let project_state = projectData.State;
              let project_zipCode = projectData.zipCode;
              res.render("triage-project-az-tucson", {
                /// Project Data ///
                project_name,
                site_manager_first_name,
                site_manager_last_name,
                site_manager_member_id,
                site_manager_member_title,
                site_manager_membership_role,
                alt_site_manager_first_name,
                alt_site_manager_last_name,
                alt_site_manager_member_id,
                alt_site_manager_membership_role,
                local_admin_first_name,
                local_admin_last_name,
                local_admin_member_id,
                local_admin_membership_role,
                alt_local_admin_first_name,
                alt_local_admin_last_name,
                alt_local_admin_member_id,
                alt_local_admin_membership_role,
                peer_support_first_nameEasy,
                peer_support_member_id,
                peer_support_membership_role,
                alt_peer_support_first_name,
                alt_peer_support_member_id,
                alt_peer_support_membership_role,
                project_start_date,
                project_email,
                project_phone,
                project_address1,
                project_address2,
                project_city,
                project_state,
                project_zipCode,
                mail_address1,
                mail_address2,
                mail_city,
                mail_state,
                mail_zipCode,
                partners,
                events,
                /// Member data ///
                city,
                State,
                zipCode,
                date_member_joined,
                first_name,
                last_name,
                membership_role,
                student_role,
                admin_role,
                member_student_status,
                current_project,
                loggedIn,
                id,
              });
            }
          );
        }
      });
    }
  },
  secureProjectAzTucsonB: (req, res) => {
    let id = req.params.id;
    if (id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    } else {
      Member.findById({ _id: id }, (err, memberData) => {
        if (err) {
          console.log(err);
        }
        if (memberData == null) {
          let id = req.params.id;
          User.findById({ _id: id }, (err, userData) => {
            if (err) {
              console.log(err);
            }
            let {
              _id,
              loggedIn,
              current_project,
              name,
              city,
              state,
              zipcode,
              userLevel,
              privacy,
            } = userData;
            let id = _id;
            Project.findOne(
              { project_name: "Dreamweaver Tucson" },
              // { project_name: current_project },
              (err, projectData) => {
                if (err) {
                  console.log(err);
                }
                if (!projectData) {
                  let message = "This project is not registered.";
                  res.json({ message: message });
                }
                let = {
                  project_name,
                  site_manager_first_name,
                  site_manager_last_name,
                  site_manager_member_id,
                  site_manager_membership_role,
                  alt_site_manager_first_name,
                  alt_site_manager_last_name,
                  alt_site_manager_member_id,
                  alt_site_manager_membership_role,
                  local_admin_first_name,
                  local_admin_last_name,
                  local_admin_member_id,
                  local_admin_membership_role,
                  alt_local_admin_first_name,
                  alt_local_admin_last_name,
                  alt_local_admin_member_id,
                  alt_local_admin_membership_role,
                  peer_support_first_nameEasy,
                  peer_support_member_id,
                  peer_support_membership_role,
                  alt_peer_support_first_name,
                  alt_peer_support_member_id,
                  alt_peer_support_membership_role,
                  project_Start_date,
                  project_email,
                  project_phone,
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
                  partners = projectData[0].partners,
                  events = projectData[0].events,
                } = projectData;
              }
            );
            let project_address1 = projectData.address1;
            let project_address2 = projectData.address2;
            let project_city = projectData.city;
            let project_state = projectData.State;
            let project_zipCode = projectData.zipCode;
            res.render("triage-project-az-tucson", {
              /// Project Data ///
              project_name,
              site_manager_first_name,
              site_manager_last_name,
              site_manager_member_id,
              site_manager_membership_role,
              alt_site_manager_first_name,
              alt_site_manager_last_name,
              alt_site_manager_member_id,
              alt_site_manager_membership_role,
              local_admin_first_name,
              local_admin_last_name,
              local_admin_member_id,
              local_admin_membership_role,
              alt_local_admin_first_name,
              alt_local_admin_last_name,
              alt_local_admin_member_id,
              alt_local_admin_membership_role,
              peer_support_first_nameEasy,
              peer_support_member_id,
              peer_support_membership_role,
              alt_peer_support_first_name,
              alt_peer_support_member_id,
              alt_peer_support_membership_role,
              project_Start_date,
              project_email,
              project_phone,
              project_address1,
              project_address2,
              project_city,
              project_state,
              project_zipCode,
              mail_address1,
              mail_address2,
              mail_city,
              mail_state,
              mail_zipCode,
              partners,
              events,
              /// User data ///
              id,
              loggedIn,
              project_name,
              name,
              city,
              state,
              zipcode,
              userLevel,
              privacy,
            });
          });
        }
        let {
          current_project,
          loggedIn,
          city,
          State,
          zipCode,
          date_member_joined,
          membership_role,
          admin_role,
          member_student_status,
          _id,
          first_name,
          last_name,
        } = memberData;
        let student_role = memberData.member_student_role
        let id = _id;
        Project.findOne(
          { project_name: "Dreamweaver Tucson" },
          // { project_name: current_project },
          (err, projectData) => {
            if (err) {
              console.log(err);
            }
            if (!projectData) {
              let message = "This project is not registered.";
              res.json({ message: message });
            }
            let = {
              project_name,
              site_manager_first_name,
              site_manager_last_name,
              site_manager_member_id,
              site_manager_member_title,
              site_manager_membership_role,
              alt_site_manager_first_name,
              alt_site_manager_last_name,
              alt_site_manager_member_id,
              alt_site_manager_membership_role,
              local_admin_first_name,
              local_admin_last_name,
              local_admin_member_id,
              local_admin_membership_role,
              alt_local_admin_first_name,
              alt_local_admin_last_name,
              alt_local_admin_member_id,
              alt_local_admin_membership_role,
              peer_support_first_name,
              peer_support_member_id,
              peer_support_membership_role,
              alt_peer_support_first_name,
              alt_peer_support_member_id,
              alt_peer_support_membership_role,
              project_start_date,
              project_email,
              project_phone,
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
              partners = projectData[0].partners,
              events = projectData[0].events,
            } = projectData;

            let project_address1 = projectData.address1;
            let project_address2 = projectData.address2;
            let project_city = projectData.city;
            let project_state = projectData.State;
            let project_zipCode = projectData.zipCode;
            res.render("triage-project-az-tucson", {
              /// Project Data ///
              project_name,
              site_manager_first_name,
              site_manager_last_name,
              site_manager_member_id,
              site_manager_member_title,
              site_manager_membership_role,
              alt_site_manager_first_name,
              alt_site_manager_last_name,
              alt_site_manager_member_id,
              alt_site_manager_membership_role,
              local_admin_first_name,
              local_admin_last_name,
              local_admin_member_id,
              local_admin_membership_role,
              alt_local_admin_first_name,
              alt_local_admin_last_name,
              alt_local_admin_member_id,
              alt_local_admin_membership_role,
              peer_support_first_name,
              peer_support_member_id,
              peer_support_membership_role,
              alt_peer_support_first_name,
              alt_peer_support_member_id,
              alt_peer_support_membership_role,
              project_start_date,
              project_email,
              project_phone,
              project_address1,
              project_address2,
              project_city,
              project_state,
              project_zipCode,
              mail_address1,
              mail_address2,
              mail_city,
              mail_state,
              mail_zipCode,
              partners,
              events,
              /// Member data ///
              current_project,
              city,
              State,
              zipCode,
              date_member_joined,
              first_name,
              last_name,
              membership_role,
              student_role,
              admin_role,
              member_student_status,
              loggedIn,
              id,
            });
          }
        );
      });
    }
  },
  securePhoenixServiceDatabase_A: (req, res) => {
    /// Admin User not supported ATT ///
    let id = req.params.id;
    if (id === "undefined") {
      loggedIn = false;
      userLevel = "";
      membership_role = "";
      res.redirect("/");
    } else {
      Member.findById({ _id: id }, (err, memberData) => {
        if (err) {
          console.log(err);
        }
        /// User not supported ATT ///
        if (memberData == null) {
          let id = req.params.id;
          User.findById({ _id: id }, (err, userData) => {
            if (err) {
              console.log(err);
            };
            let {
              _id,
              loggedIn,
              current_project,
              name,
              city,
              state,
              zipcode,
              userLevel,
              privacy,
            } = userData;
            let id = _id;
            Project.findOne(
              { project_name: "TriAge Phoenix" },
              (err, projectData) => {
                if (err) {
                  console.log(err);
                }
                if (!projectData) {
                  let message = "This project is not registered.";
                  res.json({ message: message });
                }
                let = {
                  project_name,
                  site_manager_first_name,
                  site_manager_last_name,
                  site_manager_member_id,
                  site_manager_membership_role,
                  alt_site_manager_first_name,
                  alt_site_manager_last_name,
                  alt_site_manager_member_id,
                  alt_site_manager_membership_role,
                  local_admin_first_name,
                  local_admin_last_name,
                  local_admin_member_id,
                  local_admin_membership_role,
                  alt_local_admin_first_name,
                  alt_local_admin_last_name,
                  alt_local_admin_member_id,
                  alt_local_admin_membership_role,
                  peer_support_first_nameEasy,
                  peer_support_member_id,
                  peer_support_membership_role,
                  alt_peer_support_first_name,
                  alt_peer_support_member_id,
                  alt_peer_support_membership_role,
                  project_Start_date,
                  project_email,
                  project_phone,
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
                  partners = projectData[0].partners,
                  events = projectData[0].events,
                } = projectData;
              }
            );
            let project_address1 = projectData.address1;
            let project_address2 = projectData.address2;
            let project_city = projectData.city;
            let project_state = projectData.State;
            let project_zipCode = projectData.zipCode;
            res.render("triage-project-az-phoenix", {
              /// Project Data ///
              project_name,
              site_manager_first_name,
              site_manager_last_name,
              site_manager_member_id,
              site_manager_membership_role,
              alt_site_manager_first_name,
              alt_site_manager_last_name,
              alt_site_manager_member_id,
              alt_site_manager_membership_role,
              local_admin_first_name,
              local_admin_last_name,
              local_admin_member_id,
              local_admin_membership_role,
              alt_local_admin_first_name,
              alt_local_admin_last_name,
              alt_local_admin_member_id,
              alt_local_admin_membership_role,
              peer_support_first_nameEasy,
              peer_support_member_id,
              peer_support_membership_role,
              alt_peer_support_first_name,
              alt_peer_support_member_id,
              alt_peer_support_membership_role,
              project_Start_date,
              project_email,
              project_phone,
              project_address1,
              project_address2,
              project_city,
              project_state,
              project_zipCode,
              mail_address1,
              mail_address2,
              mail_city,
              mail_state,
              mail_zipCode,
              partners,
              events,
              /// User data ///
              id,
              loggedIn,
              project_name,
              name,
              city,
              state,
              zipcode,
              userLevel,
              privacy,
            });
          });
        }
        let {
          current_project,
          loggedIn,
          city,
          State,
          zipCode,
          date_member_joined,
          membership_role,
          admin_role,
          member_student_status,
          _id,
          first_name,
          last_name,
        } = memberData;
        let student_role = memberData.member_student_role
        let id = _id;
        Project.findOne(
          { project_name: current_project },
          (err, projectData) => {
            if (err) {
              console.log(err);
            }
            if (!projectData) {
              let message = "This project is not registered.";
              res.json({ message: message });
            }
            console.log("PROJECT DATA ", projectData);
            let = {
              project_name,
              site_manager_first_name,
              site_manager_last_name,
              site_manager_member_id,
              site_manager_member_title,
              site_manager_membership_role,
              alt_site_manager_first_name,
              alt_site_manager_last_name,
              alt_site_manager_member_id,
              alt_site_manager_membership_role,
              local_admin_first_name,
              local_admin_last_name,
              local_admin_member_id,
              local_admin_membership_role,
              alt_local_admin_first_name,
              alt_local_admin_last_name,
              alt_local_admin_member_id,
              alt_local_admin_membership_role,
              peer_support_first_nameEasy,
              peer_support_member_id,
              peer_support_membership_role,
              alt_peer_support_first_name,
              alt_peer_support_member_id,
              alt_peer_support_membership_role,
              project_start_date,
              project_email,
              project_phone,
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
              partners = projectData[0].partners,
              events = projectData[0].events,
            } = projectData;

            let project_address1 = projectData.address1;
            let project_address2 = projectData.address2;
            let project_city = projectData.city;
            let project_state = projectData.State;
            let project_zipCode = projectData.zipCode;
            res.render("triage-project-az-phoenix", {
              /// Project Data ///
              project_name,
              site_manager_first_name,
              site_manager_last_name,
              site_manager_member_id,
              site_manager_member_title,
              site_manager_membership_role,
              alt_site_manager_first_name,
              alt_site_manager_last_name,
              alt_site_manager_member_id,
              alt_site_manager_membership_role,
              local_admin_first_name,
              local_admin_last_name,
              local_admin_member_id,
              local_admin_membership_role,
              alt_local_admin_first_name,
              alt_local_admin_last_name,
              alt_local_admin_member_id,
              alt_local_admin_membership_role,
              peer_support_first_nameEasy,
              peer_support_member_id,
              peer_support_membership_role,
              alt_peer_support_first_name,
              alt_peer_support_member_id,
              alt_peer_support_membership_role,
              project_start_date,
              project_email,
              project_phone,
              project_address1,
              project_address2,
              project_city,
              project_state,
              project_zipCode,
              mail_address1,
              mail_address2,
              mail_city,
              mail_state,
              mail_zipCode,
              partners,
              events,
              /// Member data ///
              city,
              State,
              zipCode,
              date_member_joined,
              first_name,
              last_name,
              membership_role,
              student_role,
              admin_role,
              member_student_status,
              loggedIn,
              id,
            });
          }
        );
      });
    }
  },


  arizonaDreams: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let dbState = "AZ"
      let privacy = "Public"
      Dream.find({ State: dbState })
        .find({ privacy: "Public" })
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
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("dream-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            dbState,
            dreams: dreamData,
            message,
            privacy,
          });
        });
    });
  },

  arizonaServices: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorState = "AZ"
      Vendor.find({ State: vendorState  })
        // .sort({ city: -1 })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            State,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorState,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaFoodCenters: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Food Banks"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaFoodAssistance: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Food Stamps"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaShelters: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Shelter"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaTransitionalHousing: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Transitional Housing"
      Vendor.find({ service_category: "Transitional Housing" })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaClothing: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Community Clothing"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaVeteransClinics: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Veterans Healthcare"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaBehavioralHealthClinics: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Behavioral Health"
      Vendor.find({ service_type: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaHealthcareClinics: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Healthcare & Dental"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaPeerRunOrganizations: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Peer Run Org"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            state,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
  arizonaPeerTrainingCenters: (req, res) => {
    let id = req.params.id;
    let value = 0;
    let memberID = id;
    Member.findById({ _id: memberID }, (err, memberData) => {
      if (err) {
        console.log(err);
      }
      let vendorServiceCategory = "Peer Support Training"
      Vendor.find({ service_category: vendorServiceCategory })
        // .sort({ city: "asc" })
        // .limit(10)
        .exec((err, vendorData) => {
          if (err) {
            console.log(err);
            done(null, vendorData);
          }
          let {
            first_name,
            last_name,
            id,
            date_member_joined,
            loggedIn,
            time_as_member,
            member_email,
            phone,
            address1,
            address2,
            city,
            State,
            zipCode,
            privacy,
            date_of_birth,
            membership_status,
            membership_role,
            service_category,
          } = vendorData;
          /// reset id to req.params.id for passport/routes
          loggedIn = memberData.loggedIn;
          admin_role = memberData.admin_role;
          membership_role = memberData.membership_role;
          membership_status = memberData.membership_status;
          member_student_status = memberData.member_student_status;
          student_role = memberData.member_student_role;
          id = memberData.id;
          first_name = memberData.first_name;
          last_name = memberData.last_name;
          let message = "TESTING DATA OUTPUT";
          res.render("service-database", {
            id,
            memberID,
            first_name,
            last_name,
            loggedIn,
            admin_role,
            student_role,
            member_student_status,
            membership_role,
            membership_status,
            vendorServiceCategory,
            vendors: vendorData,
            message,
          });
        });
    });
  },
};
