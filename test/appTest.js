const server = require("../server")
const chai = require("chai")
const chaiHttp = require("chai-http")
const assert = chai.assert

chai.use(chaiHttp)

// suite("Auth Connectivity Tests", ()=>{
//     test("Check if site connection works", (done)=>{
//         chai.request(server)
//         .get("/test/")
//         .end((err, res)=>{
//             assert.equal(res.status, 200, "should connect")
//             assert.equal(res.body.message, "You are connected with the site.", "you should connect with the site.")
//             done()
//         })
//     })
    
//     test("Check if get registration is displayed", (done)=>{
//         chai.request(server)
//         .get("/test/register_member")
//         .end((err, res)=>{
//             assert.equal(res.status, 200, "should connect")
//             assert.equal(res.body.message, "You are at the registeration page.", "should hit the register route")
//             done()
//         })
//     })

//     test("Check if get login is displayed", (done)=>{
//         chai.request(server)
//         .get("/test/login_member")
//         .end((err, res)=>{
//             assert.equal(res.status, 200, "should connect")
//             assert.equal(res.body.message, "You are at the login page.", "should hit the login route")
//             done()
//         })
//     })
// })



