var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bé tập tính - Express- 1712722' });
});

router.post('/', (req, res) => {
  const number = req.body.number;
  // const result = Math.pow(parseFloat(number), 2);
  const result = parseFloat(number) + parseFloat(number);
  const firstNumber = req.body.firstNumber;
  const secondNumber = req.body.secondNumber;
  var gender = req.body.gender;
  var mainResult = req.body.mainResult;
  if (gender == "cong") {
    mainResult = parseFloat(firstNumber) + parseFloat(secondNumber);
  }
  if (gender == "tru") {
    mainResult = parseFloat(firstNumber) - parseFloat(secondNumber);

  }
  if (gender == "nhan") {
    mainResult = parseFloat(firstNumber) * parseFloat(secondNumber);

  }
  if (gender == "chia") {
    mainResult = parseFloat(firstNumber) / parseFloat(secondNumber);

  }
  res.render('index', { title: 'Bé tập tính - Express- 1712722', firstNumber, secondNumber, mainResult, number, result, gender });
});

module.exports = router;

