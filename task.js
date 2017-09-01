var Task = function (name, difficultyLevel, urgencyLevel, reward, taskStatus){
    this.name = name;
    this.difficultyLevel = difficultyLevel;
    this.urgencyLevel = urgencyLevel;
    this.reward = reward;
    this.taskStatus = taskStatus;
}

module.exports = Task;