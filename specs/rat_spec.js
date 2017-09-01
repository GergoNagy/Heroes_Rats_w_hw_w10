var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');

describe("Rat", function () {
    var rat;
    var food1;
    var food2;
    var food3;
    var food4;

    beforeEach(function () {
        rat = new Rat()
        food1 = new Food("bread", 15, false);
        food2 = new Food("chees", 5, false);
        food3 = new Food("cake", 25, false);
        food4 = new Food("pizza", 20, false);
    })

    it("cat can posion food", function(){
        rat.touchFood(food1);
        assert.strictEqual(food1.poisoned, true)
    })
})