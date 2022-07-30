import { shadow } from "./shadow";

function bookInfo(book){
  const main = document.querySelector('main');
  const modal = document.createElement('div');
  modal.className = 'modal__window';
  const modalClose = document.createElement('div');
  modalClose.className = 'modal__window-close';
  modalClose.innerHTML = '&times;'
  modalClose.addEventListener('click', () => {
    main.removeChild(modal);
    shadow(0);
  })
  const bookImage = document.createElement('img');
  bookImage.src = book['imageLink'];
  const modalInfo = document.createElement('ul');
  modalInfo.className = 'modal__window-info';
  const bookTitle = document.createElement('li');
  bookTitle.className = 'modal__window__title'
  bookTitle.textContent = book['title'];
  const bookAuthor = document.createElement('li');
  bookAuthor.className = 'modal__window__author'
  bookAuthor.textContent = book['author'];
  const bookCountry = document.createElement('li');
  bookCountry.textContent = book['country'];
  bookCountry.className = 'modal__window-country';
  const bookLanguage = document.createElement('li');
  bookLanguage.className = 'modal__window-language';
  bookLanguage.textContent = book['language'];
  const bookYear = document.createElement('li');
  bookYear.className = 'modal__window-year';
  bookYear.textContent = book['year'];
  const bookPages = document.createElement('li');
  bookPages.className = 'modal__window-pages';
  bookPages.textContent = book['pages'];
  const bookLink = document.createElement('li');
  bookLink.className = 'modal__window-link';
  bookLink.innerHTML = `<a href='${book['link']}' target='_blank'>Wikipedia</a>`;
  const bookBuy = document.createElement('div');
  bookBuy.className = 'modal__window-buy';
  bookBuy.textContent = 'Add to cart';
  bookBuy.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(`add to basket ${book['id']}`)
  })

  modalInfo.appendChild(bookTitle);
  modalInfo.appendChild(bookAuthor);
  modalInfo.appendChild(bookYear)
  modalInfo.appendChild(bookCountry);
  modalInfo.appendChild(bookLanguage);
  modalInfo.appendChild(bookPages);
  modalInfo.appendChild(bookLink);
  modalInfo.appendChild(bookBuy);

  modal.appendChild(modalClose);
  modal.appendChild(bookImage)
  modal.appendChild(modalInfo);

  main.appendChild(modal);
  shadow(1);
}

export { bookInfo }