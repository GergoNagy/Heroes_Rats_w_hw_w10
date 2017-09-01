var assert = require('assert');
var Task = require('../task.js');

describe("Task", function(){

    var task1;
    var task1;
    var task1;

    beforeEach(function(){
        task1 = new Task( "Beginner", "easy", false, 1, false);
        task2 = new Task( "Find Diablo", "medium", false, 10, false);
        task3 = new Task( "Defeet Diablo", "hard", false, 100, false);
    })

    it("task has a name", function(){
        assert.strictEqual(task1.name, "Beginner")
    })

    it("task has a leve", function(){
        assert.strictEqual(task1.difficultyLevel, "easy")
    })

    it("task has a urg level", function(){
        assert.strictEqual(task1.urgencyLevel, false)
    })

    it("task has a reward", function(){
        assert.strictEqual(task1.reward, 1)
    })

    it("task has a status", function () {
        assert.strictEqual(task1.taskStatus, false)
    })
})