{
  'use strict';

  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },
    containerOf: {
      booksList: '.books-list',
    },
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

}
