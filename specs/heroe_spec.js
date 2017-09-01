var assert = require('assert');
var Food = require('../food.js');
var Heroe = require('../heroe.js');
var Task = require('../task.js');
var Rat = require('../rat.js');

describe("Heroe", function(){

    var heroe;
    var food1;
    var food2;
    var food3;
    var food4;
    var task1;
    var task1;
    var task1;
    var rat;

    beforeEach(function () {
        heroe = new Heroe("Greg", 50, "chees" )
        food1 = new Food("bread", 15);
        food2 = new Food("chees", 5);
        food3 = new Food("cake", 25);
        food4 = new Food("pizza", 20);
        task1 = new Task("Beginner", "easy", false, 1, true);
        task2 = new Task("Find Diablo", "medium", true, 10, false);
        task3 = new Task("Defeet Diablo", "hard", false, 100, false);
        rat = new Rat()
    })

    it("heroe should has name", function(){
        assert.strictEqual(heroe.name, "Greg")
    })

    it("heroe has health level", function(){
        assert.strictEqual(heroe.health, 50)
    })

    it("heroe should speaks", function(){
        assert.strictEqual(heroe.speak(), "My name is Greg")
    })

    it("heroe could eat food", function(){
        heroe.eatFood(food1);
        assert.strictEqual(heroe.health, 65);
    })

    it("heroe eat a poisoned food", function () {
        rat.touchFood(food1);
        heroe.eatFood(food1);
        assert.strictEqual(heroe.health, 40);
    })

    it("heroe could eat his fav food", function () {
        heroe.eatFood(food2);
        assert.strictEqual(heroe.health, 57.5);
    })

    it("heroe should get tak", function(){
        heroe.addTask(task1);
        assert.strictEqual(heroe.task.length, 1)
    })

    it("heroe can finish task", function(){
        heroe.addTask(task1);
        heroe.addTask(task2);
        assert.deepStrictEqual(heroe.completTask(task2), true)
    })

    it("sort task by urgency level", function(){
        heroe.addTask(task1);
        heroe.addTask(task2);
        // heroe.completTask(task1)
        heroe.sortTask("urgencyLevel")
        assert.deepStrictEqual(heroe.sortedTasks[0].name, "Find Diablo")
    })

    it("sort task by task status", function () {
        heroe.addTask(task1);
        heroe.addTask(task2);
        heroe.sortTask("taskStatus")
        assert.deepStrictEqual(heroe.sortedTasks[0].name, "Beginner")
    })
})