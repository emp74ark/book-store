import { basketContainer } from "./basket";

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
  checkoutForm.action = '#'
  checkoutForm.method = 'post'
  checkoutForm.innerHTML = '<label for="buyer-name">Name</label> <input type="text" name="buyer-name" id="buyer-name" placeholder="Your name"> <label for="buyer-email">Email</label> <input type="email" name="buyer-email" id="buyer-email" placeholder="name@email.com"> <label for="buyer-address">Address</label> <input type="text" name="buyer-address" id="buyer-address" minlength="300" placeholder="City, Street, Building number">'
  const checkoutPay = document.createElement('div');
  checkoutPay.className = 'checkout__wrapper-pay';
  checkoutPay.textContent = 'Confirm and pay'
  checkoutPay.addEventListener('click', () => {
    console.log('pay')
  })
  checkoutWrapper.appendChild(checkoutForm);
  checkoutWrapper.appendChild(checkoutPay);
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