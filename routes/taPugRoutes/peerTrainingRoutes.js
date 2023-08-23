const router = require("express").Router();
const peerTraining = require("../../controllers/ta_PugControllers/appControllers/peerTrainingControllers");
const { ensureAuthenticated } = require('../../auth/auth');

  /////////////////////////////////////
  /////// TriAge Peer Training  ///////
  /////////////////////////////////////

router
  .route("/triage-peer-training/:id")
  .get(ensureAuthenticated,peerTraining.renderSecurePeerTraining);
router
  .route("/triage-my-peer-training/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMyPeerTraining);
router
  .route("/member-peer-training/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMemberPeerTraining);
router
  .route("/triage-main-peer-training-modules/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMemberPeerTrainingModules);
router
  .route("/triage-main-peer-training-modules-s7a/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7a);
router
  .route("/triage-main-peer-training-modules-s7aq1/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7aq1);
router
  .route("/secureMainPeerTrainingModulesS7aq1/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS7aq1);
router
  .route("/triage-main-peer-training-modules-s7aq2/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7aq2);
router
  .route("/secureMainPeerTrainingModulesS7aq2/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS7aq2);
router
  .route("/triage-main-peer-training-modules-s7aq3/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7aq3);
router
  .route("/secureMainPeerTrainingModulesS7aq3/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS7aq3);
router
  .route("/triage-main-peer-training-modules-s7aq4/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7aq4);
router
  .route("/secureMainPeerTrainingModulesS7aq4/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS7aq4);
router
  .route("/triage-main-peer-training-modules-s7b/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7b);
router
  .route("/triage-main-peer-training-modules-s7c/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7c);
router
  .route("/triage-main-peer-training-modules-s7d/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7d);
router
  .route("/triage-main-peer-training-modules-s7dq1/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7dq1);
router
  .route("/secureMainPeerTrainingModulesS7dq1/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS7dq1);
router
  .route("/triage-main-peer-training-modules-s7dq2/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7dq2);
router
  .route("/secureMainPeerTrainingModulesS7dq2/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS7dq2);
router
  .route("/triage-main-peer-training-modules-s7dq3/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS7dq3);
router
  .route("/secureMainPeerTrainingModulesS7dq3/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS7dq3);
router
  .route("/triage-main-peer-training-modules-s8aGH/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8aGH);
router
  .route("/secureMainPeerTrainingModulesS8aGH/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8aGH);
router
  .route("/triage-main-peer-training-modules-s8aHRL/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8aHRL);
router
  .route("/secureMainPeerTrainingModulesS8aHRL/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8aHRL);
router
  .route("/triage-main-peer-training-modules-s8aq1/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8aq1);
router
  .route("/secureMainPeerTrainingModulesS8aq1/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8aq1);
router
  .route("/triage-main-peer-training-modules-s8aq2/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8aq2);
router
  .route("/secureMainPeerTrainingModulesS8aq2/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8aq2);
router
  .route("/triage-main-peer-training-modules-s8b/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8b);
router
  .route("/secureMainPeerTrainingModulesS8b/:id")
  .get(ensureAuthenticated, peerTraining.renderSecureMainPeerTrainingModulesS8b)
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8b);
router
  .route("/secureMainPeerTrainingModulesS8bDelete/:id")
  // .get(ensureAuthenticated, peerTraining.deleteChallengePTAnswers)
  .get(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8bDelete)
  // .post(ensureAuthenticated, peerTraining.deleteChallengePTAnswers);
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8bDelete);
router
  .route("/triage-main-peer-training-modules-s8cq1/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8cq1);
router
  .route("/secureMainPeerTrainingModulesS8cq1/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8cq1);
router
  .route("/triage-main-peer-training-modules-s8cq2/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8cq2);
router
  .route("/secureMainPeerTrainingModulesS8cq2/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8cq2);
router
  .route("/triage-main-peer-training-modules-s8cq3/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8cq3);
router
  .route("/secureMainPeerTrainingModulesS8cq3/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8cq3);
router
  .route("/triage-main-peer-training-modules-s8cq4/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8cq4);
router
  .route("/secureMainPeerTrainingModulesS8cq4/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8cq4);
router
  .route("/triage-main-peer-training-modules-s8cq5/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8cq5);
router
  .route("/secureMainPeerTrainingModulesS8cq5/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8cq5);
router
  .route("/triage-main-peer-training-modules-s8cq6/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8cq6);
router
  .route("/secureMainPeerTrainingModulesS8cq6/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8cq6);
router
  .route("/triage-main-peer-training-modules-s8cq7/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8cq7);
router
  .route("/secureMainPeerTrainingModulesS8cq7/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8cq7);
router
  .route("/triage-main-peer-training-modules-s8d/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8d);
router
  .route("/secureMainPeerTrainingModulesS8d/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8d);
router
  .route("/triage-main-peer-training-modules-s8dq1/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8dq1);
router
  .route("/secureMainPeerTrainingModulesS8dq1/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8dq1);
router
  .route("/triage-main-peer-training-modules-s8dq2/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8dq2);
router
  .route("/secureMainPeerTrainingModulesS8dq2/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8dq2);
router
  .route("/triage-main-peer-training-modules-s8dq3/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS8dq3);
router
  .route("/secureMainPeerTrainingModulesS8dq3/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS8dq3);
router
  .route("/triage-main-peer-training-modules-s9a/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS9a);
router
  .route("/triage-main-peer-training-modules-s9aq1/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS9aq1);
router
  .route("/secureMainPeerTrainingModulesS9aq1/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS9aq1);
router
  .route("/triage-main-peer-training-modules-s9b/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS9b);
router
  .route("/secureMainPeerTrainingModulesS9b/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS9b);
router
  .route("/triage-main-peer-training-modules-s9b1/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS9b1);
router
  .route("/triage-main-peer-training-modules-s9c/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS9c);
router
  .route("/triage-main-peer-training-modules-s9d/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS9d);
router
  .route("/secureMainPeerTrainingModulesS9d/:id")
  .post(ensureAuthenticated, peerTraining.secureMainPeerTrainingModulesS9d);
router
  .route("/triage-main-peer-training-modules-s10a/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS10a);
router
  .route("/triage-main-peer-training-modules-s10b/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS10b);
router
  .route("/triage-main-peer-training-modules-s10c/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS10c);
router
  .route("/triage-main-peer-training-modules-s10d/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainPeerTrainingModulesS10d);



  /////////////////////////////////////
  //// TriAge Create Questions DB /////
  //////// Admin Access Only  /////////
  /////////////////////////////////////

router
  .route("/triage-main-module-questions/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainModuleQuestions)
router
  .route("/secureMainModuleQuestions/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainModuleQuestions)
  .post(ensureAuthenticated,peerTraining.secureMainModuleQuestions);
router
  .route("/triage-main-module-questionsDB/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainModuleQuestionsDB)
router
  .route("/secureMainModuleQuestionsDB/:id")
  .get(ensureAuthenticated,peerTraining.renderSecureMainModuleQuestionsDB)
  .post(ensureAuthenticated,peerTraining.secureMainModuleQuestionsDB);
router
  .route("/triage-main-modules-viewer/:pg/:id")
  .get(ensureAuthenticated, peerTraining.renderSecureModuleViewer)
  .post(ensureAuthenticated, peerTraining.secureModuleViewer);

module.exports = router;
