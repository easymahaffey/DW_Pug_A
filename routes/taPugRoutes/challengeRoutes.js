const router = require("express").Router();
const challenge = require("../../controllers/ta_PugControllers/appControllers/challengeControllers");
const { ensureAuthenticated } = require('../../auth/auth');

  /////////////////////////////////////
  ///////// TriAge Challenge  /////////
  /////////////////////////////////////

router
  .route("/triage-challenge/:id")
  .get(ensureAuthenticated, challenge.renderSecureChallenge);

router
  .route("/triage-my-challenge/:id")
  .get(ensureAuthenticated, challenge.renderSecureMyChallenge);

router
  .route("/triage-main-challenge-modules-viewer/:id/:pg")
  .get(ensureAuthenticated, challenge.renderSecureChallengeViewer)
  .post(ensureAuthenticated, challenge.secureChallengeViewer);
  
router
  .route("/member-challenge/:id")
  .get(ensureAuthenticated, challenge.renderSecureMemberChallenge);
router
  .route("/triage-main-challenge-modules/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModules);
router
  .route("/triage-main-challenge-modules-s1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS1);
router
  .route("/triage-main-challenge-modules-s2a/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2a);
router
  .route("/triage-main-challenge-modules-s2aq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2aq1);
router
  .route("/secureMainChallengeModulesS2aq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS2aq1);
router
  .route("/triage-main-challenge-modules-s2b/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2b);
router
  .route("/triage-main-challenge-modules-s2c/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2c);
router
  .route("/triage-main-challenge-modules-s2cq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2cq1);
router
  .route("/secureMainChallengeModulesS2cq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS2cq1);
router
  .route("/triage-main-challenge-modules-s2cq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2cq2);
router
  .route("/secureMainChallengeModulesS2cq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS2cq2);
router
  .route("/triage-main-challenge-modules-s2cq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2cq3);
router
  .route("/secureMainChallengeModulesS2cq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS2cq3);
router
  .route("/triage-main-challenge-modules-s2cq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2cq4);
router
  .route("/secureMainChallengeModulesS2cq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS2cq4);
router
  .route("/triage-main-challenge-modules-s2dr/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS2dr)
router
  .route("/secureMainChallengeModulesS2dr/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS2dr)
router
  .route("/triage-main-challenge-modules-s3aq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3aq1)
router
  .route("/secureMainChallengeModulesS3aq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3aq1)
router
  .route("/triage-main-challenge-modules-s3b/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3b)
router
  .route("/triage-main-challenge-modules-s3bq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3bq1)
router
  .route("/secureMainChallengeModulesS3bq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3bq1)
router
  .route("/triage-main-challenge-modules-s3bq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3bq2)
router
  .route("/secureMainChallengeModulesS3bq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3bq2)
router
  .route("/triage-main-challenge-modules-s3bq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3bq3)
router
  .route("/secureMainChallengeModulesS3bq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3bq3)
router
  .route("/triage-main-challenge-modules-s3bq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3bq4)
router
  .route("/secureMainChallengeModulesS3bq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3bq4)
router
  .route("/triage-main-challenge-modules-s3bq5/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3bq5)
router
  .route("/secureMainChallengeModulesS3bq5/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3bq5)
router
  .route("/triage-main-challenge-modules-s3br/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3br)
router
  .route("/secureMainChallengeModulesS3br/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3br)
router
  .route("/triage-main-challenge-modules-s3c/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3c)
router
  .route("/triage-main-challenge-modules-s3cq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3cq1)
router
  .route("/secureMainChallengeModulesS3cq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3cq1)
router
  .route("/triage-main-challenge-modules-s3cq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3cq2)
router
  .route("/secureMainChallengeModulesS3cq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3cq2)
router
  .route("/triage-main-challenge-modules-s3cq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3cq3)
router
  .route("/secureMainChallengeModulesS3cq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3cq3)
router
  .route("/triage-main-challenge-modules-s3cq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3cq4)
router
  .route("/secureMainChallengeModulesS3cq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3cq4)
router
  .route("/triage-main-challenge-modules-s3cr/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3cr)
router
  .route("/secureMainChallengeModulesS3cr/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3cr)
router
  .route("/triage-main-challenge-modules-s3d/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3d)
router
  .route("/triage-main-challenge-modules-s3dq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3dq1)
router
  .route("/secureMainChallengeModulesS3dq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3dq1)
router
  .route("/triage-main-challenge-modules-s3dq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3dq2)
router
  .route("/secureMainChallengeModulesS3dq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3dq2)
router
  .route("/triage-main-challenge-modules-s3dq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3dq3)
router
  .route("/secureMainChallengeModulesS3dq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3dq3)
router
  .route("/triage-main-challenge-modules-s3dq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3dq4)
router
  .route("/secureMainChallengeModulesS3dq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3dq4)
router
  .route("/triage-main-challenge-modules-s3dq5/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3dq5)
router
  .route("/secureMainChallengeModulesS3dq5/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3dq5)
router
  .route("/triage-main-challenge-modules-s3dr/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS3dr)
router
  .route("/secureMainChallengeModulesS3dr/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS3dr)
router
  .route("/triage-main-challenge-modules-s4a/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4a)
router
  .route("/triage-main-challenge-modules-s4aq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4aq1)
router
  .route("/secureMainChallengeModulesS4aq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4aq1)
router
  .route("/triage-main-challenge-modules-s4bq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4bq1)
router
  .route("/secureMainChallengeModulesS4bq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4bq1)
router
  .route("/triage-main-challenge-modules-s4bq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4bq2)
router
  .route("/secureMainChallengeModulesS4bq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4bq2)
router
  .route("/triage-main-challenge-modules-s4bq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4bq3)
router
  .route("/secureMainChallengeModulesS4bq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4bq3)
router
  .route("/triage-main-challenge-modules-s4bq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4bq4)
router
  .route("/secureMainChallengeModulesS4bq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4bq4)
router
  .route("/triage-main-challenge-modules-s4br/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4br)
router
  .route("/secureMainChallengeModulesS4br/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4br)
router
  .route("/triage-main-challenge-modules-s4cq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4cq1)
router
  .route("/secureMainChallengeModulesS4cq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4cq1)
router
  .route("/triage-main-challenge-modules-s4cq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4cq2)
router
  .route("/secureMainChallengeModulesS4cq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4cq2)
router
  .route("/triage-main-challenge-modules-s4cq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4cq3)
router
  .route("/secureMainChallengeModulesS4cq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4cq3)
router
  .route("/triage-main-challenge-modules-s4cq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4cq4)
router
  .route("/secureMainChallengeModulesS4cq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4cq4)
router
  .route("/triage-main-challenge-modules-s4cq5/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4cq5)
router
  .route("/secureMainChallengeModulesS4cq5/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4cq5)
router
  .route("/triage-main-challenge-modules-s4cr/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS4cr)
router
  .route("/secureMainChallengeModulesS4cr/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS4cr)
router
  .route("/triage-main-challenge-modules-s5a/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5a)
router
  .route("/triage-main-challenge-modules-s5aq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5aq1)
router
  .route("/secureMainChallengeModulesS5aq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5aq1)
router
  .route("/triage-main-challenge-modules-s5bq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5bq1)
router
  .route("/secureMainChallengeModulesS5bq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5bq1)
router
  .route("/triage-main-challenge-modules-s5bq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5bq2)
router
  .route("/secureMainChallengeModulesS5bq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5bq2)
router
  .route("/triage-main-challenge-modules-s5bq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5bq3)
router
  .route("/secureMainChallengeModulesS5bq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5bq3)
router
  .route("/triage-main-challenge-modules-s5bq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5bq4)
router
  .route("/secureMainChallengeModulesS5bq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5bq4)
router
  .route("/triage-main-challenge-modules-s5br/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5br)
router
  .route("/secureMainChallengeModulesS5br/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5br)
router
  .route("/triage-main-challenge-modules-s5c/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5c)
router
  .route("/triage-main-challenge-modules-s5cq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5cq1)
router
  .route("/secureMainChallengeModulesS5cq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5cq1)
router
  .route("/triage-main-challenge-modules-s5cq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5cq2)
router
  .route("/secureMainChallengeModulesS5cq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5cq2)
router
  .route("/triage-main-challenge-modules-s5cr/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS5cr)
router
  .route("/secureMainChallengeModulesS5cr/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS5cr)
router
  .route("/triage-main-challenge-modules-s6a/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6a)
router
  .route("/triage-main-challenge-modules-s6aq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6aq1)
router
  .route("/secureMainChallengeModulesS6aq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6aq1)
router
  .route("/triage-main-challenge-modules-s6aq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6aq2)
router
  .route("/secureMainChallengeModulesS6aq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6aq2)
router
  .route("/triage-main-challenge-modules-s6bq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6bq1)
router
  .route("/secureMainChallengeModulesS6bq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6bq1)
router
  .route("/triage-main-challenge-modules-s6bq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6bq2)
router
  .route("/secureMainChallengeModulesS6bq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6bq2)
router
  .route("/triage-main-challenge-modules-s6bq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6bq3)
router
  .route("/secureMainChallengeModulesS6bq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6bq3)
router
  .route("/triage-main-challenge-modules-s6bq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6bq4)
router
  .route("/secureMainChallengeModulesS6bq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6bq4)
router
  .route("/triage-main-challenge-modules-s6br/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6br)
router
  .route("/secureMainChallengeModulesS6br/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6br)
router
  .route("/triage-main-challenge-modules-s6cq1/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6cq1)
router
  .route("/secureMainChallengeModulesS6cq1/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6cq1)
router
  .route("/triage-main-challenge-modules-s6cq2/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6cq2)
router
  .route("/secureMainChallengeModulesS6cq2/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6cq2)
router
  .route("/triage-main-challenge-modules-s6cq3/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6cq3)
router
  .route("/secureMainChallengeModulesS6cq3/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6cq3)
router
  .route("/triage-main-challenge-modules-s6cq4/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6cq4)
router
  .route("/secureMainChallengeModulesS6cq4/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6cq4)
router
  .route("/triage-main-challenge-modules-s6cq5/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6cq5)
router
  .route("/secureMainChallengeModulesS6cq5/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6cq5)
router
  .route("/triage-main-challenge-modules-s6cr/:id")
  .get(ensureAuthenticated, challenge.renderSecureMainChallengeModulesS6cr)
router
  .route("/secureMainChallengeModulesS6cr/:id")
  .post(ensureAuthenticated, challenge.secureMainChallengeModulesS6cr)

module.exports = router;
