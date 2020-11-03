var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bé tập tính - Express- 1712722' });
});

// router.post('/', (req, res) => {
//   const number = req.body.number;
//   const result = Math.pow(parseFloat(number), 2);
//   res.render('index', { title: 'Bé tập tính - Express- 1712722', number, result });
// });
router.post('/', (req, res) => {
  const firstNumber = req.body.firstNumber;
  const secondNumber = req.body.secondNumber;
  const gender = req.body.gender;
  if (gender == 100) {
    const mainResult = firstNumber + secondNumber;
  } else
    if (gender == 200) {
      const mainResult = firstNumber - secondNumber;

    } else
      if (gender == 300) {
        const mainResult = firstNumber * secondNumber;

      } else
        if (gender == 400) {
          const mainResult = firstNumber / secondNumber;

        }
  res.render('index', { title: 'Bé tập tính - Express- 1712722', firstNumber, secondNumber, mainResult });
});
module.exports = router;

