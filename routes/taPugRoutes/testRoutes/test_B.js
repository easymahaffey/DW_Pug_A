const testControllers = require("../../controllers/controller/testController")
// const router = require("express").Router()
// const bcrypt = require("bcryptjs")
// const Member = require("../../db/models/Member")
// const User = require("../../db/models/User")

router.route("/")
    .get(testControllers.landing)
    .post(testControllers.register)

router.route("/login")
    .get(testControllers.displayLogin)
    .post(testControllers.login)

router.route("/logout")
    .post(testControllers.logout)

router.route("/:_id")
    .get(testControllers.appLanding)
    .post(testControllers.addContact)

router.route("/:field/:subfield/up[date/:_id")
    .post(testControllers.updateContact)

router.route("/delete/:_id")
    .post(testControllers.deleteContact)

module.exports = router