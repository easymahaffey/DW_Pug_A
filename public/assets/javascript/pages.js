const ModuleText = require("../../db/models/Questions");

// ModuleText
//   .find()
//   // .find({ questions: questions })
//   // .find({ moduletexts: data })
//   .exec((err, textData) => {
//     if (err) {
//       console.log(err);
//       done(null, textData);
//     }
//     /// reset id to req.params.id for passport/routes
//     console.log("Helper DB TEXT ", textData)
//     let {
//       _id,
//       textImage,
//       textTitle,
//       textNumber,
//       textSubTitle,
//       textContent,
//       // questions,
//       // answers,
//       // questions:[],
//       // answers:[],
//       questionGroupModule,
//       questionModule,
//       questionTitle,
//       questionTimer,
//       questionNumber,
//       questionText,
//       questionCheckboxTitle,
//       questionCheckbox,
//       // answerTime,
//       // answerText,
//       // answerCheckbox,
//     } = textData;
//     let text_id = textData._id;
//     let message = "TESTING DATA OUTPUT";
//     res.render(pageToRender, {
//       current_project,
//       membership_role,
//       member_student_status,
//       loggedIn,
//       student_loggedIn,
//       id,
//       student_id,
//       first_name,
//       last_name,
//       date_member_joined,
//       email,
//       phone,
//       city,
//       state,
//       zipCode,
//       student_role,
//       student_privacy,
//       student_text,
//       student_image,
//       student_url,
//       student_test,
//       student_enroll_date,
//       text_id,
//       message,
//       data,
//       textImage,
//       textTitle,
//       textNumber,
//       textSubTitle,
//       textContent,
//       questionGroupModule,
//       questionTitle,
//       questionTimer,
//       questionNumber,
//       questionText,
//       questionCheckboxTitle,
//       questionCheckbox
//     });
//   });


var pageIndex = 1;
showPages(pageIndex);

function plusPages(n) {
  showPages(pageIndex += n);
};

function currentPage(n) {
  showPages(pageIndex = n);
};

function showPages(n) {
  var i;
  var pages = document.getElementsByClassName("myPages");
  console.log("PAGES LENGTH ", pages.length);
  var dots = document.getElementsByClassName("dot");
  if (n > pages.length) {pageIndex = 1}  ;  
  if (n < 1) {pageIndex = pages.length};
  for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";  
  };
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  };
  pages[pageIndex-1].style.display = "block";  
  dots[pageIndex-1].className += " active";
};