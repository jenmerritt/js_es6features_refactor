
export default class Library {
  constructor(books = []){
    this.books = books;
  }

  bookCount(){
    return this.books.length;
  }

  addBook(newBook){
    this.books.push(newBook);
  }

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  }

// testing via just seeing it logged out:

    printInventory(){
      this.books.forEach(({title, author}) => {
        console.log(`${title} by ${author}`);
      });
    }

  };

///// testing to assert against a string:

    // printInventory(){
    //   let string = "";
    //   this.books.forEach(({title, author}) => {
    //     string = `${title} by ${author}`;
    //   });
    //   return string;
    // }


/// Refactored code:

  // printInventory(){
  //   this.books.forEach((book) => {
  //     console.log(`${book.title} by ${book.author}`);
  //   });
  // }


// const Library = function (books = []) {
//   this.books = books;
// };

// Library.prototype.bookCount = function () {
//   return this.books.length;
// };

// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };

// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };
//
// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

// module.exports = Library;
