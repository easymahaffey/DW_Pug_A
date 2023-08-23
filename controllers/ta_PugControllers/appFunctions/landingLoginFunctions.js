const routeHelpers = require("./landingRouteHelper");

module.exports = {

  initialLanding: function (req, res) {
    routeHelpers.initialLanding(req, res);
    // res.render("landing");
  },
  failedAuth: function(req, res) {
    res.render("test-authenticate")
  },

  renderRegisterMember: function (req, res) {
    res.render("register_member");
  },
  registerMember: function (req, res) {
    routeHelpers.registerMember(req, res);
  },
  renderLoginMember: function (req, res) {
    res.render("login_member");
  },
  loginMember: function (req, res, next) {
    routeHelpers.loginMember(req, res, next);
  },
  renderFinalLandingMember: function (req, res) {
    routeHelpers.finalLandingMember(req, res);
  },
  logoutMember: function (req, res) {
    routeHelpers.logoutMember(req, res);
  },

  renderStudentRegister: function (req, res) {
    routeHelpers.renderStudentRegister(req, res);
  },
  registerStudent: function (req, res) {
    routeHelpers.registerStudent(req, res);
  },
  renderFinalLandingStudent: function (req, res) {
    routeHelpers.finalLandingStudent(req, res);
  },
  logoutStudent: function (req, res) {
    routeHelpers.logoutStudent(req, res);
  },

  renderUserRegister: function (req, res) {
    routeHelpers.renderRegisterUser(req, res);
  },
  registerUser: function (req, res) {
    routeHelpers.registerUser(req, res);
  },
  renderLogin: function (req, res) {
    routeHelpers.renderLoginUser(req, res);
  },
  loginUser: function (req, res, next) {
    routeHelpers.loginUser(req, res, next);
  },
  renderFinalLandingUser: function (req, res) {
    routeHelpers.finalLandingUser(req, res);
  },
  userRenderRegisterMember: function (req, res) {
    routeHelpers.userRenderRegisterMember(req, res);
  },
  userRegisterMember: function (req, res) {
    routeHelpers.userRegisterMember(req, res);
  },
  logoutUser: function (req, res) {
    routeHelpers.logout(req, res);
  },


  renderRegisterService: function (req, res) {
    routeHelpers.renderRegisterService(req, res);
  },
  registerService: function (req, res) {
    routeHelpers.registerService(req, res);
  },
  
  renderRegisterDream: function (req, res) {
    routeHelpers.renderRegisterDream(req, res);
  },
  registerDream: function (req, res) {
    routeHelpers.registerDream(req, res);
  },
  
};
