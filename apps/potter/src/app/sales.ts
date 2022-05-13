export class Sales {
  price(orders: Array<number>) {
    let total;
    total = 0;
    for (let order in orders) {
      total += 8;
    }
    return total;
  }
}
