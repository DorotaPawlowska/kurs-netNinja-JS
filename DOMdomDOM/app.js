const wmf = document.querySelector('#book-list li:nth-child(2) .name');

var books = document.querySelector('#book-list li .name');

books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function (t) {
    console.log(t);
})