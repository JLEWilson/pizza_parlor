// Pizza business logic
function Pizza(size, sauce, cheese, toppings){
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.price = this.calculateTotal();
}

Pizza.prototype.calculatePrice = function(){
  let totalPrice = 0;
  // Base price determined by size
  switch (this.size){
    case ("Personal"):
      totalPrice += 10;
      break;
    case ("Small"):
      totalPrice += 12;
      break;
    case ("Medium"):
      totalPrice += 15;
      break;
    case ("Large"):
      totalPrice += 18;
      break;
    default:
    console.error("Pizza size property does not contain correct values");
  }
  //All sauces and no sauce will not affect the price
  // Charge extra for vegan cheeses
  switch (this.cheese){
    case ("Follow Your Heart"):
      totalPrice += 3;
      break;
    case ("Violife"):
      totalPrice += 2;
      break;
    default:
      // For other cheeses we don't adjust the price, no lowering, we are trying to make money after all.
    }
    // For every topping after the second, add 2 dollars to total
    for (i = 0; i < this.toppings.length; i ++)
    {
      if (i > 2){
        totalPrice += 2;
      }
    }
  return totalPrice;
};

// Order business logic
function Order(){
  this.pizzas = {};
  this.itemId = 0;
}
Order.prototype.assignId = function() {
  this.itemId += 1;
  return this.itemId;
};
Order.prototype.addPizzaToOrder = function(pizza){
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}
Order.prototype.findItem = function(id){
  if(this.pizzas[id] != undefined){
    return this.pizzas[id];
  }
  return false;
};
Order.prototype.deleteItem = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};
Order.prototype.calculateTotal = function(){
  let orderTotal = 0;
  for(i = 0; i < this.pizzas.length; i++){
    orderTotal += this.pizzas[i].price;
  }
  return orderTotal;
}
// UI logic

let newOrder = new Order();

function attachContactListeners(){
  $("#add-pizza").click(function(){
    const size = $("input:radio[name=size-radio]:checked").val();
    const sauce = $("input:radio[name=sauce-radio]:checked").val()
    const cheese = $("input:radio[name=cheese-radio]:checked").val()
    const toppings = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get(); // This should give us all checked checkboxes. get() lets us work with a basic array instead of a jquery object. This is great because now the toppings property will always be an array when assigned
    const newPizza = new Pizza(size, sauce, cheese, toppings);
    newOrder.addPizzaToOrder(newPizza);
  });
  $("ol#items-ordered").on("click", "li", function(){

  });
}

$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
  });
});