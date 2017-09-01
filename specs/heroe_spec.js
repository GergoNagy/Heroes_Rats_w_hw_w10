var assert = require('assert');
var Food = require('../food.js');
var Heroe = require('../heroe.js');

describe("Heroe", function(){

    var heroe;
    var food1;
    var food2;
    var food3;
    var food4;

    beforeEach(function () {
        heroe = new Heroe("Greg", 100, "chees" )
        food1 = new Food("bread", 15);
        food2 = new Food("chees", 5);
        food3 = new Food("cake", 25);
        food4 = new Food("pizza", 20);
    })

    it("heroe should has name", function(){
        assert.strictEqual(heroe.name, "Greg")
    })

    it("heroe has health level", function(){
        assert.strictEqual(heroe.health, 100)
    })

    it("heroe should speaks", function(){
        assert.strictEqual(heroe.speak(), "My name is Greg")
    })
})