const authFunction = require("./functions/authFunctions");
const appFunction = require("./functions/appFunctions");

modeule.exports = {
  landing : authFunction.landedOnSite,
  register : authFunction.registerUser,
  displayLogin : authFunction.getLoginForm,
  login : authFunction.loginUser,
  logout : authFunction.logoutUser,
  appLanding : appFunction.authorizedLanding,
  addContact : appFunction.addContactToUserArray,
  updateContact : appFunction.updateContactToUserArray,
  deleteContact : appFunction.deleteContactToUserArray,
};