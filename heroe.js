var Food = require('./food.js');
var Task = require('./task.js');
var Rat = require('./rat.js');

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

        if (food.poisoned === true ){
            newHelathLevel = this.health - 10;
        } else if (this.favFood === food.name){
            newHelathLevel = this.health + favFoodcounter;
        } else {
            newHelathLevel =  this.health + food.replenishment;
        }
       return this.health = newHelathLevel;
       
    },

    addTask: function(task){
        return this.task.push(task)
    },

    completTask: function(task){
         for (element of this.task){
            if ( task.name === element.name){
                element.taskStatus = true;
            }
            return element.taskStatus;
        }
    }


}

module.exports = Heroe;