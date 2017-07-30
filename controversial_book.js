var path = require('path');
var Book = require( path.resolve( __dirname, "./book.js" ) );


var ControversialBook = function(author, title, genre, price, length){
  Book.call(this, author, title, genre, price, length);
};

ControversialBook.prototype = Object.create(Book.prototype);

ControversialBook.prototype.constructor = Book;



module.exports = ControversialBook;