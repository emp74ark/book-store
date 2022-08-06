const basketContainer = {};

class Basket {
  static totalAmount = 0;
  static idList = new Set;
  static totalPrice = 0;
  
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
  static upTotalAmount(n){
    Basket.totalAmount += n;
  }
  static downTotalAmount(n){
    Basket.totalAmount -= n;
  }
  static upTotalPrice(m){
    Basket.totalPrice += m;
  }
  static downTotalPrice(m){
    Basket.totalPrice -= m;
  }
  static getTotalPrice(){
    return Basket.totalPrice;
  }
}

function basketAdd(book, n=1){
  const basketCounter = document.querySelector('.basket__counter');
  const basketSize = Object.keys(basketContainer).length;
  Basket.upTotalPrice(book.price);
  if (!Basket.idList.has(book['id'])){
    basketContainer[basketSize] = new Basket(book, n);
    Basket.upTotalAmount(n);
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

export { basketAdd, basketContainer, Basket }