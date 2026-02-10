function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  }

  const avg = (sum / arr.length).toFixed(2);

  return {
    min: min,
    max: max,
    avg: Number(avg)
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, num) => acc + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEven = 0;
  let sumOdd = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEven = 0;
  let countEven = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }

  return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork(arrOfArr, func) {
  let maxResult = -Infinity;

  for (const arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxResult) {
      maxResult = result;
    }
  }

  return maxResult;
}
