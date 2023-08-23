const authHelpers = require("./authTestHelper")


module.exports = {
  loginMember: function (req, res) {
    authHelpers.loginMember(req, res);
  },
  landedOnSite: function (req, res) {
    authHelpers.landedOnSite(req, res);
  },
  displayRegister: function (req,res) {
    authHelpers.displayRegister(req,res);
  },
  registerMember: function (req, res) {
    authHelpers.registerMember(req, res);
  },
  // getLoginForm: function (req, res) {
  //   res.render("login_member");
  // },
  displayLogin: function (req, res) {
    authHelpers. displayLogin(req, res);
  },
  loginUser: function (req, res) {
    authHelpers.loginMember(req, res);
  },
  logoutUser: function (req, res) {
    authHelpers.loginMember(req, res);
  },
  
}
  
  // landing : testAuthFunction.landedOnSite,
  // register : testAuthFunction.registerUser,
  // displayLogin : testAuthFunction.getLoginForm,
  // login : testAuthFunction.loginUser,
  // logout : testAuthFunction.logoutUser,
  // appLanding : testAppFunction.authorizedLanding,
  // addContact : testAppFunction.addContactToUserArray,
  // updateContact : testAppFunction.updateContactToUserArray,
  // deleteContact : testAppFunction.deleteContactToUserArray,