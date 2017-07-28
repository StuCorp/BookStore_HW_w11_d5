
var Book = function(author, title, genre, price){
  this.author = author;
  this.title = title; 
  this.genre = genre; 
  this.price = price; 
};

Book.prototype.printProperties = function() {
  return "Title: " + this.title + ", Author: " + this.author + ", Genre: " + this.genre + ", Price: £" + this.price; 
};

module.exports = Book;