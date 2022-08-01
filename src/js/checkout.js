import { basketContainer, Basket } from './basket';
import { buildPage } from './layout'

const orders = [];

function showError(){
  const main = document.querySelector('main');
  const message = document.createElement('span');
  message.className = 'checkout__error';
  message.textContent = 'Check your data';
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
  home.src = '../assets/icons/home.png'
  home.alt = 'Back to start page'
  home.addEventListener('click', () => {
    buildPage()
  })
  nav.appendChild(home);

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
  
  const checkoutNameLabel = document.createElement('label')
  checkoutNameLabel.textContent = 'Name:';
  const checkoutNameInput = document.createElement('input');
  checkoutNameInput.required = true;
  checkoutNameInput.type = 'text';
  checkoutNameInput.name = 'buyer-name';
  checkoutNameInput.placeholder = 'Full name (latin character only)';
  checkoutNameInput.addEventListener('focusout', () => {
    const regexp = /^([A-Z]?[a-z]+)\s([A-Z]?[a-z]+)$/;
    if (!regexp.test(checkoutNameInput.value)){
      checkoutNameInput.classList.add('wrong-input');
    }
    if (regexp.test(checkoutNameInput.value)){
      checkoutNameInput.classList.remove('wrong-input');
    }
  })

  const checkoutEmailLabel = document.createElement('label')
  checkoutEmailLabel.textContent = 'E-mail:';
  const checkoutEmailInput = document.createElement('input');
  checkoutEmailInput.required = true;
  checkoutEmailInput.type = 'email';
  checkoutEmailInput.name = 'buyer-email';
  checkoutEmailInput.placeholder = 'your-mail@mail.com';
  checkoutEmailInput.addEventListener('focusout', () => {
    if(!checkoutEmailInput.checkValidity()){
      checkoutEmailInput.classList.add('wrong-input');
    }
    if(checkoutEmailInput.checkValidity()){
      checkoutEmailInput.classList.remove('wrong-input');
    }
  })

  const deliveryDateLabel = document.createElement('label');
  deliveryDateLabel.textContent = 'Delivery date:';
  const deliveryDateInput = document.createElement('input');
  deliveryDateInput.type = 'datetime-local';
  deliveryDateInput.required = true;
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  deliveryDateInput.min = tomorrow
  deliveryDateInput.addEventListener('focusout', () => {
    if (!deliveryDateInput.checkValidity()){
      deliveryDateInput.classList.add('wrong-input')
    }
    if (deliveryDateInput.checkValidity()){
      deliveryDateInput.classList.remove('wrong-input')
    }
  })
  

  const checkoutAddressLabel = document.createElement('label')
  checkoutAddressLabel.textContent = 'Address:';
  const checkoutAddressInput = document.createElement('textarea');
  checkoutAddressInput.required = true;
  checkoutAddressInput.cols = '30';
  checkoutAddressInput.rows = '3';
  checkoutAddressInput.name = 'buyer-address';
  checkoutAddressInput.placeholder = 'Format: Country, City, Street, building number, room number (latin character only)';
  checkoutAddressInput.addEventListener('focusout', () => {
    const regexp = /^([a-z]+),\s?([a-z]+),\s?([a-z]+),\s?([0-9]+),\s?([0-9]+)/i;
    if (!regexp.test(checkoutAddressInput.value)){
      checkoutAddressInput.classList.add('wrong-input');
    }
    if (regexp.test(checkoutAddressInput.value)){
      checkoutAddressInput.classList.remove('wrong-input');
    }
  })

  const paymentMethod = document.createElement('fieldset');
  
  const legend = document.createElement('legend');
  legend.innerText = 'Payment method'
  const cardLabel = document.createElement('label')
  cardLabel.textContent = 'Card';
  const cardInput = document.createElement('input');
  cardInput.required = true;
  cardInput.type = 'radio';
  cardInput.name = 'payment';
  const cashLabel = document.createElement('label')
  cashLabel.textContent = 'Cash';
  const cashInput = document.createElement('input');
  cashInput.type = 'radio';
  cashInput.name = 'payment';

  paymentMethod.appendChild(legend);
  paymentMethod.appendChild(cardLabel);
  paymentMethod.appendChild(cardInput);
  paymentMethod.appendChild(cashLabel);
  paymentMethod.appendChild(cashInput);
  
  paymentMethod.addEventListener('focusout', () => {
    paymentMethod.classList.add('wrong-input');
    if (cardInput.checked || cashInput.checked){
      legend.classList.remove('wrong-input');
    }
  })


  const giftLabel = document.createElement('label')
  giftLabel.textContent = 'Select gift'
  const giftInput = document.createElement('select');
  giftInput.required = true;
  giftInput.name = 'gift';
  giftInput.innerHTML = '<select name="" id=""> <option value="pack">pack as a gift</option> <option value="postcard">add postcard</option> <option value="discount">provide 2% discount to the next time</option> <option value="pencil">branded pen or pencil</option> </select>'


  checkoutForm.appendChild(checkoutNameLabel);
  checkoutForm.appendChild(checkoutNameInput);
  const checkoutPay = document.createElement('div');
  checkoutPay.className = 'checkout__wrapper-pay';
  checkoutPay.textContent = 'Confirm and pay'
  checkoutPay.addEventListener('click', () => {
    const dataForm = document.forms['checkout'];
    const invalidFields = document.querySelector('.wrong-input');
    const newOrder = {};
    if (invalidFields || Object.keys(basketContainer).length === 0){
      showError();
      setTimeout(removeError, 3000)
    }
    if(Object.keys(basketContainer).length > 0 && !invalidFields){
      newOrder['name'] = dataForm['buyer-name'].value;
      newOrder['email'] = dataForm['buyer-email'].value;
      newOrder['address'] = dataForm['buyer-address'].value;
      newOrder['books'] = basketContainer;
      orders.push(newOrder);
      console.log(orders)
    }
  })

  checkoutForm.appendChild(checkoutEmailLabel);
  checkoutForm.appendChild(checkoutEmailInput);
  checkoutForm.appendChild(deliveryDateLabel);
  checkoutForm.appendChild(deliveryDateInput);
  checkoutForm.appendChild(checkoutAddressLabel);
  checkoutForm.appendChild(checkoutAddressInput);
  checkoutForm.appendChild(paymentMethod);
  checkoutForm.appendChild(giftLabel);
  checkoutForm.appendChild(giftInput);
  checkoutForm.appendChild(checkoutPay);

  checkoutWrapper.appendChild(checkoutForm);
  // checkoutWrapper.appendChild(checkoutPay);
  main.appendChild(checkoutWrapper);
  
  const footer = document.createElement('footer');
  footer.innerHTML = '<a href="#" target="_blank" class="school"> <img src="../assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="../assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>'
  
  page.appendChild(header);
  page.appendChild(nav);
  page.appendChild(main);
  page.appendChild(footer);
}

function buildCheckout(){
  document.body.innerHTML = ''
  checkoutPage();
}

export { buildCheckout }