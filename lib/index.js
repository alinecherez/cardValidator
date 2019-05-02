function cardValidator(cardInput) {
  if (typeof cardInput !== 'string') {
    return false;
  }
  cardInput = cardInput.replace(/[^0-9]/g, '');
  if (cardInput.length !== 16) {
    return false;
  }
  let arrayCard = cardInput.split('');
  let calc = arrayCard.map((value, index) => {
    if (index % 2 === 0) {
      value = parseInt(value) * 2;
    }
    return (value > 9) ? (parseInt(value) % 10) + 1 : parseInt(value);

  });
  let verify = calc.reduce((acc, currentValue) => acc + currentValue);
  return (verify % 10 === 0) ? true : false;
}

module.exports.cardValidator = cardValidator;