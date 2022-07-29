import { getData } from './sources';

const page = document.body;

function createPage(){
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Book store'
  header.appendChild(title);
  
  const nav = document.createElement('nav');
  const searchWrapper = document.createElement('div');
  searchWrapper.className = 'nav__search';
  searchWrapper.innerHTML = '<label for="search">Search:</label> <input type="search" name="search" id="search" autofocus autocomplete="off">';
  const basket = document.createElement('div');
  basket.className = 'basket';
  basket.innerHTML = '<img src="../assets/icons/basket.png" alt="shopping cart">';
  basket.addEventListener('click', () => {
    console.log('basket');
  })
  nav.appendChild(searchWrapper);
  nav.appendChild(basket);
  
  const main = document.createElement('main');
  
  const footer = document.createElement('footer');
  footer.innerHTML = '<a href="#" target="_blank" class="school"> <img src="../assets/icons/school.png" alt="UpSkill Me"> <span>UpSkill Me</span> </a> <a href="https://github.com/emp74ark" target="_blank" class="git"> <img src="../assets/icons/github.png" alt="Github"> <span>emp74ark</span> </a>'
  
  page.appendChild(header);
  page.appendChild(nav);
  page.appendChild(main);
  page.appendChild(footer);
}

function createElement(book) {
  const bookWrapper = document.createElement('div');
  bookWrapper.className = 'book'
  const bookImage = document.createElement('img');
  bookImage.className = 'book__image'
  bookImage.src = book['imageLink'];
  const bookTitle = document.createElement('span');
  bookTitle.className = 'book__title'
  bookTitle.textContent = book['title'];
  const bookAuthor = document.createElement('span');
  bookAuthor.className = 'book__author'
  bookAuthor.textContent = book['author'];
  const bookInfo = document.createElement('div');
  bookInfo.className = 'book__info'
  bookInfo.textContent = '?'
  bookInfo.addEventListener('click', () => {
    console.log('book info modal window')
  })
  const bookBuy = document.createElement('div');
  bookBuy.className = 'book__buy';
  bookBuy.textContent = 'Add to cart';
  bookBuy.addEventListener('click', () => {
    console.log('add to basket')
  })
  
  bookWrapper.appendChild(bookImage);
  bookWrapper.appendChild(bookTitle);
  bookWrapper.appendChild(bookAuthor);
  bookWrapper.appendChild(bookInfo);
  bookWrapper.appendChild(bookBuy);

  const main = document.querySelector('main');
  main.appendChild(bookWrapper)
}

async function buildPage(){
  createPage();
  const booksData = await getData();
  booksData.forEach((el) => {
    createElement(el);
  })
}

export { buildPage }