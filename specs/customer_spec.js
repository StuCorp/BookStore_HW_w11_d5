var assert = require('assert');
var BookShop = require('../bookshop.js');
var Book = require('../book.js');
var Customer = require('../customer.js');

describe('Customer', function(){

  var book;
  var book2;
  var book3;
  var book4;
  var bookShop;
  var customer;
  var customer2;

  beforeEach(function(){ 
    customer = new Customer(20);
    customer2 = new Customer(100);
    book = new Book("Milan Kundera", "Immortality", "Philosophy", 5.99, 358);
    book2 = new Book("R L Stine", "Monster Blood", "Children's Horror", 24.99, 140);
    book3 = new Book("Vinne Jones", "It's Been Emotional", "Biography", 1.99, 507);
    book4 = new Book("Lil Kim", "The Price of Loyalty", "Biography", 3.49, 245);    
    bookShop = new BookShop("Big Al's Record Store", "Prague", 500); 

    bookShop.add(book);
    bookShop.add(book2);
    bookShop.add(book3);
    bookShop.add(book4);

  })

  it('should have an amount of money to spend', function(){
    assert.strictEqual(customer.money, 20);
  });

  it('should buy books', function(){
    customer.buy(book);
    assert.strictEqual(customer.books[0], book);
    assert.strictEqual(customer.money, 14.01);
  });


  it('should sell books', function(){
    customer.buy(book);
    customer.sell(book);
    assert.deepEqual(customer.books, []);
    assert.strictEqual(customer.money, 20.0);
  });

  it('The BookWorm shouldnt be able to buy a Book if they cant afford it.', function(){
    customer.money = 0; 
    customer.buy(book);
    assert.deepEqual(customer.books, []);
  }); 


  it('The BookWorm should be able to view the total value of their collection', function(){
    customer.buy(book);
    customer.buy(book3);
    assert.strictEqual(customer.totalValue(), 7.98);
  }); 

  it('The BookWorm should be able to view the total value of all books of a given Genre', function(){
    customer.money = 100; 
    customer.buy(book);
    customer.buy(book2);
    customer.buy(book3);
    customer.buy(book4);
    customer.buy(book);
    assert.strictEqual(customer.totalValueBy("Biography"), 5.48);
  }); 

  it('The BookWorm should be able to view their longest book.', function(){
    customer.money = 100; 
    customer.buy(book);
    customer.buy(book2);
    customer.buy(book3);
    customer.buy(book4);
    customer.buy(book);
    assert.strictEqual(customer.findLongest(), book3); 
  });

  it('The BookWorm should be able to sort their books by value. (ascending or descending)', function(){
    customer.money = 100; 
    customer.buy(book);
    customer.buy(book2);
    customer.buy(book3);
    customer.buy(book4);
    customer.sortByValue("descending");
    assert.deepEqual(customer.books, [book2, book, book4, book3]);
    customer.sortByValue("ascending");
    assert.deepEqual(customer.books, [book3, book4, book, book2]);
    // assert.deepEqual(customer.books, [book, book2, book3, book4]);

  });

  it('The BookWorm should be able to compare the value of their collection with another BookWorm', function(){ 
    customer.money = 100; 
  customer.buy(book);
  customer.buy(book2);
  customer2.buy(book);
  customer2.buy(book2);
  customer2.buy(book2);
  assert.strictEqual(customer.compareCollection(customer2), -24.99); 
  assert.strictEqual(customer2.compareCollection(customer), 24.99); 
  });


});
