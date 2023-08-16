let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readingStatus = read),
    addBookToLibrary(this);
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readingStatus}  `;
  };
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj);
}

const thinkAndGrowRich = new Book(
  "Think and Grow Rich",
  "Napolean Hill",
  "150",
  "Not read"
);
//console.log(thinkAndGrowRich.info());
