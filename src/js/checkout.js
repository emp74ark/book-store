import { basketContainer } from "./basket";

const orders = [];

function checkoutPage(){
  const page = document.body;

  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.innerHTML = '<a href="index.html">Book store: checkout</a>';
  header.appendChild(title);

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
      checkoutItem.textContent = `${basketContainer[b]['book']['title']} - ${basketContainer[b]['book']['author']}: ${basketContainer[b]['amount']} pcs`;
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

  const checkoutAddressLabel = document.createElement('label')
  checkoutAddressLabel.textContent = 'Address:';
  const checkoutAddressInput = document.createElement('textarea');
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

  checkoutForm.appendChild(checkoutNameLabel);
  checkoutForm.appendChild(checkoutNameInput);
  const checkoutPay = document.createElement('div');
  checkoutPay.className = 'checkout__wrapper-pay';
  checkoutPay.textContent = 'Confirm and pay'
  checkoutPay.addEventListener('click', () => {
    const dataForm = document.forms['checkout'];
    const newOrder = {};
    if(Object.keys(basketContainer).length > 0){
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
  checkoutForm.appendChild(checkoutAddressLabel);
  checkoutForm.appendChild(checkoutAddressInput);
  checkoutForm.appendChild(checkoutPay);

  checkoutWrapper.appendChild(checkoutForm);
  // checkoutWrapper.appendChild(checkoutPay);
  main.appendChild(checkoutWrapper);
  
  const footer = document.createElement('footer');
  footer.innerHTML = '<a href="#" target="_blank" class="school"> <img src="../assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="../assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>'
  
  page.appendChild(header);
  page.appendChild(main);
  page.appendChild(footer);
}

function buildCheckout(){
  document.body.innerHTML = ''
  checkoutPage();
}

export { buildCheckout }