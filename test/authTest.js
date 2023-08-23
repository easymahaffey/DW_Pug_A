const server = require("../server")
const chai = require("chai")
const chaiHttp = require("chai-http")
const assert = chai.assert

chai.use(chaiHttp)

suite("Auth Connectivity Tests", ()=>{
    test("Check if site connection works", (done)=>{
        chai.request(server)
        .get("/test/")
        .end((err, res)=>{
            assert.equal(res.status, 200, "should connect")
            assert.equal(res.body.message, "You are connected with the site.", "you should connect with the site.")
            done()
        })
    })
    
    test("Check if get registration is displayed", (done)=>{
        chai.request(server)
        .get("/test/register_member")
        .end((err, res)=>{
            assert.equal(res.status, 200, "should connect")
            assert.equal(res.body.message, "You are at the registeration page.", "should hit the register route")
            done()
        })
    })

    test("Check if get login is displayed", (done)=>{
        chai.request(server)
        .get("/test/login_member")
        .end((err, res)=>{
            assert.equal(res.status, 200, "should connect")
            assert.equal(res.body.message, "You are at the login page.", "should hit the login route")
            done()
        })
    })
})

suite("Auth Test registration", ()=>{
    test("Do not duplicate members, test for unique email", (done)=>{
        chai.request(server)
        // .post("/registerMember")
        .post("/test/register_member")
        .send({ 
            current_project: "Phoenix",
            first_name: "test",
            last_name: "test",
            email: "test@test.com",
            password1: "test",
            password2: "test",
            address1: "2026 S. Weaver Dr.",
            city: "Apache Junction",
            state: "AZ",
            zipCode: "85120",
            privacy: "Show",
            membership_status: "Active",
            membership_role: "Member",
            })
        .end((err,res)=>{
            // console.log("TEST XXX ", res.body)
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "This member's email is already registered in our database. Please log in or re-register.", "Duplicates seeded email.")
            // assert.deepEqual(res.body, {}) // For Production
            done()
        })
    })
})

suite("Auth Test login", ()=>{
    test("Check for successful login", (done)=>{
        chai.request(server)
        .post("/test/login_member")
        .send({ email: "test@test.com", password: "test"})
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "Welcome, Test, to the website!")
            done()
        })
    })

    test("Login with invalid password", (done)=>{
        chai.request(server)
        .post("/test/login_member")
        .send({ email: "test@test.com", password: "wrongtest"})
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.text,`{"message":"The Password You Entered Is Incorrect"}`)
            assert.equal(res.body.message,"The Password You Entered Is Incorrect")
            done()
        })
    })

    test("Login with invalid email", (done)=>{
        chai.request(server)
        .post("/test/login_member")
        .send({ email: "wrongtest@test.com", password: "test"})
        .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.equal(res.body.message, "That Email Is Not Registered")
            done()
        })
    })
})