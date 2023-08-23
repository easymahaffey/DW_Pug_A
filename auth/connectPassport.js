const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");

// Load Member Model
const Member = require("../db/models/ta_PugModels/Member");

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Member.findById(id, (err, doc) => {
      done(null, doc);
    });
  });

  passport.use(
    new LocalStrategy(
      { usernameField: 'email' }, (email, password, done) => {
        // Match Member
        Member.findOne({ email }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, {
              message: "That Email Is Not Registered",
            });
          }
          // Match password
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, {
              message: "The Password You Entered Is Incorrect",
            });
          }
          return done(null, user);
        });
      })
  );
}