const userAccountFunctions = require('../appFunctions/userAccountFunctions');

module.exports = {
  renderMyProfile: userAccountFunctions.renderMyProfile,
  renderMyProfileSettings: userAccountFunctions.renderMyProfileSettings,
  updateMyProfileSettings: userAccountFunctions.updateMyProfileSettings,
  renderMyProfileSettingsDB: userAccountFunctions.renderMyProfileSettingsDB,
  updateMyProfileSettingsDB: userAccountFunctions.updateMyProfileSettingsDB,
  updateMyPassword: userAccountFunctions.updateMyPassword,

    /// Admin/Member Area ///
  renderUserMemberDatabase: userAccountFunctions.renderUserMemberDatabase,
  updateUserMemberDatabase: userAccountFunctions.updateUserMemberDatabase,
  userUpdateMemberDatabase: userAccountFunctions.userUpdateMemberDatabase,
  renderUserDatabase: userAccountFunctions.renderUserDatabase,
  updateUserDatabase: userAccountFunctions.updateUserDatabase,

  /// Admin Vendor Area ///
  renderUserVendorDatabase: userAccountFunctions.renderUserVendorDatabase,
  userUpdateVendorDatabase: userAccountFunctions.userUpdateVendorDatabase,

    /// Members ///
  renderMemberProfilePublic: userAccountFunctions.renderMemberProfilePublic,

  updateMemberProfilePublic: userAccountFunctions.updateMemberProfilePublic,

  renderMemberProfile: userAccountFunctions.renderMemberProfile,
  renderMemberProfileSettings: userAccountFunctions.renderMemberProfileSettings,
  updateMemberProfileSettings: userAccountFunctions.updateMemberProfileSettings,
  renderMemberProfileWall: userAccountFunctions.renderMemberProfileWall,
  updateMemberProfileWall: userAccountFunctions.updateMemberProfileWall,
  updateMemberPassword: userAccountFunctions.updateMemberPassword,
  deleteMember: userAccountFunctions.deleteMember,

  /// Dreams ///
  renderDreamProfile: userAccountFunctions.renderDreamProfile,
  renderDreamProfileSettings: userAccountFunctions.renderDreamProfileSettings,
  updateDreamProfileSettings: userAccountFunctions.updateDreamProfileSettings,
  updateDreamPassword: userAccountFunctions.updateDreamPassword,
  deleteDream: userAccountFunctions.deleteDream,

  /// Member Database ///
  renderMemberProfileSettingsDB: userAccountFunctions.renderMemberProfileSettingsDB,
  updateMemberProfileSettingsDB: userAccountFunctions.updateMemberProfileSettingsDB,
  renderMemberDatabase: userAccountFunctions.renderMemberDatabase,
  renderMemberDatabaseAZ: userAccountFunctions.renderMemberDatabaseAZ,
  updateMemberDatabase: userAccountFunctions.updateMemberDatabase,
  renderMemberDatabasePublic: userAccountFunctions.renderMemberDatabasePublic,
  updateMemberDatabasePublic: userAccountFunctions.updateMemberDatabasePublic,
 
  /// Dream Database ///
  renderDreamSettingsDB: userAccountFunctions.renderDreamSettingsDB,
  updateDreamSettingsDB: userAccountFunctions.updateDreamSettingsDB,
  renderDreamDatabase: userAccountFunctions.renderDreamDatabase,
  updateDreamDatabase: userAccountFunctions.updateDreamDatabase,
  renderDreamDatabasePublic: userAccountFunctions.renderDreamDatabasePublic,
  updateDreamDatabasePublic: userAccountFunctions.updateDreamDatabasePublic,
  renderDreamDatabaseForecast: userAccountFunctions.renderDreamDatabaseForecast,
  updateDreamDatabaseForecast: userAccountFunctions.updateDreamDatabaseForecast,
  renderDreamDatabaseForecastPublic: userAccountFunctions.renderDreamDatabaseForecastPublic,
  updateDreamDatabaseForecastPublic: userAccountFunctions.updateDreamDatabaseForecastPublic,
  deleteDBDream: userAccountFunctions.deleteDBDream,

  /// Student Database ///
  renderStudentAnswers: userAccountFunctions.renderStudentAnswers,
  updateStudentAnswer: userAccountFunctions.updateStudentAnswer,
  deleteStudentAnswers: userAccountFunctions.deleteStudentAnswers,

  /// Vendor Database ///
  renderVendorDatabase: userAccountFunctions.renderVendorDatabase,
  renderVendorProfileSettingsDB: userAccountFunctions.renderVendorProfileSettingsDB,
  updateVendorProfileSettingsDB: userAccountFunctions.updateVendorProfileSettingsDB,
  updateVendorDatabase: userAccountFunctions.updateVendorDatabase,

}