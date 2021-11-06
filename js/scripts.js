// Pizza business logic
function Pizza(size, sauce, cheese, toppings){
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.price = this.calculatePrice();
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
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
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


function showItemDetails(itemId){
  const item = newOrder.findItem(itemId);
  $("#size" + itemId).html("Size: " + item.size);
  $("#sauce" + itemId).html("Sauce: " + item.sauce);
  $("#cheese" + itemId).html("Cheese: " + item.cheese);
  if(item.toppings.length === 0){
    // We don't want to do anything here
  } else{
    $("#ingredients" + itemId).html("Toppings: ");
    let htmlForToppings = "";
    item.toppings.forEach(function(topping){
      htmlForToppings += "<li>" + topping + "</li>"
    });
    $("#ingredientsList" + itemId).html(htmlForToppings);
  }
  
}
function attachContactListeners(){
  $("#items-ordered").on("click", "button", function() {
    let itemId = this.id.replace(/button/, ""); //Added button to buttonId to prevent id duplicates, this button from the id so we can use it in deleteItem()
    newOrder.deleteItem(itemId);
    $(this).closest("h3").remove();
  });
  $("#items-ordered").on("click", "h3", function() {
    showItemDetails(this.id);
  });
}
function displayOrderItems(orderToDisplay){
  let itemList = $("ol#items-ordered");
  let htmlForItem = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key){
  const item = orderToDisplay.findItem(key);
  const htmlForButton = "<button class='btn btn-dark item-ordered' id='button" + item.id + "' type='button'>" + "X" +"</button>";
  const htmlForIngredients = "<p class='ingredientsP' id='size" + item.id +"'></p><p class='ingredientsP' id='sauce" + item.id +"'></p><p class='ingredientsP' id='cheese" + item.id +"'></p><p id='ingredients" + item.id +"'></p><ol id=ingredientsList" + item.id + ">"
  htmlForItem += "<h3 id=" + item.id + ">" + "Custom Pizza " + item.id + htmlForButton + "</h3>" + htmlForIngredients;
 });
  itemList.html(htmlForItem);
}
$(document).ready(function(){
  attachContactListeners();
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    const size = $("input:radio[name=size-radio]:checked").val();
    const sauce = $("input:radio[name=sauce-radio]:checked").val()
    const cheese = $("input:radio[name=cheese-radio]:checked").val()
    const toppings = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get(); // This should give us all checked checkboxes. get() lets us work with a basic array instead of a jquery object. This is great because now the toppings property will always be an array when assigned
    const newPizza = new Pizza(size, sauce, cheese, toppings);
    newOrder.addPizzaToOrder(newPizza);
    displayOrderItems(newOrder);
  });
  $('#order-form').submit(function(event){

  });
});

/* Things to add
  css styling, color images etc
  complete readme
  allow click on order item to display ingredients
*/