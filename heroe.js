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
    //addblabla: fun (bla){}
}

module.exports = Heroe;