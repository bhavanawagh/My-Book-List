// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoreBooks = [
      {
        title: 'Book One',
        author: 'Bhavana Wagh',
        isbn: '3454454'
      },
      {
        title: 'Book Two',
        author: 'Atul Chavan',
        isbn: '3454454'
      }
    ];

    const books = StoreBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
}

// Event: Display Books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
  document.querySelector('#book-form').addEventListener('submit', 
(e) => {
//Prevent acutal submit
e.preventDefault();

// Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

// Instatiate book
const book = new Book(title, author, isbn);

//Add Book to UI
 UI.addBookToList(book); 
});

