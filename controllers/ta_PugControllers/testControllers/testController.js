const testAuthFunction = require("../testFunctions/authTestFunctions")
const testAppFunction = require("../testFunctions/appTestFunctions")

module.exports = {
  landedOnSite : testAuthFunction.landedOnSite,
  displayRegister : testAuthFunction.displayRegister,
  registerMember : testAuthFunction.registerMember,
  displayLogin : testAuthFunction.displayLogin,
  loginMember : testAuthFunction.loginMember,
  logout : testAuthFunction.logoutUser,
  appLanding : testAppFunction.authorizedLanding,
  addContact : testAppFunction.addContactToUserArray,
  updateContact : testAppFunction.updateContactToUserArray,
  deleteContact : testAppFunction.deleteContactToUserArray,
}