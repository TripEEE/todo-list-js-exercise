// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, thingToDo) {
  const task = {
    title: title,
    thingToDo: thingToDo,
    complete: false,
    logState: function () {
      console.log(`${task.title} has ${task.complete ? "" : "not "} been completed`)
    },
    markCompleted: function () {
      task.complete = true
    }
  }
  return task
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {

// }

// // // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has ${task.complete ? "" : "not "} been completed`)
// }

// DRIVER CODE BELOW

const task1 = newTask("Weed the garden", "pull up the weeds")
const task2 = newTask("Water the garden", "Fill up the watering can and douse the garden")
const tasks = [task1, task2]

task1.logState()
task1.markCompleted()
task1.logState()
