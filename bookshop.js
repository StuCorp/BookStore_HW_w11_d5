

var BookShop = function(name, location, balance){
  this.name = name;
  this.location = location;
  this.balance = balance; 
  this.inventory = []; 
};

// BookShop.prototype.add = function(book) {
// };


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
    return this.inventory.splice(0,1,book);
  }

}

module.exports = BookShop;