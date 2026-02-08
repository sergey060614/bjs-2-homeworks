"use strict"

function solveEquation(a, b, c) {
  const d = Math.pow(b, 2) - 4 * a * c;
  let arr = [];

  if (d < 0) {
  return arr;
} else if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2); 
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const loanAmount = amount - contribution;

  if (loanAmount <= 0) {
    return 0;
  }

  const monthlyPayment =
    (loanAmount *
      (monthlyPercent * Math.pow(1 + monthlyPercent, countMonths))) /
    (Math.pow(1 + monthlyPercent, countMonths) - 1);

  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}
