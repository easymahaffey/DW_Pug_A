const router = require('express').Router();
const seedRoutes = require("./seedDBRoutes");
const testRoutes = require("./testRoutes/test");
const landingLayoutRoutes = require('./landingLoginRoutes');
const userAccountRoutes = require('./userAccountRoutes');
const siteNavigationRoutes = require('./siteNavigationRoutes');
const challengeRoutes = require('./challengeRoutes');
const peerTrainingRoutes = require('./peerTrainingRoutes');
const gameRoutes = require('./gameRoutes');
const projectRoutes = require('./projectRoutes');
const dataRoutes = require('../../utils/api');


router.use('/seed/', seedRoutes);
router.use('/test/', testRoutes);
router.use('/', landingLayoutRoutes);
router.use('/', userAccountRoutes);
router.use('/', siteNavigationRoutes);
router.use('/', challengeRoutes);
router.use('/', peerTrainingRoutes);
router.use('/', gameRoutes);
router.use('/', projectRoutes);
router.use('/', dataRoutes);

module.exports = router;