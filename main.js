const myLibrary = [];
const booksDisplay = document.getElementById("book-display");
const bookFormPopUp = document.getElementById("bookFormPopUp");
const bookForm = document.getElementById("bookForm");


window.onload = displayLibrary

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(aBook) {
    if (!checkIfTitleInLibrary(aBook)) {
        myLibrary.push(aBook);
    }
}

function checkIfTitleInLibrary(aBook) {
    for (const book of myLibrary) {
        if (book.title == aBook.title && book.author == aBook.author) {
            alert(`The book '${book.title}' aleady exists in your library.`);
            return true;
            
        }
    }
    return false
}

function displayLibrary() {

    //const newBook = new Book("Test Title", "Test Author", 111, true);
    //const otherBook = new Book("Test Title 2", "Test Author 2", 222, false);

    //addBookToLibrary(newBook);
    //addBookToLibrary(otherBook);

    removeElementsByClass("bookCard")

    for (const book of myLibrary) {
        displayBookAsCard(book);
    }

}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
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

    const bookIndex = myLibrary.indexOf(aBook);

    bookCard.dataset.bookIndex = bookIndex;

    bookTitle.textContent += aBook.title;
    bookAuthor.textContent += aBook.author;
    bookPages.textContent += `${aBook.pages} pages`;
    if (aBook.read == true) {
        bookRead.textContent += "Read";
        bookRead.classList.add("book-read");
    } else {
        bookRead.textContent += "Not Read";
        bookRead.classList.add("book-not-read");
    }
    bookRead.onclick = function() {
        updateReadStatus(this)
    }
    bookRemove.textContent += "Remove";
    bookRemove.onclick = function() {
        removeBookCard(this);
    };

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(bookRemove);

    booksDisplay.appendChild(bookCard);
}

function openForm() {
    bookFormPopUp.style.display = "block";
}

function closeForm() {
    bookFormPopUp.style.display = "none";
}

const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    return new Book(title, author, pages, read)
}

function removeBookCard(bookRemove) {

    bookIndex = bookRemove.parentNode.dataset.bookIndex

    myLibrary.splice(bookIndex, 1)

    displayLibrary();
}

function updateReadStatus(bookRead) {
    
    if (bookRead.classList.contains("book-not-read")) {
        bookRead.textContent = "Read";
        bookRead.classList.remove("book-not-read");
        bookRead.classList.add("book-read");
    } else {
        bookRead.textContent = "Not Read";
        bookRead.classList.remove("book-read");
        bookRead.classList.add("book-not-read");
    }
}

function bookFormSubmit() {
    const newBook = getBookFromInput()
    addBookToLibrary(newBook);
    ///alert(`New Book '${newBook.title}' added to your library.`);
    displayLibrary();
    bookForm.reset();
    closeForm();

}