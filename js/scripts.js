// Pizza business logic
function Pizza(size, sauce, cheese, toppings){
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
}

Pizza.prototype.calculateTotal = function(){
  return this;
};

// UI logic



$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    const size = $("input:radio[name=size-radio]:checked").val();
    console.log(size);
  });
});