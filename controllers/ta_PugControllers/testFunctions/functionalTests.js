const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");
const assert = chai.assert;

chai.use(chaiHttp)

suite("Sanity checks", ()=>{
    test("Check if get registration works", (done)=>{
        chai.request(server)
        .get("/test")
        .end((err, res)=>{
            assert.equal(res.status, 200, "should connect")
            assert.equal(res.text, "register", "should hit the register route")
            done()
        })
    })

    test("Check if get login works", (done)=>{
        chai.request(server)
        .get("/test/login")
        .end((err, res)=>{
            assert.equal(res.status, 200, "should connect")
            assert.equal(res.text, "login", "should hit the login route")
            done()
        })
    })
})

suite("Test registration", ()=>{
    test("do not duplicate a user, user email should be the same", (done)=>{
        chai.request(server)
        .post("/test")
        .send({ name: "Cindy", email: "cmail", password: "cword"})
        .end((err,res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.error, 'cmail is already registered as a user')
            done()
        })
    })
})

suite("Test login", ()=>{
    test("successfuly log in", (done)=>{
        chai.request(server)
        .post("/test/login")
        .send({ email: "cmail", password: "cword"})
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "Welcome, Cindy, to the website!")
            done()
        })
    })

    test("Login with invalid password", (done)=>{
        chai.request(server)
        .post("/test/login")
        .send({ email: "cmail", password: "phonehead"})
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.error,"The password did not match our records", "should get error message")
            done()
        })
    })

    test("Login with invalid email", (done)=>{
        chai.request(server)
        .post("/test/login")
        .send({ email: "Ilikecookies.com", password: "cword"})
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.error, "Ilikecookies.com could not be found on our database")
            done()
        })
    })
})