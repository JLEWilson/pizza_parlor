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
  this.pizzas = [];
}

Order.prototype.calculateTotal = function(){
  let orderTotal = 0
  for(i = 0; i < this.pizzas.length; i++){
    orderTotal += this.pizzas[i].price;
  }
  return orderTotal;
}

Order.prototype.addPizzaToOrder = function(pizza){
  this.pizzas.push(pizza);
}

// UI logic



$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
  });
});