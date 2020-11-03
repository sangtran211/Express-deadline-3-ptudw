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
  const gender = req.body.gender;
  const mainResult = req.body.mainResult;
  if (parseFloat(gender) == "100") {
    mainResult = Math.pow(parseFloat(firstNumber), 2);;
  }
  if (parseFloat(gender) == "200") {
    mainResult = parseFloat(firstNumber) - parseFloat(secondNumber);

  }
  if (parseFloat(gender) == "300") {
    mainResult = parseFloat(firstNumber) * parseFloat(secondNumber);

  }
  if (parseFloat(gender) == "400") {
    mainResult = parseFloat(firstNumber) / parseFloat(secondNumber);

  }
  res.render('index', { title: 'Tinh xong', firstNumber, secondNumber, mainResult, number, result });
});

module.exports = router;

