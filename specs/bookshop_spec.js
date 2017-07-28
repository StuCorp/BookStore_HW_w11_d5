var assert = require('assert');
var BookShop = require('../bookshop.js');
var Book = require('../book.js');
var Customer = require('../customer.js');

describe('Book', function(){

var book;
var book2;
var book3;
var bookShop;

beforeEach(function(){

  book = new Book("Milan Kundera", "Immortality", "Philosophy", 5.99);
  book2 = new Book("Milan Kundera", "Immortality", "Philosophy", 5.99);
  book3 = new Book("Milan Kundera", "Immortality", "Philosophy", 5.99);
  bookShop = new BookShop("Big Als Record Store", "Prague", 500); 
})

it('Should have a name', function(){
  assert.strictEqual(bookShop.name, "Big Als Record Store");
});

it('Should have a location', function(){
  assert.strictEqual(bookShop.location, "Prague");
});

it('Should have a balance', function(){
  assert.strictEqual(bookShop.balance, 500);
});

it('Should have an inventory', function(){
  bookShop.add(book);
  bookShop.add(book2);
  bookShop.add(book3);
  assert.deepEqual(bookShop.inventory, [book, book2, book3]);
})

});