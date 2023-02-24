const myLibrary = [];
const booksDisplay = document.getElementById("book-display")

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(aBook) {
    if (!myLibrary.includes(aBook)) {
        myLibrary.push(aBook);
    }
}

function displayLibrary() {

    const newBook = new Book("Test Title", "Test Author", 111, true);
    const otherBook = new Book("Test Title 2", "Test Author 2", 222, false);

    addBookToLibrary(newBook);
    addBookToLibrary(otherBook);

    for (const book of myLibrary) {
        displayBookAsCard(book);
    }

}

function displayBookAsCard(aBook) {
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookRead = document.createElement('button');
    const bookRemove = document.createElement('button');

    bookCard.classList.add("bookCard");
    bookTitle.classList.add("bookTitle");
    bookAuthor.classList.add("bookAuthor");
    bookPages.classList.add("bookPages");
    bookRead.classList.add("btn");
    bookRemove.classList.add("btn");

    bookTitle.textContent += aBook.title;
    bookAuthor.textContent += aBook.author;
    bookPages.textContent += `${aBook.pages} pages`;
    if (aBook.read = true) {
        bookRead.textContent += "Read";
        bookRead.classList.add("book-read");
    } else {
        bookRead.textContent += "Not Read";
        bookRead.classList.add("book-not-read");
    }
    bookRemove.textContent += "Remove";

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(bookRemove);

    booksDisplay.appendChild(bookCard);

}

window.onload = displayLibrary

function openForm() {
  document.getElementById("bookForm").style.display = "block";
}

function closeForm() {
  document.getElementById("bookForm").style.display = "none";
}