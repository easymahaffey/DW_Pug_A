const gameHelpers = require("./gameHelper");

module.exports = {

  /////////////////////////////////////
  /////////   TriAge Games    /////////
  /////////////////////////////////////

  renderSecureGames: function (req, res) {
    gameHelpers.secureGames(req, res);
  },
  renderSecureGameModules: function (req, res) {
    gameHelpers.secureGameModules(req, res);
  },
  renderSecureGamePongTitle: function (req, res) {
    gameHelpers.secureGamePongTitle(req, res);
  },
  renderSecureGamePong: function (req, res) {
    gameHelpers.secureGamePong(req, res);
  },
  renderSecureGameBouncyBallTitle: function (req, res) {
    gameHelpers.secureGameBouncyBallTitle(req, res);
  },
  renderSecureGameBouncyBall: function (req, res) {
    gameHelpers.secureGameBouncyBall(req, res);
  },
  renderSecureCardGameTitle: function (req, res) {
    gameHelpers.secureCardGameTitle(req, res);
  },
  renderSecureCardGame: function (req, res) {
    gameHelpers.secureCardGame(req, res);
  },
  
}