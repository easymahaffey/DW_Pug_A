const challengeHelpers = require("./challengeHelper");

module.exports = {
  /////////////////////////////////////
  ///////// TriAge Challenge  /////////
  /////////////////////////////////////

  renderSecureChallenge: function (req, res) {
    challengeHelpers.secureChallenge(req, res);
  },
  renderSecureMyChallenge: function (req, res) {
    challengeHelpers.secureMyChallenge(req, res);
  },

  renderSecureChallengeViewer: (req, res) => {
    challengeHelpers.renderSecureChallengeViewer(req, res);
  },
  secureChallengeViewer: (req, res) => {
    challengeHelpers.secureChallengeViewer(req, res);
  },

  renderSecureMemberChallenge: function (req, res) {
    challengeHelpers.secureMemberChallenge(req, res);
  },
  renderSecureMainChallengeModules: function (req, res) {
    challengeHelpers.secureMainChallengeModules(req, res);
  },
  renderSecureMainChallengeModulesS1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS1(req, res);
  },
  renderSecureMainChallengeModulesS2a: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2a(req, res);
  },
  renderSecureMainChallengeModulesS2aq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2aq1(req, res);
  },
  secureMainChallengeModulesS2aq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS2aq1(req, res);
  },
  renderSecureMainChallengeModulesS2b
  : function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2b
    (req, res);
  },
  renderSecureMainChallengeModulesS2c: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2c(req, res);
  },
  renderSecureMainChallengeModulesS2cq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2cq1(req, res);
  },
  secureMainChallengeModulesS2cq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS2cq1(req, res);
  },
  renderSecureMainChallengeModulesS2cq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2cq2(req, res);
  },
  secureMainChallengeModulesS2cq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS2cq2(req, res);
  },
  renderSecureMainChallengeModulesS2cq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2cq3(req, res);
  },
  secureMainChallengeModulesS2cq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS2cq3(req, res);
  },
  renderSecureMainChallengeModulesS2cq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2cq4(req, res);
  },
  secureMainChallengeModulesS2cq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS2cq4(req, res);
  },
  renderSecureMainChallengeModulesS2dr: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS2dr(req, res);
  },
  secureMainChallengeModulesS2dr: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS2dr(req, res);
  },
  renderSecureMainChallengeModulesS3aq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3aq1(req, res);
  },
  secureMainChallengeModulesS3aq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3aq1(req, res);
  },
  renderSecureMainChallengeModulesS3b: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3b(req, res);
  },
  renderSecureMainChallengeModulesS3bq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3bq1(req, res);
  },
  secureMainChallengeModulesS3bq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3bq1(req, res);
  },
  renderSecureMainChallengeModulesS3bq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3bq2(req, res);
  },
  secureMainChallengeModulesS3bq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3bq2(req, res);
  },
  renderSecureMainChallengeModulesS3bq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3bq3(req, res);
  },
  secureMainChallengeModulesS3bq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3bq3(req, res);
  },
  renderSecureMainChallengeModulesS3bq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3bq4(req, res);
  },
  secureMainChallengeModulesS3bq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3bq4(req, res);
  },
  renderSecureMainChallengeModulesS3bq5: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3bq5(req, res);
  },
  secureMainChallengeModulesS3bq5: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3bq5(req, res);
  },
  renderSecureMainChallengeModulesS3br: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3br(req, res);
  },
  secureMainChallengeModulesS3br: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3br(req, res);
  },
  renderSecureMainChallengeModulesS3c: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3c(req, res);
  },
  renderSecureMainChallengeModulesS3cq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3cq1(req, res);
  },
  secureMainChallengeModulesS3cq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3cq1(req, res);
  },
  renderSecureMainChallengeModulesS3cq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3cq2(req, res);
  },
  secureMainChallengeModulesS3cq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3cq2(req, res);
  },
  renderSecureMainChallengeModulesS3cq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3cq3(req, res);
  },
  secureMainChallengeModulesS3cq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3cq3(req, res);
  },
  renderSecureMainChallengeModulesS3cq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3cq4(req, res);
  },
  secureMainChallengeModulesS3cq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3cq4(req, res);
  },
  renderSecureMainChallengeModulesS3cr: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3cr(req, res);
  },
  secureMainChallengeModulesS3cr: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3cr(req, res);
  },
  renderSecureMainChallengeModulesS3d: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3d(req, res);
  },
  renderSecureMainChallengeModulesS3dq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3dq1(req, res);
  },
  secureMainChallengeModulesS3dq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3dq1(req, res);
  },
  renderSecureMainChallengeModulesS3dq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3dq2(req, res);
  },
  secureMainChallengeModulesS3dq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3dq2(req, res);
  },
  renderSecureMainChallengeModulesS3dq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3dq3(req, res);
  },
  secureMainChallengeModulesS3dq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3dq3(req, res);
  },
  renderSecureMainChallengeModulesS3dq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3dq4(req, res);
  },
  secureMainChallengeModulesS3dq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3dq4(req, res);
  },
  renderSecureMainChallengeModulesS3dq5: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3dq5(req, res);
  },
  secureMainChallengeModulesS3dq5: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3dq5(req, res);
  },
  renderSecureMainChallengeModulesS3dr: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS3dr(req, res);
  },
  secureMainChallengeModulesS3dr: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS3dr(req, res);
  },
  renderSecureMainChallengeModulesS4a: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4a(req, res);
  },
  renderSecureMainChallengeModulesS4aq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4aq1(req, res);
  },
  secureMainChallengeModulesS4aq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4aq1(req, res);
  },
  renderSecureMainChallengeModulesS4bq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4bq1(req, res);
  },
  secureMainChallengeModulesS4bq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4bq1(req, res);
  },
  renderSecureMainChallengeModulesS4bq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4bq2(req, res);
  },
  secureMainChallengeModulesS4bq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4bq2(req, res);
  },
  renderSecureMainChallengeModulesS4bq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4bq3(req, res);
  },
  secureMainChallengeModulesS4bq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4bq3(req, res);
  },
  renderSecureMainChallengeModulesS4bq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4bq4(req, res);
  },
  secureMainChallengeModulesS4bq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4bq4(req, res);
  },
  renderSecureMainChallengeModulesS4br: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4br(req, res);
  },
  secureMainChallengeModulesS4br: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4br(req, res);
  },
  renderSecureMainChallengeModulesS4cq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4cq1(req, res);
  },
  secureMainChallengeModulesS4cq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4cq1(req, res);
  },
  renderSecureMainChallengeModulesS4cq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4cq2(req, res);
  },
  secureMainChallengeModulesS4cq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4cq2(req, res);
  },
  renderSecureMainChallengeModulesS4cq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4cq3(req, res);
  },
  secureMainChallengeModulesS4cq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4cq3(req, res);
  },
  renderSecureMainChallengeModulesS4cq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4cq4(req, res);
  },
  secureMainChallengeModulesS4cq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4cq4(req, res);
  },
  renderSecureMainChallengeModulesS4cq5: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4cq5(req, res);
  },
  secureMainChallengeModulesS4cq5: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4cq5(req, res);
  },
  renderSecureMainChallengeModulesS4cr: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS4cr(req, res);
  },
  secureMainChallengeModulesS4cr: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS4cr(req, res);
  },
  renderSecureMainChallengeModulesS5a: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5a(req, res);
  },
  renderSecureMainChallengeModulesS5aq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5aq1(req, res);
  },
  secureMainChallengeModulesS5aq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5aq1(req, res);
  },
  renderSecureMainChallengeModulesS5bq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5bq1(req, res);
  },
  secureMainChallengeModulesS5bq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5bq1(req, res);
  },
  renderSecureMainChallengeModulesS5bq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5bq2(req, res);
  },
  secureMainChallengeModulesS5bq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5bq2(req, res);
  },
  renderSecureMainChallengeModulesS5bq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5bq3(req, res);
  },
  secureMainChallengeModulesS5bq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5bq3(req, res);
  },
  renderSecureMainChallengeModulesS5bq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5bq4(req, res);
  },
  secureMainChallengeModulesS5bq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5bq4(req, res);
  },
  renderSecureMainChallengeModulesS5br: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5br(req, res);
  },
  secureMainChallengeModulesS5br: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5br(req, res);
  },
  renderSecureMainChallengeModulesS5c: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5c(req, res);
  },
  renderSecureMainChallengeModulesS5cq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5cq1(req, res);
  },
  secureMainChallengeModulesS5cq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5cq1(req, res);
  },
  renderSecureMainChallengeModulesS5cq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5cq2(req, res);
  },
  secureMainChallengeModulesS5cq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5cq2(req, res);
  },
  renderSecureMainChallengeModulesS5cr: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS5cr(req, res);
  },
  secureMainChallengeModulesS5cr: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS5cr(req, res);
  },
  renderSecureMainChallengeModulesS6a: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6a(req, res);
  },
  renderSecureMainChallengeModulesS6aq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6aq1(req, res);
  },
  secureMainChallengeModulesS6aq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6aq1(req, res);
  },
  renderSecureMainChallengeModulesS6aq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6aq2(req, res);
  },
  secureMainChallengeModulesS6aq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6aq2(req, res);
  },
  renderSecureMainChallengeModulesS6bq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6bq1(req, res);
  },
  secureMainChallengeModulesS6bq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6bq1(req, res);
  },
  renderSecureMainChallengeModulesS6bq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6bq2(req, res);
  },
  secureMainChallengeModulesS6bq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6bq2(req, res);
  },
  renderSecureMainChallengeModulesS6bq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6bq3(req, res);
  },
  secureMainChallengeModulesS6bq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6bq3(req, res);
  },
  renderSecureMainChallengeModulesS6bq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6bq4(req, res);
  },
  secureMainChallengeModulesS6bq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6bq4(req, res);
  },
  renderSecureMainChallengeModulesS6br: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6br(req, res);
  },
  secureMainChallengeModulesS6br: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6br(req, res);
  },
  renderSecureMainChallengeModulesS6cq1: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6cq1(req, res);
  },
  secureMainChallengeModulesS6cq1: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6cq1(req, res);
  },
  renderSecureMainChallengeModulesS6cq2: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6cq2(req, res);
  },
  secureMainChallengeModulesS6cq2: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6cq2(req, res);
  },
  renderSecureMainChallengeModulesS6cq3: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6cq3(req, res);
  },
  secureMainChallengeModulesS6cq3: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6cq3(req, res);
  },
  renderSecureMainChallengeModulesS6cq4: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6cq4(req, res);
  },
  secureMainChallengeModulesS6cq4: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6cq4(req, res);
  },
  renderSecureMainChallengeModulesS6cq5: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6cq5(req, res);
  },
  secureMainChallengeModulesS6cq5: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6cq5(req, res);
  },
  renderSecureMainChallengeModulesS6cr: function (req, res) {
    challengeHelpers.renderSecureMainChallengeModulesS6cr(req, res);
  },
  secureMainChallengeModulesS6cr: function (req, res) {
    challengeHelpers.secureMainChallengeModulesS6cr(req, res);
  },
};
