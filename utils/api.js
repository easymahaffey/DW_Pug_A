const router = require("express").Router();
const Vendor = require("../db/models/ta_PugModels/Vendor");
const finishedArray = require("./data");
const FinishedArray = finishedArray.finishedArray


//// Uncomment below to load data ////
const saveToDataBase = (arr) =>{
  let vendor = new Vendor(arr)
  console.log(arr)
  // vendor.save(((err, data) => {
  //   if (err) {
  //     console.log("TEST SAVE ERROR", err);
  //   }
  //   return {status:201, data:data}
  // }))
}

//// Use the link below to initiate data load ////
router.get("/dataLoad", async (req, res) => {
  let currentIndex = 0;
  console.log(FinishedArray[currentIndex])
  while(currentIndex < FinishedArray.length){
    let response = await saveToDataBase(FinishedArray[currentIndex])
    // console.log(response)
    currentIndex += 1
  }
    res.status(201).json({msg: 'We did it'}) // Use for DB load above (saveToDataBase)
    // res.send(FinishedArray)  //  Use to display JSON on web page
});

module.exports = router


