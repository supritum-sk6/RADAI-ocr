const express = require("express");
const tesseract = require("node-tesseract-ocr");



const app = express();
const config = {
    lang: "eng+chi_tra",
    oem: 1,
    psm: 3,
}







app.get("/", function(req, res){
    tesseract
    .recognize("./images/sample2.jpg", config)
    .then((text) => {
        res.send(text.split("\n"))
    })
    .catch((error) => {
        console.log(error.message)
    });
});



app.listen(3000, function(){
    console.log("server is active on port 3000");
});