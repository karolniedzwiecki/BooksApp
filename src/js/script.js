{
  'use strict';

  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },
    containerOf: {
      booksList: '.books-list',
    },
    booksCover: {
      images: '.books-list .book_image',
    }
  };

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };

  function render() {

    /* loop after each item - Book from dataSource.books */
    for (let book of dataSource.books) {
      /* generate HTML from template and data about a specific book */
      const generatedHTML = templates.bookTemplate(book);
      /* generating DOM element from HTML */
      const element = utils.createDOMFromHTML(generatedHTML);
      /* find booksList container and join as a new DOM child to .books-list */
      const booksListContainer = document.querySelector(select.containerOf.booksList);
      booksListContainer.appendChild(element);
    }
  }
  render();

  const favoriteBooks = [];

  function initActions(){

    const booksContainer = document.querySelector(select.containerOf.booksList);
    const booksImage = booksContainer.querySelectorAll('.book__image');
    console.log(booksImage);
    /* loop after each booksImage item */
    for (let image of booksImage) {
      image.addEventListener('dblclick', function (event) {
        event.preventDefault();
        const image = event.target.offsetParent;
        const idBook = image.getAttribute('data-id');
        if (!favoriteBooks.includes(idBook)) {
          image.classList.add('favorite');
          favoriteBooks.push(idBook);
        } else {
          image.classList.remove('favorite');
          favoriteBooks.splice(favoriteBooks.indexOf(idBook), 1);
        }
      });
    }
  }
  initActions();
}
