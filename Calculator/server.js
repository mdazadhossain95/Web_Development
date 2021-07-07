const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended: true}));


app.get('/bmicalculator', function (req, res) {
 res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  let weight = Number(req.body.n1);
  let height = Number(req.body.n2);
  let Bmi_result = weight / (height * height);

  res.send("Yout BMI is " + Bmi_result);

});



app.listen(3000, function () {
    console.log("Server started on port 3000 from BMI");
});
