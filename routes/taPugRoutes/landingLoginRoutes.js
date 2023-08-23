const router = require("express").Router();
const landingLayout = require("../../controllers/ta_PugControllers/appControllers/landingLoginControllers");
const { ensureAuthenticated } = require('../../auth/auth');

router
  .route("/")
  .get(landingLayout.initialLanding)
router
  .route('/test-authenticate')
  .get(landingLayout.failedAuth);

router
  .route("/registerMember")
  .get(landingLayout.renderRegisterMember)
  .post(landingLayout.registerMember);
router
  .route("/loginMember")
  .get(landingLayout.renderLoginMember)
  .post(landingLayout.loginMember);
router
  .route("/finalLandingMember/:id")
  .get(ensureAuthenticated, landingLayout.renderFinalLandingMember);
router
  .route("/logoutMember/:id")
  .get(landingLayout.logoutMember)

router
  .route("/registerStudent/:id")
  .get(ensureAuthenticated, landingLayout.renderStudentRegister)
  .post(ensureAuthenticated, landingLayout.registerStudent);
router
  .route("/finalLandingStudent/:id")
  .get(ensureAuthenticated, landingLayout.renderFinalLandingStudent);
router
  .route("/logoutStudent/:id")
  .get(landingLayout.logoutStudent)

router
  .route("/registerUser/:id")
  .get(ensureAuthenticated, landingLayout.renderUserRegister)
  .post(ensureAuthenticated, landingLayout.registerUser);
router
  .route("/login/:id")
  .get(ensureAuthenticated, landingLayout.renderLogin)
  .post(ensureAuthenticated, landingLayout.loginUser);
router
  .route("/finalLandingUser/:id")
  .get(ensureAuthenticated, landingLayout.renderFinalLandingUser)
router
  .route("/userRegisterMember/:id")
  .get(landingLayout.userRenderRegisterMember)
  .post(landingLayout.userRegisterMember);
router
  .route("/logout/:id")
  .get(landingLayout.logoutUser);

router
  .route("/registerService/:id")
  .get(ensureAuthenticated, landingLayout.renderRegisterService)
  .post(ensureAuthenticated, landingLayout.registerService);
router
  .route("/registerDream/:id")
  .get(ensureAuthenticated, landingLayout.renderRegisterDream)
  .post(ensureAuthenticated, landingLayout.registerDream);

module.exports = router;
