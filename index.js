function fetchBooks() {
  let theBooks = fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then(function(data){
    return renderBooks(data);
  });
  return theBooks;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
