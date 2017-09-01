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
        var newHelathLevel = 0;
        var favFoodcounter = food.replenishment * 1.5;

        if(this.favFood == food.name){
            newHelathLevel = this.health + favFoodcounter;
        } else {
        var newHelathLevel =  this.health + food.replenishment;
        }
       return this.health = newHelathLevel;
    },

    addTask: function(task){
        return this.task.push(task)
    }
}

module.exports = Heroe;