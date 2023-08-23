const router = require("express").Router();
const project = require("../../controllers/ta_PugControllers/appControllers/projectControllers");
const { ensureAuthenticated } = require('../../auth/auth');


router
  .route("/registerProject/:id")
  .get(ensureAuthenticated,project.renderRegisterProject)
  .post(ensureAuthenticated,project.registerProject);

  /////////////////////////////////////
  ///////// TriAge AZ Projects ////////
  /////////////////////////////////////

router
  .route("/triage-project-az-phoenix")
  .get(project.renderProjectAzPhoenix);
router
  .route("/triage-project-az-phoenix/:id")
  .get(ensureAuthenticated,project.renderSecureProjectAzPhoenix);
router
  .route("/triage-project-az-phoenix/site-manager/:id")
  .get(ensureAuthenticated,project.renderSecureProjectAzPhoenix);

router
  .route("/triage-project-az-tucson")
  .get(project.renderProjectAzTucson);
router
  .route("/triage-project-az-tucson/:id")
  .get(ensureAuthenticated,project.renderSecureProjectAzTucson);
router
  .route("/triage-project-az-tucson/site-manager/:id")
  .get(ensureAuthenticated,project.renderSecureProjectAzTucson);

  /////////////////////////////////////
  /////// Dreamweaver AZ Dreams ///////
  /////////////////////////////////////

  router
  .route("/arizonaDreams/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaDreamsDatabase);

  /////////////////////////////////////
  ////// Dreamweaver AZ Services //////
  /////////////////////////////////////

router
  .route("/arizonaServices/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaServicesDatabase);
router
  .route("/arizonaServices/food-centers/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaFoodCenters);
router
  .route("/arizonaServices/food-assistance/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaFoodAssistance);
router
  .route("/arizonaServices/shelters/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaShelters);
router
  .route("/arizonaServices/transitional-housing/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaTransitionalHousing);
router
router
  .route("/arizonaServices/clothing/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaClothing);
router
  .route("/arizonaServices/veterans-clinics/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaVeteransClinics);
router
  .route("/arizonaServices/behavioral-health-clinics/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaBehavioralHealthClinics);
router
  .route("/arizonaServices/healthcare-clinics/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaHealthcareClinics);
router
  .route("/arizonaServices/peer-run-organizations/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaPeerRunOrganizations);
router
  .route("/arizonaServices/peer-training-centers/:id")
  .get(ensureAuthenticated,project.renderSecureArizonaPeerTrainingCenters);

module.exports = router;