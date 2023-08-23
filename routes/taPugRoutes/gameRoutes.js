const router = require("express").Router();
const game = require("../../controllers/ta_PugControllers/appControllers/gameControllers");
const { ensureAuthenticated } = require('../../auth/auth');

  /////////////////////////////////////
  /////////   TriAge Games    /////////
  /////////////////////////////////////

router
  .route("/member-games/:id")
  .get(ensureAuthenticated, game.renderSecureGames);

router
  .route("/triage-game-modules/:id")
  .get(ensureAuthenticated, game.renderSecureGameModules);

router
  .route("/triage-game-pong-title/:id")
  .get(ensureAuthenticated, game.renderSecureGamePongTitle);
router
  .route("/triage-game-pong/:id")
  .get(ensureAuthenticated, game.renderSecureGamePong);

router
  .route("/triage-game-bouncy-ball-title/:id")
  .get(ensureAuthenticated, game.renderSecureGameBouncyBallTitle);
router
  .route("/triage-game-bouncy-ball/:id")
  .get(ensureAuthenticated, game.renderSecureGameBouncyBall);

router
  .route("/triage-game-card-game-title/:id")
  .get(ensureAuthenticated, game.renderSecureCardGameTitle);
router
  .route("/triage-game-card-game/:id")
  .get(ensureAuthenticated, game.renderSecureCardGame);

module.exports = router;
