var BookShop = function(name, location, balance){
  this.name = name;
  this.location = location;
  this.balance = balance; 
  this.inventory = []; 
};

BookShop.prototype.add = function(book) {
  this.inventory.push(book);
};

module.exports = BookShop;