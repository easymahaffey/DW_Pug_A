const siteNavigationHelpers = require("./siteNavigationHelper");

module.exports = {
  renderPhases: function (req, res) {
    res.render("landing_phases");
  },
  renderSecurePhases: function (req, res) {
    siteNavigationHelpers.securePhases(req, res);
  },
  renderSecureImage: function (req, res) {
    siteNavigationHelpers.secureImage(req, res);
  },
  renderSecurePhoenicia: function (req, res) {
    siteNavigationHelpers.securePhoenicia(req, res);
  },
  renderSecureTranscendence: function (req, res) {
    siteNavigationHelpers.secureTranscendence(req, res);
  },
  renderWhatAreDreams: function (req, res) {
    res.render("dream-what_are_dreams");
  },
  renderSecureWhatAreDreams: function (req, res) {
    siteNavigationHelpers.secureWhatAreDreams(req, res);
  },
  renderWorkgroupDeveloper: function (req, res) {
    res.render("dream-workgroup_developer");
  },
  renderSecureWorkgroupDeveloper: function (req, res) {
    siteNavigationHelpers.secureWorkgroupDeveloper(req, res);
  },
  renderResources: function (req, res) {
    res.render("dream-resources");
  },
  renderSecureResources: function (req, res) {
    siteNavigationHelpers.secureResources(req, res);
  },
  renderCompanyProfile: function (req, res) {
    res.render("company-profile");
  },
  renderSecureCompanyProfile: function (req, res) {
    siteNavigationHelpers.secureCompanyProfile(req, res);
  },
  renderUserSecureCompanyProfile: function (req, res) {
    siteNavigationHelpers.userSecureCompanyProfile(req, res);
  },
  renderCompanyFaq: function (req, res) {
    res.render("company-faq");
  },
  renderSecureCompanyFaq: function (req, res) {
    siteNavigationHelpers.secureCompanyFaq(req, res);
  },
  renderUserSecureCompanyFaq: function (req, res) {
    siteNavigationHelpers.userSecureCompanyFaq(req, res);
  },
  renderCompanyEvents: function (req, res) {
    res.render("company-events");
  },
  renderSecureCompanyEvents: function (req, res) {
    siteNavigationHelpers.secureCompanyEvents(req, res);
  },
  renderUserSecureCompanyEvents: function (req, res) {
    siteNavigationHelpers.userSecureCompanyEvents(req, res);
  },
  renderLocalNews: function (req, res) {
    res.render("local-news");
  },
  renderSecureLocalNews: function (req, res) {
    siteNavigationHelpers.secureLocalNews(req, res);
  },
  renderUserSecureLocalNews: function (req, res) {
    siteNavigationHelpers.userSecureLocalNews(req, res);
  },
  renderNationalNews: function (req, res) {
    res.render("national-news");
  },
  renderSecureNationalNews: function (req, res) {
    siteNavigationHelpers.secureNationalNews(req, res);
  },
  renderUserSecureNationalNews: function (req, res) {
    siteNavigationHelpers.userSecureNationalNews(req, res);
  },
  renderMemberProfile: function (req, res) {
    res.render("member-profile");
  },

  ///////// TriAge /////////
  
  renderSecureHelpYou: function (req, res) {
    siteNavigationHelpers.secureHelpYou(req, res);
  },
  renderSecureHelpOthers: function (req, res) {
    siteNavigationHelpers.secureHelpOthers(req, res);
  },

};
