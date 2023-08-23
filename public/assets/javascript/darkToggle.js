// function darkToggle() {
//   var element = document.body;
//   element.classList.toggle("bg-light");
// }

// const Member = require("../../../db/models/Member");


function darkToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var button = document.div.button;
  button.classList.toggle("bg-dark")
}

// function memberDarkToggle() {
//   let id = req.params.id;
//   let reqBody = req.body;
//   let { dark_mode } = reqBody
//   var element = document.body;
//   const newData = {};
//   Object.entries(reqBody)
//     .filter(([, value]) => value !== "")
//     .forEach(([key, value]) => (newData[key] = value));
//   Member.findByIdAndUpdate(
//     { _id: id },
//     { $set: newData },
//     { new: true },
//     (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       let message = "You have successfully updated your profile.";
//       res.redirect(pageToRender + id);
//     }
//   );
//   element.classList.toggle("dark-mode");
//   Member.findById( { “email” : ”easy1@easy.com” } , { $set : {membership_role :
//     “Local Administrator” }})
//   var button = document.div.button;
//   button.classList.toggle("bg-dark")
// }