var Food = require('./food.js');
var Task = require('./task.js');

var Heroe = function(name, health, favFood){
    this.name = name;
    this.health = health;
    this.favFood = favFood;
    this.speak = function(){
        return "My name is " + this.name;
    }
    this.task = [];

}

Heroe.prototype = {
    eatFood: function(food){
       var newHelathLevel =  this.health + food.replenishment;
       return this.health = newHelathLevel;
    }
}

module.exports = Heroe;