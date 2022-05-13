export class Sales {
  price(orders: Array<number>) {
    let total;
    const pricePerOne = 8;
    total = 0;
    let diff = 0;
    let change = 1;
    const count = [];
    const discount = [1,1,0.95,0.9,0.8,0.75];
    for(let i = 0; i < 5; i++){
      count.push(0);
    }

    for(let i = 0; i < orders.length;i++){
      count[orders[i]] += 1;
    }

    while(change){
      change = 0;
      diff = 0;
      for(let i = 0; i < 5; i++){
        if(count[i] > 0){
          diff++;
          count[i] -= 1;
          change = 1;
        }
      }
      total += discount[diff] * diff * pricePerOne;
    }
    




    return total;
  }
}
