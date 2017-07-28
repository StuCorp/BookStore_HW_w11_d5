var assert = require('assert');
var BookShop = require('../bookshop.js');
var Book = require('../book.js');
var Customer = require('../customer.js');

describe('Book', function(){

var book;
var book2;
var book3;
var book4;
var bookShop;

beforeEach(function(){

  book = new Book("Milan Kundera", "Immortality", "Philosophy", 5.99);
  book2 = new Book("R L Stine", "Monster Blood", "Children's Horror", 24.99);
  book3 = new Book("Vinne Jones", "It's Been Emotional", "Biography", 1.99);
  book4 = new Book("Lil Kim", "The Price of Loyalty", "Biography", 3.49);

  bookShop = new BookShop("Big Al's Record Store", "Prague", 500); 

  bookShop.add(book);
  bookShop.add(book2);
  bookShop.add(book3);
})

it('Should have a name', function(){
  assert.strictEqual(bookShop.name, "Big Al's Record Store");
});

it('Should have a location', function(){
  assert.strictEqual(bookShop.location, "Prague");
});

it('Should have a balance', function(){
  assert.strictEqual(bookShop.balance, 500);
});

it('Should have an inventory', function(){
  
  assert.deepEqual(bookShop.inventory, [book, book2, book3]);
});

it('should be able to print out its book inventory', function(){
  assert.deepEqual(bookShop.printInventory(), ["Title: Immortality, Author: Milan Kundera, Genre: Philosophy, Price: £5.99", "Title: Monster Blood, Author: R L Stine, Genre: Children's Horror, Price: £24.99", "Title: It's Been Emotional, Author: Vinne Jones, Genre: Biography, Price: £1.99"]);
});

it('should be able to sell a book', function(){
  bookShop.sell(book);
  assert.strictEqual(bookShop.balance, 505.99);
  assert.strictEqual(bookShop.inventory.length, 2); 
  });

it('should report the financial situation of the shop', function(){ assert.strictEqual(bookShop.financialReport(), "Balance: £500, Inventory value: £32.97");
});

it('it should be able to display all books by genre', function(){
  bookShop.add(book4);
  assert.deepEqual(bookShop.findByCriterion("Biography"), ["Title: It's Been Emotional, Author: Vinne Jones, Genre: Biography, Price: £1.99", "Title: The Price of Loyalty, Author: Lil Kim, Genre: Biography, Price: £3.49"]);

  

});


});