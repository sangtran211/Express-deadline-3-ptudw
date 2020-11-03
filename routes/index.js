var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bé tập tính - Express- 1712722' });
});

router.post('/', (req, res) => {
  const number = req.body.number;
  const result = Math.pow(parseFloat(number), 2);
  const firstNumber = req.body.firstNumber;
  const secondNumber = req.body.secondNumber;
  const gender = req.body.gender;
  const mainResult = req.body.mainResult;
  if (gender == 100) {
    mainResult =  Math.pow(parseFloat(firstNumber), 2);;
  }
  if (gender == 200) {
    mainResult = firstNumber - secondNumber;

  }
  if (gender == 300) {
    mainResult = firstNumber * secondNumber;

  }
  if (gender == 400) {
    mainResult = firstNumber / secondNumber;

  }
  res.render('index', { title: 'Tinh xong', firstNumber, secondNumber, mainResult, number, result });
});
router.post('/', (req, res) => {

});
module.exports = router;

