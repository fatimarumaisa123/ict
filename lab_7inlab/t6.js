const tasks = [];
function addTask(task) {
  if (task.trim() === "") {
    console.log("Error: cannot add an empty task.");
    return;
  }
  if (tasks.includes(task)) {
    console.log(`Error: "${task}" already exists in the list.`);
    return;
  }
  tasks.push(task);
  console.log(`Added: ${task}`);
}
function markDone(index) {
  if (index < 0 || index >= tasks.length) {
    console.log(`Error: index ${index} is not valid.`);
    return;
  }
  tasks[index] = "[Done] " + tasks[index];
  console.log(`Marked as done: ${tasks[index]}`);
}
function updateTask(index, newText) {
  if (index < 0 || index >= tasks.length) {
    console.log(`Error: index ${index} is not valid.`);
    return;
  }
  tasks[index] = newText;
  console.log(`Updated task ${index} to: ${newText}`);
}
function countPending() {
  let count = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].startsWith("[Done] ")) {
      count++;
    }
  }
  return count;
}

// Empties the array without reassigning it
function clearTasks() {
  tasks.length = 0;
  console.log("All tasks cleared.");
}

addTask("eat");
addTask("sleep");
addTask("");                          
addTask("study");

markDone(0);                          
markDone(10);                         

updateTask(1, "Finish JavaScript lab report"); 
updateTask(-1, "Anything");                    

console.log("Pending tasks:", countPending());
console.log(tasks);
document.getElementById("list").textContent = tasks.join("---");
document.getElementById("pending").textContent = "Pending tasks: " + countPending();

clearTasks();
console.log("After clearing:", tasks);