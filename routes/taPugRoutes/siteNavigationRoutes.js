const router = require("express").Router();
const siteNavigation = require("../../controllers/ta_PugControllers/appControllers/siteNavigationControllers");
const { ensureAuthenticated } = require('../../auth/auth');

router
  .route("/phases")
  .get(siteNavigation.renderPhases);
router
  .route("/phases/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecurePhases);
router
  .route("/image/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureImage);
router
  .route("/phoenicia/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecurePhoenicia);
router
  .route("/transcendence/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureTranscendence);
router
  .route("/what_are_dreams")
  .get(siteNavigation.renderWhatAreDreams);
router
  .route("/what_are_dreams/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureWhatAreDreams);
router
  .route("/workgroup-developer")
  .get(siteNavigation.renderWorkgroupDeveloper);
router
  .route("/workgroup-developer/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureWorkgroupDeveloper);
router
  .route("/resources")
  .get(siteNavigation.renderResources);
router
  .route("/resources/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureResources);
router
  .route("/company-profile")
  .get(siteNavigation.renderCompanyProfile);
router
  .route("/company-profile/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureCompanyProfile);
router
  .route("/company-faq")
  .get(siteNavigation.renderCompanyFaq);
router
  .route("/company-faq/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureCompanyFaq);
router
  .route("/admin-faq/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureCompanyFaq);
router
  .route("/company-events")
  .get(siteNavigation.renderCompanyEvents);
router
  .route("/company-events/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureCompanyEvents);
router
  .route("/admin-company-events/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureCompanyEvents);
router
  .route("/local-news")
  .get(siteNavigation.renderLocalNews);
router
  .route("/local-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureLocalNews);
router
  .route("/admin-local-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureLocalNews);
router
  .route("/national-news")
  .get(siteNavigation.renderNationalNews);
router
  .route("/national-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureNationalNews);
router
  .route("/admin-national-news/:id")
  .get(ensureAuthenticated,siteNavigation.renderUserSecureNationalNews);
router
  .route("/member-profile/:id")
  .get(ensureAuthenticated, siteNavigation.renderMemberProfile);

  ///////// TriAge /////////

router
  .route("/triage-help-you/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureHelpYou);
router
  .route("/triage-help-others/:id")
  .get(ensureAuthenticated,siteNavigation.renderSecureHelpOthers);

module.exports = router;
