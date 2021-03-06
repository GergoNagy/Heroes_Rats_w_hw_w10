var assert = require('assert');
var Food = require('../food.js');

describe("Food", function(){

    var food1;
    var food2;
    var food3;
    var food4;

    beforeEach(function(){
        food1 = new Food("bread", 15, false);
        food2 = new Food("chees", 5, false);
        food3 = new Food("cake", 25, false);
        food4 = new Food("pizza", 20, false);
    })

    it("food should be has name", function(){
        assert.strictEqual(food1.name, "bread")
    })

    it("food should has replenishment", function(){
        assert.strictEqual(food2.replenishment, 5)
    })
})