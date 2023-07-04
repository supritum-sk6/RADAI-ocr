const express = require("express");
const tesseract = require("node-tesseract-ocr");



const app = express();
const config = {
    lang: "eng+chi_tra",
    oem: 1,
    psm: 3,
}



tesseract
    .recognize("./images/sample2.jpg", config)
    .then((text) => {
        console.log("Result:", text)
    })
    .catch((error) => {
        console.log(error.message)
    });



app.get("/", function(req, res){
    res.send("gg");
});



app.listen(3000, function(){
    console.log("server is active on port 3000");
});