# _Pizza Parlor_

#### By _**Jacob Wilson**_

#### _A brief description of the project._

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_

## Description

_A detailed description of the project._

## Setup/Installation Requirements

Leave nothing to chance!

* _You can find the github repository [here]()_
* _Clone the repository to your computer_
* _Open the index.html file in a browser_
* _OR_
* _You can find the project on github pages[here]()_

## Known Bugs

* _No known bugs_

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with properties for Size, Cheese, Sauce, and Toppings"
Code: const myPizza = new Pizza ("Large", "Mozzarella-Blend", "Vodka-Cream",      ["Pepperoni", "Olive", Mushrooms"]);
Expected Output: Pizza {Size: "Large", Cheese: "Mozzarella-Blend", Sauce: "Vodka-Cream", Toppings: ["Pepperoni", "Olive", Mushrooms"]}

Test: "It should assign price property as .calculatePrice()
Code: let myPizza = new Pizza("Large", "House Red", "Violife", ["Pepperoni", "Sausage", "Anchovies", "Roasted Garlic]);
      myPizza.price
Expected Output: 24;

Describe: Pizza.prototype.calculatePrice()

Test: "It should return all key value pairs on the pizza"
Code  let myPizza = new Pizza();
      myPizza.calculatePrice();
Expected Output: Pizza {size: undefined, sauce: undefined, cheese: undefined, toppings: undefined}

Test: "It should return totalPrice based on size property."
Code: let myPizza = new Pizza("Large");
      myPizza.calculatePrice();
Expected Output : 18

Test: "It should return totalPrice based on size and Cheese properties."
Code: let myPizza = new Pizza("Large", "House Red", "Violife");
      myPizza.calculatePrice();
Expected Output : 20
Note: Charging extra for vegan cheeses.

Test: "It will add 2 for every element in the topping property array after the 2nd"
Code: let myPizza = new Pizza("Large", "House Red", "Violife", ["Pepperoni", "Sausage", "Anchovies", "Roasted Garlic]);
      myPizza.calculatePrice();
Expected Output : 24

Describe: Order();

Test: "It should return an object with a property of pizzas an empty array"
Code: let myOrder = new Order;
      myOrder;
Expected Output Order {pizzas: []}

Describe: Order.prototype.assignId()

Test: "Will assign a unique Id for each pizza added to the order."
Code: let myOrder = new Order;
      let myPizza = new Pizza();
      myOrder.addPizzaToOrder(myPizza);
      myOrder.pizzas{}
Expected Output: pizzas: Pizza {myPizza{}}
Note: Created addPizzaToOrder here, functions work in tandem.

Describe: Order.prototype.addPizzaToOrder(pizza)

Test: "It should add a pizza object to order.pizzas."
Code: let myOrder = new Order;
      let myPizza = new Pizza();
      myOrder.addPizzaToOrder(myPizza);
      myOrder.Pizzas
Expected Result: pizzas {Pizza myPizza{...}}

Describe: Order.prototype.findItem

Test: "It should return false if the item id is undefined.
Code: myOrder.findItem(1);
Expected Output: false;

Test: "It should return the item in this.Pizzas if it is defined."
Code: myOrder.findItem(1);
Expected Output:

Describe: Order.prototype.deleteItem(id)

Test: "It should return false if the item id is undefined.
Code: myOrder.deleteItem(1);
Expected Output: false;

Test: "It should remove the item by id from this.pizzas and return true if it exists"
Code: myOrder.deleteItem(1);
Expected Output: true

Describe: Order.prototype.calculateTotal()

Test: "It should return Order.pizzas."
Code: let myOrder = new Order;
      myOrder.addPizzaToOrder(myPizza);
      myOrder.calculateTotal();
Expected Output: Order{myPizza...}

Test


## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a separate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _11/05/2021_ _Jacob Wilson(s)_