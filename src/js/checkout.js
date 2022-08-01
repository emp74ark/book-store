import { basketContainer, Basket } from './basket';
import { buildPage } from './layout'
import { buildLast } from './order';

const orders = [];

function showError(text){
  const main = document.querySelector('main');
  const message = document.createElement('span');
  message.className = 'checkout__error';
  message.textContent = text;
  main.appendChild(message);
}

function removeError(){
  const main = document.querySelector('main');
  const message = document.querySelector('.checkout__error');
  main.removeChild(message);
}

function checkoutPage(){
  const page = document.body;

  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.innerHTML = 'Book store</a>';
  header.appendChild(title);

  const nav = document.createElement('nav');
  const home = document.createElement('img');
  home.src = './assets/icons/home.png'
  home.alt = 'Back to start page'
  home.addEventListener('click', () => {
    buildPage()
  })

  const navTitle = document.createElement('h2');
  navTitle.innerHTML = '<h2>Shopping cart</h2>'
  
  nav.appendChild(home);
  nav.appendChild(navTitle);

  const main = document.createElement('main');

  const checkoutWrapper = document.createElement('div');
  checkoutWrapper.className = 'checkout__wrapper';
  const checkoutSize = Object.keys(basketContainer).length
  if (checkoutSize > 0){
    const checkoutList = document.createElement('ol');
    checkoutList.className = 'checkout__wrapper-list';
    for (let b = 0; b < checkoutSize; b++){
      const checkoutItem = document.createElement('li');
      checkoutItem.className = 'checkout__wrapper-item';
      const itemText = document.createElement('span');
      itemText.textContent = `${basketContainer[b]['book']['title']} - ${basketContainer[b]['book']['author']}: ${basketContainer[b]['amount']} pcs`;
      const removeButton = document.createElement('span');
      removeButton.className = 'checkout__wrapper-remove';
      removeButton.innerHTML = '&times;'
      removeButton.addEventListener('click', () => {
        checkoutList.removeChild(checkoutItem);
        Basket.downTotalAmount(basketContainer[b]['amount'])
        delete basketContainer[b];
      })
      checkoutItem.appendChild(itemText);
      checkoutItem.appendChild(removeButton);
      checkoutList.appendChild(checkoutItem);
    }
    checkoutWrapper.appendChild(checkoutList);
  }
  if (checkoutSize === 0){
    checkoutWrapper.textContent = 'Nothing was added';
  }
  const checkoutForm = document.createElement('form');
  checkoutForm.className = 'checkout__wrapper-form';
  checkoutForm.name = 'checkout';
  checkoutForm.action = ' ';
  checkoutForm.method = 'post';
  checkoutForm.autocomplete = 'off';

  checkoutForm.innerHTML = '<label for="name">Name</label> <input type="text" name="name" id="buyer-name" required pattern="[A-za-z]{4,}"> <label for="surname">Surname</label> <input type="text" name="surname" id="surname" required pattern="[A-Za-z]{5,}"> <label for="buyer-email">Email</label> <input type="email" name="email" id="email" required> <label for="date">Delivery date</label> <input type="datetime-local" name="date" id="date" required> <label for="street">Street</label> <input type="text" name="street" id="street" required pattern="[A-Za-z]{5,}( ?)([A-Za-z]{5,})?"> <label for="house">House number</label> <input type="number" name="house" id="house" required min="0"> <label for="flat">Flat number</label> <input type="text" name="flat" id="flat" required min="0" pattern="([0-9])/?([0-9])?"> <fieldset> <legend>Payment method:</legend> <label for="card">Card</label> <input type="radio" name="payment" id="card" value="card" required> <label for="cash">Cash</label> <input type="radio" name="payment" id="cash" value="cash" required> </fieldset> <label for="gift">Select gift:</label> <select name="gift" required> <option value="">--Please choose an option--</option> <option value="pack">pack as a gift</option> <option value="postcard">postcard</option> <option value="discount">2% discount to the next time</option> <option value="pen">branded pen</option> <option value="pencil">branded pencil</option> </select>'
  
  const checkoutPay = document.createElement('input');
  checkoutPay.value = 'Confirm and pay';
  checkoutPay.type = 'submit';
  checkoutPay.className = 'checkout__wrapper-pay';
  
  function formHandler(formNode) {
    const data = new FormData(formNode)
    return data
  }

  function sendData (data) {
    orders.push(Array.from(data.entries()))
  }

  checkoutForm.addEventListener('input', (e) => {
    const formNode = e.target.form;
    const isValid = formNode.checkValidity();
    checkoutPay.disabled = !isValid;
  })

  checkoutPay.addEventListener('click', (e) => {
    e.preventDefault();
    if (Basket.getTotalAmount() > 0){
      const data = formHandler(checkoutForm);
      sendData(data);
      buildLast();
    }
    if (Basket.getTotalAmount() === 0){
      showError('You have not selected any book')
      setTimeout(removeError, 3000)
    }
  })


  checkoutForm.appendChild(checkoutPay);
  checkoutWrapper.appendChild(checkoutForm);
  main.appendChild(checkoutWrapper);
  
  const footer = document.createElement('footer');
  footer.innerHTML = '<a href="#" target="_blank" class="school"> <img src="./assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="./assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>'
  
  page.appendChild(header);
  page.appendChild(nav);
  page.appendChild(main);
  page.appendChild(footer);
}

function buildCheckout(){
  document.body.innerHTML = ''
  checkoutPage();
  const dateTime = document.querySelector('#date');
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  dateTime.min = tomorrow
}

export { buildCheckout, orders }