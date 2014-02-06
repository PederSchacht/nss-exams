/* exported Person */

var Person = (function(){

  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.foods = [];
    this.caloriesConsumed = 0;
    this.counter = 0;
    this.gainedWeight = 0;
    this.lostWeight = 0;
  }

  Person.prototype.eat = function(food, servings){
    this.foods.push(food);
    var calories = 0;
    calories += food.caloriesPerServing * servings;
    this.gainedWeight += calories / 3500;
    if(this.gainedWeight >= 1){
      for (var i = 1; i < this.gainedWeight; i++){
        this.counter ++;
      }
      this.gainedWeight -= this.counter;
      this.weight += this.counter;
    }
    this.counter = 0;
  };

/* Chylds eat code (doesn't take small meals under 1500 calories into consideration)
 Person.prototype.eat = function(food, servings){
   this.foods.push(food);
   var calories = food.caloriesPerServing * servings;
   var pounds = calories / 3500;
   this.weight += Math.round(pounds);
 };
*/

  Person.prototype.exercise = function(){
  };

  return Person;
})();
