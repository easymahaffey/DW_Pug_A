const router = require('express').Router();
const taPugRoutes = require("./taPugRoutes")

router.use('/', taPugRoutes);

module.exports = router;