import { buildPage } from './layout'
import { orders } from './checkout';

function lastPage(){
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
  const navTitle = document.createElement('h2');
  navTitle.innerHTML = '<h2>Your order</h2>'
  nav.appendChild(home);
  nav.appendChild(navTitle);

  const main = document.createElement('main');

  const ordersList = document.createElement('ol');
  ordersList.className = 'orders__list';
  for (let i = orders.length - 1; i >= 0; i--){
    const orderItem = document.createElement('li');
    orderItem.textContent = orders[i][3][1].replace('T', ' ')
    for (let j = 0; j < orders[i].length; j++){
      const orderContent = document.createElement('div');
      orderContent.className = 'orders__list-content';
      orderContent.innerHTML = `<b>${orders[i][j][0]}:</b> ${orders[i][j][1]}`
      orderItem.appendChild(orderContent);
    }
    ordersList.appendChild(orderItem);
  }

  main.appendChild(ordersList);
  
  const footer = document.createElement('footer');
  footer.innerHTML = '<a href="#" target="_blank" class="school"> <img src="../assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="../assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>'
  
  page.appendChild(header);
  page.appendChild(nav);
  page.appendChild(main);
  page.appendChild(footer);
}

function buildLast(){
  document.body.innerHTML = ''
  lastPage();
}

export { buildLast }