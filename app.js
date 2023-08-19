let myLibrary = [];
// default data
const thinkAndGrowRich = new Book(
  "Think and Grow Rich",
  "Napolean Hill",
  "150",
  "Not read"
);

// constructor
function Book(title, author, pages, status) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status);
}

function addBookToLibrary() {
  if (title.value.length === 0 || author.value.length === 0) {
    alert("Please, fill all the fields");
    return;
  }
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read_status.value
  );
  myLibrary.push(newBook);
}

//console.log(thinkAndGrowRich.info());

// const submitBtn = document.querySelector("#submitBtn");
// submitBtn.addEventListener("click", addBookToLibrary);

// const newBookBtn = document.querySelector("#new-book");
// newBookBtn.addEventListener("click", popupDisplay);

// const popUpForm = document.getElementById("popup");

// const closePopUp = document.getElementById("close-popUp");
// closePopUp.addEventListener("click", popupDisplay);

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read_status = document.querySelector("#read-status");

const bookForm = document
  .querySelector("form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
  });

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read_status.value = "";
}

function render() {
  const display = document.getElementById("display-container");

  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

function createBook(item) {
  const bookShelf = document.querySelector("#display-container");
  const bookCard = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.classList.add("book");
  bookCard.setAttribute("id", myLibrary.indexOf(item));

  title.textContent = item.title;
  title.classList.add("title");
  bookCard.appendChild(title);

  author.textContent = item.author;
  author.classList.add("author");
  bookCard.appendChild(author);

  pages.textContent = item.pages;
  pages.classList.add("pages");
  bookCard.appendChild(pages);

  readBtn.classList.add("readBtn");
  bookCard.appendChild(readBtn);
  if (item.read === false) {
    readBtn.textContent = "Not Read";
    readBtn.style.backgroundColor = "#e04f63";
  } else {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = "#63da63";
  }

  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("id", "removeBtn");
  bookCard.appendChild(removeBtn);

  bookShelf.appendChild(bookCard);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render();
  });

  readBtn.addEventListener("click", () => {
    item.read = !item.read;
    render();
  });
}
