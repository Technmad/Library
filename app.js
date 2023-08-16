let myLibrary = [];
let newBook;

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readingStatus = read),
    // addBookToLibrary(this);
    (this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readingStatus}  `;
    });
}

function addBookToLibrary() {
  preventDefault();
  popUpForm.style.display = "none";
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const thinkAndGrowRich = new Book(
  "Think and Grow Rich",
  "Napolean Hill",
  "150",
  "Not read"
);
//console.log(thinkAndGrowRich.info());

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", addBookToLibrary);

const newBookBtn = document.querySelector("#new-book");
newBookBtn.addEventListener("click", popupDisplay);

const popUpForm = document.getElementById("popup");

const closePopUp = document.getElementById("close-popUp");
closePopUp.addEventListener("click", popupDisplay);
