const projectHelpers = require("./projectHelper");

module.exports = {

  renderRegisterProject: function (req, res) {
    projectHelpers.renderRegisterProject(req, res);
  },
  registerProject: function (req, res) {
    projectHelpers.registerProject(req, res);
  },

  /////////////////////////////////////
  /////// Dreamweaver AZ Dreams ///////
  /////////////////////////////////////

  renderSecureArizonaDreamsDatabase: function (req, res) {
    projectHelpers.arizonaDreams(req, res);
  },

  /////////////////////////////////////
  ////// Dreamweaver AZ Projects //////
  /////////////////////////////////////

  renderProjectAzPhoenix: function (req, res) {
    res.render("triage-project-az-phoenix");
  },
  renderSecureProjectAzPhoenix: function (req, res) {
    projectHelpers.secureProjectAzPhoenix(req, res);
  },
  
  renderProjectAzTucson: function (req, res) {
    res.render("triage-project-az-tucson");
  },
  renderSecureProjectAzTucson: function (req, res) {
    projectHelpers.secureProjectAzTucson(req, res);
  },
  
  renderSecureArizonaServicesDatabase: function (req, res) {
    projectHelpers.arizonaServices(req, res);
  },
  renderSecureArizonaFoodCenters: function (req, res) {
    projectHelpers.arizonaFoodCenters(req, res);
  },
  renderSecureArizonaFoodAssistance: function (req, res) {
    projectHelpers.arizonaFoodAssistance(req, res);
  },
  renderSecureArizonaShelters: function (req, res) {
    projectHelpers.arizonaShelters(req, res);
  },
  renderSecureArizonaTransitionalHousing: function (req, res) {
    projectHelpers.arizonaTransitionalHousing(req, res);
  },
  renderSecureArizonaClothing: function (req, res) {
    projectHelpers.arizonaClothing(req, res);
  },
  renderSecureArizonaVeteransClinics: function (req, res) {
    projectHelpers.arizonaVeteransClinics(req, res);
  },
  renderSecureArizonaBehavioralHealthClinics: function (req, res) {
    projectHelpers.arizonaBehavioralHealthClinics(req, res);
  },
  renderSecureArizonaHealthcareClinics: function (req, res) {
    projectHelpers.arizonaHealthcareClinics(req, res);
  },
  renderSecureArizonaPeerRunOrganizations: function (req, res) {
    projectHelpers.arizonaPeerRunOrganizations(req, res);
  },
  renderSecureArizonaPeerTrainingCenters: function (req, res) {
    projectHelpers.arizonaPeerTrainingCenters(req, res);
  },


};
