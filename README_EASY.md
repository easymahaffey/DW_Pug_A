# Multi-site Pug Build 
## Admin Notes

### Mongo Tips
***Use PowerShell Not GetBash***

***Useful MONGO Commands***

> show dbs

> use `database_name`

> db.dropDatabase() 
`After *use* to access database`

> show collections

> db.`collection_name`.find()

> db.`collection_name`.find().pretty()


> db.`collection_name`.drop()


### Description
This is a application written in javascript for a node server.

It is part of a larger 
Its main features are a database of vendors for different ***Projects*** (metropolitan areas) and student database of questions and answers based on the SAMHSA-HRSA Center for Integrated Health Solutions (CIHS) Whole Health Action Management (WHAM) Guide.

The Whole Health Action Management (WHAM) Peer Support Training Participant Guide was designed for peers, by peers.

***Whole Health Action Management (WHAM) Peer Support Training Participant Guide, published by the SAMHSAHRSA Center for Integrated Health Solutions (www.integration.samhsa.gov), April 2012***

### Technologies used

#### Front End:

The TriAge app's UI was made using ***PUG***'s views.   


#### Back End:

The back end uses an OMV architecture and was built in Node.js using an Express server, and local Mongodb database. The server uses helmet.js for an added layer of security, passport.js for authentication and mongoose to interact with the database.

Please note helment **(security)** has been commented out to allows the use of iFrames. 

Later, if the pug layout can been modified for question modules without iFrame then helment will be restored.

The server was kept intentionally clean, the database, routes and express-session/passport were built out in separate modules and brought into the server. Express-session takes in app as a dependency. Cors is also used to handle communication with the front-end. Here is the server:

```javascript

    const express = require("express")
    const app = express()
    const cors = require("cors")
    const helmet = require("helmet")
    const session = require("./auth/connectSession")
    const routes = require("./routes")
    const PORT = process.env.PORT || 8080

    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    // app.use(helmet())

    session(app)
    // For PUG
    app.set('view engine', 'pug');
    app.set('views', 'views');
    app.set('assets', './assets');
    app.use(express.static(__dirname + '/public'))
    app.use(routes)
    require("./db/dbConnect")

    app.listen(PORT, () => console.log(`The server LISTENS on port ${PORT}`))

    module.exports = app;

``` 
***Mongoose*** connects the server with the database in its own module. Here is a copy of that module:

```javascript

    if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
    }
    const mongoose = require("mongoose")
    const MONGO_URI = process.env.MONGO_URI

    mongoose.connect(MONGO_URI, console.log("The mongoose is on the loose!"))

```

Similarly, ***Express-session*** is set to its own module which also sets the ***Passport*** middleware to the server. The ***passport-local*** strategy is brought into the express-session module as a dependency that takes in Passport. The code fpr local strategy comes from the passport documentation.

From connectSession.js

```javascript

    module.exports = function (app) {
        app.use(
            session({
                secret: process.env.SESSION_SECRET,
                resave: true,
                saveUninitialized: true,
                cookie: { secure: false },
                key: 'express.sid',
            })
        );
        app.use(passport.initialize());
        app.use(passport.session());
        require("./connectPassport")(passport)
    }

```

And from connectPassport.js: 

```javascript

    module.exports = function(passport){
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
    
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, doc) => {
          done(null, doc);
        });
      });
    
      passport.use(
        new LocalStrategy({ usernameField : 'email'},function (email, password, done) {
          User.findOne({ email }, function (err, user) {
            if (err) {
              return done(err);
            }
            if (!user) {
              return done(null, false);
            }
            if (!bcrypt.compareSync(password, user.password)) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
      ); 
    }

```

The routes are routed as methods that take in controller functions. This serves to keep the database and the routes and any helper functions separate. 

The seedFunction.js helper functions can be used select a partial or full database of vendors, lines 8 and 9. This file is in the testFunctions directory. Please noted the full db takes a couple of minutes to load, so be patient.

Here is an example of the app routes:

```javascript

const router = require('express').Router();
const landingLayoutRoutes = require('./landingLoginRoutes');
const siteNavigationRoutes = require('./siteNavigationRoutes');
const challengeRoutes = require('./challengeRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/', landingLayoutRoutes);
router.use('/', siteNavigationRoutes);
router.use('/', challengeRoutes);
router.use('/', peerTrainingRoutes);
router.use('/', gameRoutes);
router.use('/', projectRoutes);

module.exports = router;

```

and following is an excerpt from the app controllers:

```javascript

    module.exports = {

        deleteContact: function (req, res) {
            let { _id } = req.body
            Contact.findByIdAndDelete({ _id }, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    User.findByIdAndUpdate({ _id: data.userId }, { $pull: { contacts: data._id } }, { new: true }).populate({path:'contacts', options:{sort:{'lastName':1}}}).exec((err, data) => {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json(data.contacts)
                        }
                    })
                }
            })
        },
    }

```

### Testing

Testing was done using ***Mocha chai*** assertion testing (tdd) with ***chai-http***. The testing script was changed in the package.json to run tests with Mocha chai assertions, e.g.,

```json
    "scripts": {
    "test": "mocha --timeout 10000 --u tdd",
    }

```
Testing was done using suites and assertions. Here is the suite to test the login function: 

```javascript
    suite("login a user", ()=>{
            let loginUser = {
                email: "test1E@mail.com",
                password: "password",
            }
            let wrongPass = {
                email: "test1E@mail.com",
                password: "catsstink",
            }
            let wrongEmail = {
                email: "testY@mail.com",
                password: "password",
            }
        test("should be able to log in a user", (done)=>{
            chai.request(server)
            .post("/auth/login")
            .send(loginUser)
            .end((err, res)=>{
                assert.equal(res.status, 200)
                assert.isNotEmpty(res.body.firstName)
                assert.isNotEmpty(res.body.lastName)
                assert.isNotEmpty(res.body.email)
                assert.isNotEmpty(res.body._id)
                assert.isArray(res.body.contacts)
                done()
            })
        })
        test("should get an error - wrong password", (done)=>{
            chai.request(server)
            .post("/auth/login")
            .send(wrongPass)
            .end((err, res)=>{
                assert.equal(res.status, 200)
                assert.equal(res.body.message, "password or email do not match database")
                done()
            })
        })
        test("should get an error - wrong email", (done)=>{
            chai.request(server)
            .post("/auth/login")
            .send(wrongEmail)
            .end((err, res)=>{
                assert.equal(res.status, 200)
                assert.equal(res.body.message, "password or email do not match database")
                done()
            })
        })
    })

``` 

#### Start scripts etc.

To start the back-end and the front-end at the same time, the dev dependency, concurrently was used. ***Concurrently*** starts two scripts at the same time - in this case starting the server with ***nodemon*** and the creat-react-app:

```json

    "scripts": {
    "test": "mocha --timeout 10000 --u tdd",
    "test1": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js",
    "start": "node server.js"
  }

```

***Nodemon*** was used to start the development server so that it restarts its self when a change is made. ***Dotenv*** is an additional dev dependency that makes the process.env object available to hide variables on the front end.

### WHAT I HAVE LEARNED WITH THIS PROJECT

Is how to do MVC programming.