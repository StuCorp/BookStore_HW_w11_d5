var _ = require('lodash');

var Customer = function(money){
  this.money = money; 
  this.books = [];
};

Customer.prototype = {
  buy: function(book){
    if(book.price < this.money){
      this.books.push(book);
      this.money -= book.price;
    }
  },

  sell: function(book){
    this.money += book.price;
    return this.books.splice(this.books.indexOf(book),1);
  },

  totalValue: function(books){
    if(!books){
      return _.sumBy(this.books, function(book){
        return book.price;
      })
    } else {
      return _.sumBy(books, function(book){
        return book.price;
      })
    }
  },

  totalValueBy: function(criterion){
    return this.totalValue(_.filter(this.books, function(book){
      return book.genre === criterion; 
    }));
  },

  findLongest: function(){
    return _.maxBy(this.books, function(book){
      return book.length; 
    });
  }, 

  sortByValue: function(direction){

    this.books = _.sortBy(this.books, "price");
    if(direction==="descending"){
      this.books.reverse();
    }
  }, 

  compareCollection: function(customer){
    return _.round(this.totalValue() - customer.totalValue(), 2); 
  }




}

module.exports = Customer;

