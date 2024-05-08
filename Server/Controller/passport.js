const passport = require("passport");

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const CLIENT_ID = "2235394244-1g3ta253iaq9k77fajf2f17edljtc3p2.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
 
passport.use(new GoogleStrategy({
    clientID:     CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:5500/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));


passport.serializeUser((user, done) => {
    done(null, user);
    console.log(user)
});

passport.deserializeUser((user, done) => {
    done(null, user);
});