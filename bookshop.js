var _ = require('lodash');

var BookShop = function(name, location, balance){
  this.name = name;
  this.location = location;
  this.balance = balance; 
  this.inventory = []; 
};


BookShop.prototype = {

  add: function(book){
    this.inventory.push(book);
  },


  printInventory: function(){
    var inventoryPrint =[];
    this.inventory.forEach(function(book){
      inventoryPrint.push(book.printProperties());
    });
    return inventoryPrint;
  },

  sell: function(book){
    this.balance += book.price; 
    return this.inventory.splice(this.inventory.indexOf(book),1);
  },

  financialReport: function(){
    var inventoryValue = _.sumBy(this.inventory, function(book){
      return book.price;
    });
    return "Balance: £" + this.balance + ", Inventory value: £" + inventoryValue;
  },


  findByCriterion: function(criterion){
    var filtered= [];
    var booksOfInterest = _.filter(this.inventory, function(book){
      return book.genre === criterion;
    });
     _.forEach(booksOfInterest, function(book){
      filtered.push(book.printProperties());
     });
     return filtered;
  },



}

module.exports = BookShop;