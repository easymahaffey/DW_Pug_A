const router = require("express").Router();

const userAccounts = require("../../controllers/ta_PugControllers/appControllers/userAccountControllers");
const { ensureAuthenticated } = require('../../auth/auth');

/// Admin ///
router
  .route("/myProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfile);
router
  .route("/myProfileSettings/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettings);
router
  .route("/updateMyProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMyProfileSettings);
router
  .route("/updateMyProfileDB/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettingsDB)
  .post(ensureAuthenticated, userAccounts.updateMyProfileSettingsDB);
router
  .route("/updateMyPassword/:id")
  .get(ensureAuthenticated, userAccounts.renderMyProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMyPassword);

/// Admin/Member Area ///
router
  .route("/userMemberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserMemberDatabase)
router
  .route("/userUpdateMemberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserMemberDatabase)
  .post(ensureAuthenticated, userAccounts.userUpdateMemberDatabase);
router
  .route("/userDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserDatabase)
  .post(ensureAuthenticated, userAccounts.updateUserDatabase);

  /// Admin Vendor Area ///
router
  .route("/userVendorDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserVendorDatabase)
router
  .route("/userUpdateVendorDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderUserVendorDatabase)
  .post(ensureAuthenticated, userAccounts.userUpdateVendorDatabase);

/// Members ///

router
  .route("/memberProfilePublic/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfilePublic);
router
  .route("/updateMemberProfilePublic/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfilePublic)
  .post(ensureAuthenticated, userAccounts.updateMemberProfilePublic);
router
  .route("/memberProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfile);
router
  .route("/memberProfileSettings/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings);
router
  .route("/updateMemberProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMemberProfileSettings);
router
  .route("/updateMemberProfileWall/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileWall)
  .post(ensureAuthenticated, userAccounts.updateMemberProfileWall);
router
  .route("/updateMemberPassword/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateMemberPassword);
router
  .route("/deleteMember/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettings)
  .post(ensureAuthenticated, userAccounts.deleteMember);

/// Dreams ///
router
  .route("/dreamProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamProfile);
router
  .route("/dreamProfileSettings/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamProfileSettings);
router
  .route("/updateDreamProfile/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateDreamProfileSettings);
router
  .route("/updateDreamPassword/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamProfileSettings)
  .post(ensureAuthenticated, userAccounts.updateDreamPassword);
router
  .route("/deleteDream/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamProfileSettings)
  .post(ensureAuthenticated, userAccounts.deleteDream);

/// Member Database ///
router
  .route("/memberProfileSettingsDB/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettingsDB);
router
  .route("/updateMemberProfileDB/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberProfileSettingsDB)
  .post(ensureAuthenticated, userAccounts.updateMemberProfileSettingsDB);
router
  .route("/memberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberDatabase)
  .post(ensureAuthenticated, userAccounts.updateMemberDatabase);
router
  .route("/memberDatabasePublic/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberDatabasePublic)
  .post(ensureAuthenticated, userAccounts.updateMemberDatabasePublic);
router
  .route("/memberDatabaseAZ/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberDatabaseAZ)
;
/// Deletes From Database ///
router
  .route("/updateMemberDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderMemberDatabase)
  .post(ensureAuthenticated, userAccounts.updateMemberDatabase);

  /// Dream Database ///
router
  .route("/dreamSettingsDB/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamSettingsDB);
router
  .route("/updateDreamSettingsDB/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamSettingsDB)
  .post(ensureAuthenticated, userAccounts.updateDreamSettingsDB);
router
  .route("/dreamDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamDatabase)
  .post(ensureAuthenticated, userAccounts.updateDreamDatabase);
router
  .route("/dreamDatabasePublic/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamDatabasePublic)
  .post(ensureAuthenticated, userAccounts.updateDreamDatabasePublic);
router
  .route("/dreamDatabaseForecast/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamDatabaseForecast)
  .post(ensureAuthenticated, userAccounts.updateDreamDatabaseForecast);
router
  .route("/dreamDatabaseForecastPublic/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamDatabaseForecastPublic)
  .post(ensureAuthenticated, userAccounts.updateDreamDatabaseForecastPublic);
/// Deletes From Database ///
router
  .route("/deleteDBDream/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamDatabase)
  .post(ensureAuthenticated, userAccounts.deleteDBDream);
/// Forecast For Database ///
router
  .route("/dream-forecast/:id")
  .get(ensureAuthenticated, userAccounts.renderDreamDatabase)
  .post(ensureAuthenticated, userAccounts.deleteDBDream);

/// Students ///
router
  .route("/studentAnswers/:id")
  .get(ensureAuthenticated, userAccounts.renderStudentAnswers);
router
  .route("/updateStudentAnswer/:id")
  .get(ensureAuthenticated, userAccounts.renderStudentAnswers)
  .post(ensureAuthenticated, userAccounts.updateStudentAnswer);
router
  .route("/deleteStudentAnswers/:id")
  .get(ensureAuthenticated, userAccounts.deleteStudentAnswers)
  .post(ensureAuthenticated, userAccounts.deleteStudentAnswers);

/// Vendor Routes
router
.route("/vendorProfileSettingsDB/:id")
  .get(ensureAuthenticated, userAccounts.renderVendorProfileSettingsDB);
router
.route("/updateVendorProfileDB/:id")
.get(ensureAuthenticated, userAccounts.renderVendorProfileSettingsDB)
.post(ensureAuthenticated, userAccounts.updateVendorProfileSettingsDB);
router
  .route("/vendorDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderVendorDatabase)
/// Deletes Vendor
router
  .route("/updateVendorDatabase/:id")
  .get(ensureAuthenticated, userAccounts.renderVendorDatabase)
  .post(ensureAuthenticated, userAccounts.updateVendorDatabase);

module.exports = router;