const testControllers = require("../../../controllers/ta_PugControllers/testControllers/testController")
const router = require("express").Router()

router.route("/")
    .get(testControllers.landedOnSite)
    
router.route("/register_member")
    .get(testControllers.displayRegister)
    .post(testControllers.registerMember)
    
router.route("/login_member")
    .get(testControllers.displayLogin)
    .post(testControllers.loginMember)

router.route("/logout")
    .post(testControllers.logout)

router.route("/:_id")
    .get(testControllers.appLanding)
    .post(testControllers.addContact)

// router.route("/:field/:subfield/up[date/:_id")
//     .post(testControllers.updateContact)

router.route("/delete/:_id")
    .post(testControllers.deleteContact)

module.exports = router