export class Sales {
  price(orders: Array<number>) {
    let total;
    const pricePerOne = 8;
    total = 0;
    let diff = 0;
    let pos = -1;
    const count = [];
    const discount = [1, 1, 0.95, 0.9, 0.8, 0.75];
    for (let i = 0; i < 5; i++) {
      count.push(0);
    }

    for (let i = 0; i < orders.length; i++) {
      count[orders[i]] += 1;
    }

    diff = 0;
    for (let i = 0; i < 5; i++) {
      if (count[i] > 0) {
        diff++;
        pos = i;
        count[i] -= 1;
      }
    }
    if (diff === 1) {
      total += discount[diff] * (count[pos] + 1) * pricePerOne;
    } else {
      total += discount[diff] * diff * pricePerOne;
    }

    return total;
  }
}
