const userAccountHelpers = require("./userAccountHelper");

module.exports = {
  /// Admin ///
  renderMyProfile: function (req, res) {
    userAccountHelpers.myProfile(req, res);
  },
  renderMyProfileSettings: function (req, res) {
    userAccountHelpers.myProfileSettings(req, res);
  },
  updateMyProfileSettings: function (req, res) {
    userAccountHelpers.updateMyProfile(req, res);
  },
  renderMyProfileSettingsDB: function (req, res) {
    userAccountHelpers.myProfileSettingsDB(req, res);
  },
  updateMyProfileSettingsDB: function (req, res) {
    userAccountHelpers.updateMyProfileDB(req, res);
  },
  updateMyPassword: function (req, res) {
    userAccountHelpers.updateMyPassword(req, res);
  },

  /// User/Admin Area ///
  renderUserMemberDatabase: function (req, res) {
    userAccountHelpers.userMemberDatabase(req, res);
  },
  updateUserMemberDatabase: function (req, res) {
    userAccountHelpers.updateUserMemberDatabase(req, res);
  },
  userUpdateMemberDatabase: function (req, res) {
    userAccountHelpers.userUpdateMemberDatabase(req, res);
  },
  renderUserDatabase: function (req, res, next) {
    userAccountHelpers.userDatabase(req, res, next);
  },
  updateUserDatabase: function (req, res) {
    userAccountHelpers.updateUserDatabase(req, res);
  },

  /// Admin Vendor Area ///
  renderUserVendorDatabase: function (req, res) {
    userAccountHelpers.userVendorDatabase(req, res);
  },
  userUpdateVendorDatabase: function (req, res) {
    userAccountHelpers.userUpdateVendorDatabase(req, res);
  },

    /// Members ///
  renderMemberProfilePublic: function (req, res) {
    userAccountHelpers.memberProfilePublic(req, res);
  },
  updateMemberProfilePublic: function (req, res) {
    userAccountHelpers.updateMemberProfile(req, res);
  },
  renderMemberProfile: function (req, res) {
    userAccountHelpers.memberProfile(req, res);
  },
  renderMemberProfileWall: function (req, res) {
    userAccountHelpers.memberProfile(req, res);
  },
  updateMemberProfileWall: function (req, res) {
    userAccountHelpers.updateMemberProfileWall(req, res);
  },
  renderMemberProfileSettings: function (req, res) {
    userAccountHelpers.memberProfileSettings(req, res);
  },
  updateMemberProfileSettings: function (req, res) {
    userAccountHelpers.updateMemberProfile(req, res);
  },
  updateMemberPassword: function (req, res) {
      userAccountHelpers.updateMemberPassword(req, res);
    },
  deleteMember: function (req, res) {
    userAccountHelpers.deleteMember(req, res);
  },

    /// Dreams ///
  renderDreamProfile: function (req, res) {
    userAccountHelpers.dreamProfile(req, res);
  },
  renderDreamProfileSettings: function (req, res) {
    userAccountHelpers.dreamProfileSettings(req, res);
  },
  updateDreamProfileSettings: function (req, res) {
    userAccountHelpers.updateDreamProfile(req, res);
  },
  updateDreamPassword: function (req, res) {
      userAccountHelpers.updateDreamPassword(req, res);
    },
  deleteDream: function (req, res) {
    userAccountHelpers.deleteDream(req, res);
  },

    /// Member Database ///

  renderMemberProfileSettingsDB: function (req, res) {
    userAccountHelpers.memberProfileSettingsDB(req, res);
  },
  updateMemberProfileSettingsDB: function (req, res) {
    userAccountHelpers.updateMemberProfileDB(req, res);
  },
  renderMemberDatabase: function (req, res) {
    userAccountHelpers.memberDatabase(req, res);
  },
  renderMemberDatabaseAZ: function (req, res) {
    userAccountHelpers.memberDatabaseAZ(req, res);
  },
  updateMemberDatabase: function (req, res) {
    userAccountHelpers.updateMemberDatabase(req, res);
  },
  renderMemberDatabasePublic: function (req, res) {
    userAccountHelpers.memberDatabasePublic(req, res);
  },
  updateMemberDatabasePublic: function (req, res) {
    userAccountHelpers.updateMemberDatabasePublic(req, res);
  },

  /// Dream Database ///

  renderDreamSettingsDB: function (req, res) {
    userAccountHelpers.dreamSettingsDB(req, res);
  },
  updateDreamSettingsDB: function (req, res) {
    userAccountHelpers.updateDreamSettingsDB(req, res);
  },
  renderDreamDatabase: function (req, res) {
    userAccountHelpers.dreamDatabase(req, res);
  },
  updateDreamDatabase: function (req, res) {
    userAccountHelpers.updateDreamDatabase(req, res);
  },
  renderDreamDatabasePublic: function (req, res) {
    userAccountHelpers.dreamDatabasePublic(req, res);
  },
  updateDreamDatabasePublic: function (req, res) {
    userAccountHelpers.updateDreamDatabasePublic(req, res);
  },
  renderDreamDatabaseForecast: function (req, res) {
    userAccountHelpers.dreamDatabaseForecast(req, res);
  },
  updateDreamDatabaseForecast: function (req, res) {
    userAccountHelpers.updateDreamDatabaseForecast(req, res);
  },
  renderDreamDatabaseForecastPublic: function (req, res) {
    userAccountHelpers.dreamDatabaseForecastPublic(req, res);
  },
  updateDreamDatabaseForecastPublic: function (req, res) {
    userAccountHelpers.updateDreamDatabaseForecastPublic(req, res);
  },
  deleteDBDream: function (req, res) {
    userAccountHelpers.deleteDBDream(req, res);
  },

  /// Student Database ///
  renderStudentAnswers: function (req, res) {
    userAccountHelpers.studentAnswers(req, res);
  },
  updateStudentAnswer: function (req, res) {
    userAccountHelpers.updateStudentAnswer(req, res);
  },
  deleteStudentAnswers: function (req, res) {
    userAccountHelpers.deleteStudentAnswers(req, res);
  },

  /// Vendor Database ///
  renderVendorDatabase: function (req, res) {
    userAccountHelpers.renderVendorDatabase(req, res);
  },
  renderVendorProfileSettingsDB: function (req, res) {
    userAccountHelpers.renderVendorProfileSettingsDB(req, res);
  },
  updateVendorProfileSettingsDB: function (req, res) {
    userAccountHelpers.updateVendorProfileDB(req, res);
  },
  /// Deletes Vendor
  updateVendorDatabase: function (req, res) {
    userAccountHelpers.updateVendorDatabase(req, res);
  },
}