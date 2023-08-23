const Member = require("../../db/models/Member")
const User = require("../../db/models/User")
const Vendor = require("../../db/models/Vendor")
const Project = require("../../db/models/Project")
const seedProjects = require("../../db/data/seedProjects")
const seedMembers = require("../../db/data/seedMembers")
const seedUsers = require("../../db/data/seedUsers")
const seedVendors = require("../../db/data/seedVendors")
const bcrypt = require("bcryptjs")

module.exports = {
  install: (req, res) => {
    res.render("install");
  },
  seedProjectDatabase: (req, res) => {
    const projectSeeds = seedProjects.map(Project => {
      Project.email
      return Project
    })
    Project.create(projectSeeds, async (err, data) => {
      if (err) {
        console.log("Associated Seeds Error", err)
      } else {
        for (let i = 0; i < data.length; i++) {
          let password = "password"
          let salt = await bcrypt.genSalt(10);
              let hashedPassword = await bcrypt.hash(password, salt);
          Project.findOneAndUpdate({ email: data[i].email }, { $set: { password: hashedPassword} }, { new: true }, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              return
            }
          })
        }
        res.send("Project DB seeded.")
      }
    })
  },
  viewProjectDatabase: (req, res) => {
    Project.find().populate("email").exec((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },
  seedMemberDatabase: (req, res) => {
    const memberSeeds = seedMembers.map(member => {
      member.email
      return member
    })
    Member.create(memberSeeds, async (err, data) => {
      if (err) {
        console.log("Associated Seeds Error", err)
      } else {
        for (let i = 0; i < data.length; i++) {
          let password = "password"
          let salt = await bcrypt.genSalt(10);
              let hashedPassword = await bcrypt.hash(password, salt);
          Member.findOneAndUpdate({ _id: data[i]._id }, { $set: { password: hashedPassword} }, { new: true }, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              return
            }
          })
        }
        res.send("Member DB seeded.")
      }
    })
  },
  viewMemberDatabase: (req, res) => {
    Member.find().populate("email").exec((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },
  seedUserDatabase: (req, res) => {
    const userSeeds = seedUsers.map(user => {
      user.email
      return user
    });
    User.create(userSeeds, async (err, data) => {
      if (err) {
        console.log("Associated Seeds Error", err)
      } else {
        for (let i = 0; i < data.length; i++) {
          let password = "password"
          let salt = await bcrypt.genSalt(10);
              let hashedPassword = await bcrypt.hash(password, salt);
          User.findOneAndUpdate({ email: data[i].email }, { $set: { password: hashedPassword} }, { new: true }, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              return
            }
          })
        }
        res.send("Admin DB seeded.")
      }
    })
  },
  viewUserDatabase: (req, res) => {
    User.find().populate("email").exec((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },
  seedVendorDatabase: (req, res) => {
    let associatedSeeds = seedVendors.map( vendor => {
      vendor.organization_name
      return vendor
    });

    Vendor.create(associatedSeeds, async (err, data) => {
      if (err) {
        console.log("Associated Seeds Error", err)
      } else {
        for (let i = 0; i < data.length; i++) {
          let password = "password"
          let salt = await bcrypt.genSalt(10);
              let hashedPassword = await bcrypt.hash(password, salt);
          Vendor.findOneAndUpdate({ _id: data[i]._id }, { $set: { password: hashedPassword} }, { new: true }, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              return
            }
          })
        }
        res.send("Vendor DB seeded.")
      }
    })
  },
  viewVendorDatabase: (req, res) => {
    Vendor.find().populate("org_email").exec((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },
}