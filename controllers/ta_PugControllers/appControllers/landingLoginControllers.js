const landingLoginFunctions = require('../appFunctions/landingLoginFunctions');

module.exports = {

    initialLanding : landingLoginFunctions.initialLanding,
    failedAuth: landingLoginFunctions.failedAuth,

    renderRegisterMember: landingLoginFunctions.renderRegisterMember,
    registerMember: landingLoginFunctions.registerMember,
    renderLoginMember: landingLoginFunctions.renderLoginMember,
    loginMember: landingLoginFunctions.loginMember,
    renderFinalLandingMember: landingLoginFunctions.renderFinalLandingMember,
    logoutMember: landingLoginFunctions.logoutMember,

    renderStudentRegister: landingLoginFunctions.renderStudentRegister,
    registerStudent: landingLoginFunctions.registerStudent,
    renderFinalLandingStudent: landingLoginFunctions.renderFinalLandingStudent,
    logoutStudent: landingLoginFunctions.logoutStudent,

    renderUserRegister: landingLoginFunctions.renderUserRegister,
    registerUser: landingLoginFunctions.registerUser,
    renderLogin: landingLoginFunctions.renderLogin,
    loginUser: landingLoginFunctions.loginUser,
    renderFinalLandingUser: landingLoginFunctions.renderFinalLandingUser,
    userRenderRegisterMember: landingLoginFunctions.userRenderRegisterMember,
    userRegisterMember: landingLoginFunctions.userRegisterMember,
    logoutUser: landingLoginFunctions.logoutUser,
    
    renderRegisterService: landingLoginFunctions.renderRegisterService,
    registerService: landingLoginFunctions.registerService,
    
    renderRegisterDream: landingLoginFunctions.renderRegisterDream,
    registerDream: landingLoginFunctions.registerDream,
    
}