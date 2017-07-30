var assert = require('assert');
var BookShop = require('../bookshop.js');
var Book = require('../book.js');
var ControversialBook = require('../controversial_book.js');
var Customer = require('../customer.js');
var AngryCustomer = require('../angry_customer.js');

describe('AngryCustomer', function(){

  var angryCustomer; 
  var controversialBook;
  var book; 

beforeEach(function(){
  angryCustomer = new AngryCustomer(110);
  controversialBook = new ControversialBook("Prof Tash", "Dino babies can't has babies and here's why", "Absurdism", 0.50, 14800);
  book = new Book("Milan Kundera", "Immortality", "Philosophy", 5.99, 358);

})

it('should be able to exist as an extended customer', function(){
  assert.strictEqual(angryCustomer.money, 110);
}); 

it('should be able to burn controversial books', function(){
  assert.strictEqual(angryCustomer.burn(controversialBook), "up goes Dino babies can't has babies and here's why - a really controversial book!");
  assert.strictEqual(angryCustomer.burn(book), undefined);

});

it('should be able to deface a controversial book, ripping out a random number of pages', function(){
  var originalLength = controversialBook.length; 
  angryCustomer.attackBook(controversialBook);
  assert.ok(controversialBook.length < originalLength);
  originalLength = book.length;
  angryCustomer.attackBook(book);
  assert.ok(book.length === originalLength)
});


it('should, if it tries to read a controversial book, return an appropriate String, and stop immediately. e.g. "Oh my days!"', function(){
  assert.strictEqual(angryCustomer.read(controversialBook),"MINE VERY EYES!"); 
  assert.strictEqual(angryCustomer.read(book),"dum de dum de dum dum"); 

  });

})