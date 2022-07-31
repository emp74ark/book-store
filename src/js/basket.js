const basketContainer = {};

class Basket {
  constructor (book, amount = 1){
    this.book = book,
    this.amount = amount
  }
  static totalAmount = 0;
  amountUp(n){
    this.amount += n;
    Basket.totalAmount += n;
  }
  amountDown(n){
    this.amount -= n;
    Basket.totalAmount -= n;
  }
  static getAmount(){
    return Basket.totalAmount;
  }
}

function basketAdd(book, n=1){
  const basketCounter = document.querySelector('.basket__counter');
  const basketSize = Object.keys(basketContainer).length;
  if (basketSize === 0){
    basketContainer[basketSize] = new Basket(book, n)
  }
  for (let b = 0; b < basketSize; b++){
    if (basketContainer[b]['book']['id'] === book['id']){
      basketContainer[b].amountUp(n)
    }
    if (basketContainer[b]['book']['id'] !== book['id']){
      basketContainer[basketSize] = new Basket(book, n)
    }
  }
  basketCounter.textContent = `${Basket.getAmount() + 1}`
}

export { basketAdd, basketContainer }