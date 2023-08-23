const router = require("express").Router()
const bcrypt = require("bcryptjs")
const Member = require("../../db/models/Member")
const User = require("../../db/models/User")


router.route("/")
    .get((req, res) => {
        res.send("register")
    })
    .post((req, res) => {
        let { name, email, password } = req.body
        User.findOne({ email }, (err, data) => {
            if (err) {
                console.log(err)
            } else if (!data) {
                let salt = bcrypt.genSaltSync(10)
                let hashed = bcrypt.hashSync(password, salt)
                password = hashed
                let newUser = new User({ name, email, password })
                newUser.save((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        data.message = "New user successfuly added"
                        res.json(data)
                    }
                })
            } else {
                res.json({ error: `${email} is already registered as a user` })
            }
        })
    })

router.route("/login")
    .get((req, res) => {
        res.send("login")
    })
    .post((req, res)=>{
        let { email, password } = req.body
        User.findOne({email}, (err, data)=>{
            if(err){
                console.log(err)
            } else if (!data){
                res.json({error: `${ email } could not be found on our database`})
            } else {
               let pass = bcrypt.compareSync(password, data.password) 
               if(!pass){
                   res.json({error: "The password did not match our records"})
               } else {
                   res.json({ message: `Welcome, ${ data.name }, to the website!`})
               }
            }
        })
        
    })

module.exports = router