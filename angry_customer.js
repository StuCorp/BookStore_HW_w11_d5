var _ = require('lodash');
var path = require('path');
var Customer = require( path.resolve( __dirname, "./customer.js" ) );
var ControversialBook = require( path.resolve( __dirname, "./controversial_book.js" ) );


var AngryCustomer  = function(money){
  Customer.call(this, money);
};

AngryCustomer.prototype = {

  burn: function(book){
    if(book instanceof ControversialBook){
      return "up goes " + book.title + " - a really controversial book!";
    }
  }, 

  attackBook: function(book){
    if(book instanceof ControversialBook){
      var max = book.length;
      var min = 1; 
      book.length -= Math.random() * (max - min) + min;
    }
  },

read: function(book){
  if(book instanceof ControversialBook){
    return "MINE VERY EYES!"; 
  }
  else{
    return "dum de dum de dum dum";
  }
}




};



module.exports = AngryCustomer;