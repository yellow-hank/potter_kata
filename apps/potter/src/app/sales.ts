export class Sales {
  price(orders: Array<number>) {
    let total;
    const pricePerOne = 8;
    total = 0;
    let diff = 0;
    let change = 1;
    let countForFive = 0;
    let countForThree = 0;
    const count = [];
    const discount = [1, 1, 0.95, 0.9, 0.8, 0.75];
    for (let i = 0; i < 5; i++) {
      count.push(0);
    }

    for (let i = 0; i < orders.length; i++) {
      count[orders[i]] += 1;
    }

    while (change) {
      change = 0;
      diff = 0;
      for (let i = 0; i < 5; i++) {
        if (count[i] > 0) {
          diff++;
          count[i] -= 1;
          change = 1;
        }
      }
      //optimize (5,3) to (4,4)
      if (diff == 5) {
        countForFive++;
      }
      if (diff == 3) {
        countForThree++;
      }

      total += discount[diff] * diff * pricePerOne;
    }

    const minValue = Math.min(countForFive, countForThree);
    total -= minValue * (5 * 0.75 + 3 * 0.9 - 4 * 0.8 * 2) * pricePerOne;

    return total;
  }
}
