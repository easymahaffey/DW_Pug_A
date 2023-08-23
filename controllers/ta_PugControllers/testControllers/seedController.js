const seedFunctions = require("../testFunctions/seedFunctions");

module.exports = {
  installation : seedFunctions.install,
  seedVisitors : seedFunctions.seedVisitorsDatabase,
  viewVisitors : seedFunctions.viewVisitorsDatabase,
  seedVisitorStats : seedFunctions.seedVisitorStatsDatabase,
  viewVisitorStats : seedFunctions.viewVisitorStatsDatabase,
  seedSiteStats : seedFunctions.seedSiteStatsDatabase,
  viewSiteStats : seedFunctions.viewSiteStatsDatabase,
  seedProjects : seedFunctions.seedProjectDatabase,
  viewProjects : seedFunctions.viewProjectDatabase,
  seedMembers : seedFunctions.seedMemberDatabase,
  viewMembers : seedFunctions.viewMemberDatabase,
  seedUsers : seedFunctions.seedUserDatabase,
  viewUsers : seedFunctions.viewUserDatabase,
  seedTestVendors : seedFunctions.seedTestVendorDatabase,
  seedVendors : seedFunctions.seedVendorDatabase,
  viewVendors : seedFunctions.viewVendorDatabase,
}