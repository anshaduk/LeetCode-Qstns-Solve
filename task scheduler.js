/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const taskMap = new Map();
    for (let task of tasks) {
        taskMap.set(task, (taskMap.get(task) || 0) + 1);
    }
    
    
    const taskCounts = Array.from(taskMap.values()).sort((a, b) => b - a);
    
    
    const maxFrequency = taskCounts[0];
    
    
    let intervals = (maxFrequency - 1) * (n + 1);
    
    
    for (let count of taskCounts) {
        if (count === maxFrequency) {
            intervals++;
        }
    }
    
    
    return Math.max(intervals, tasks.length);
};