// Write your code here

class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      // Dessert is a private field, can't be directly tested
      this._dessert = dessert;
    }
  }
  
  // Export the classes for testing
  module.exports = { Breakfast, Lunch, Dinner };
  