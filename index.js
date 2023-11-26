// Define a function to create a new task object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Method to log the state of the task
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Method to mark the task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

// Create new tasks using the newTask function
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

// Store tasks in an array
const tasks = [task1, task2];

// Use methods to interact with tasks
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

// Display all tasks in the array
console.log(tasks);
