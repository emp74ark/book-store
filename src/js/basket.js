const basketContainer = {};

class Basket {
  static totalAmount = 0;
  static idList = new Set;
  
  constructor (book, amount = 1){
    this.book = book,
    this.amount = amount
  }
  amountUp(n){
    this.amount += n;
    Basket.totalAmount += n;
  }
  amountDown(n){
    this.amount -= n;
    Basket.totalAmount -= n;
  }
  static getTotalAmount(){
    return Basket.totalAmount;
  }
  static setTotalAmount(n){
    Basket.totalAmount += n;
  }
}

function basketAdd(book, n=1){
  const basketCounter = document.querySelector('.basket__counter');
  const basketSize = Object.keys(basketContainer).length;
  if (!Basket.idList.has(book['id'])){
    basketContainer[basketSize] = new Basket(book, n);
    Basket.setTotalAmount(n);
    Basket.idList.add(book['id'])
  }
  if (Basket.idList.has(book['id'])){
    for (let i = 0; i < basketSize; i++){
      if (basketContainer[i]['book']['id'] === book['id']){
        basketContainer[i].amountUp(n);
      }
    }
  }
  basketCounter.textContent = `${Basket.getTotalAmount()}`
}

export { basketAdd, basketContainer }