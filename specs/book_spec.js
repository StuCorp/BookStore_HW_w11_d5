var assert = require('assert');
var BookShop = require('../bookshop.js');
var Book = require('../book.js');
var Customer = require('../customer.js');

describe('Book', function(){

var book;

beforeEach(function(){

  book = new Book("Milan Kundera", "Immortality", "Philosophy", 5.99);
})

it('Should be have an author', function(){
  assert.strictEqual(book.author, "Milan Kundera");
});

it('should have a title', function(){
  assert.strictEqual(book.title, "Immortality");
})

it('should have a genre', function(){
  assert.strictEqual(book.genre, "Philosophy");
});

it('should have a price', function(){
  assert.strictEqual(book.price, 5.99);
});

it('should be able to print out its properties as a string', function(){
  assert.strictEqual(book.printProperties(), "Title: Immortality, Author: Milan Kundera, Genre: Philosophy, Price: £5.99");
});

});