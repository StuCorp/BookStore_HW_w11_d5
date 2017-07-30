var assert = require('assert');
var BookShop = require('../bookshop.js');
var ControversialBook = require('../controversial_book.js');
var Customer = require('../customer.js');

describe('ControversialBook', function(){

var controversialBook;

beforeEach(function(){

  controversialBook = new ControversialBook("Milan Kundera", "Immortality", "Philosophy", 5.99, 358);
})

it('Should be have an author', function(){
  assert.strictEqual(controversialBook.author, "Milan Kundera");
});

it('should have a title', function(){
  assert.strictEqual(controversialBook.title, "Immortality");
})

it('should have a genre', function(){
  assert.strictEqual(controversialBook.genre, "Philosophy");
});

it('should have a price', function(){
  assert.strictEqual(controversialBook.price, 5.99);
});

it('should be able to print out its properties as a string', function(){
  assert.strictEqual(controversialBook.printProperties(), "Title: Immortality, Author: Milan Kundera, Genre: Philosophy, Price: £5.99");
});

it('should have a length in pages', function(){
  assert.strictEqual(controversialBook.length, 358);
});

});