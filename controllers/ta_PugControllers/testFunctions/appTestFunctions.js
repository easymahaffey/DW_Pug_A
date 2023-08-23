const appHelpers = require("./appTestHelper")

module.exports = {
  authorizedLanding: function (req, res) {
    authHelpers.loginMember(req, res);
  },
  addContactToUserArray: function (req, res) {
    authHelpers.loginMember(req, res);
  },
  updateContactToUserArray: function (req, res) {
    authHelpers.loginMember(req, res);
  },
  deleteContactToUserArray: function (req, res) {
    authHelpers.loginMember(req, res);
  },
}