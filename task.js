var Task = function (name, difficultyLevel, urgencyLebel, reward, taskStatus){
    this.name = name;
    this.difficultyLevel = difficultyLevel;
    this.urgencyLebel = urgencyLebel;
    this.reward = reward;
    this.taskStatus = taskStatus;
}

module.exports = Task;