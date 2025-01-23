"use strict";

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the main app container
  const todoApp = document.getElementById("todo-app");

  // Select the input field where users enter new tasks
  const taskInput = document.getElementById("task-input");

  // Select the "Add Task" button
  const addButton = document.getElementById("add-task-btn");

  // Select the list where tasks will be displayed
  const taskList = document.getElementById("task-list");

  // Function to add a new task to the list
  function addTask() {
    // Get the text from the input field and trim any extra whitespace
    const taskText = taskInput.value.trim();

    // Check if the input is empty and alert the user if it is
    if (!taskText) {
      alert("Please insert a task first!");
      return; // Exit the function if the input is empty
    }

    // Create a new list item (li) for the task
    const task = document.createElement("li");
    task.innerText = taskText;

    // Create a "Remove" button for the task
    const rmButton = document.createElement("button");
    rmButton.innerText = "Remove";
    rmButton.classList.add("remove-btn"); // Add a class for styling the button

    // Add an event listener to the "Remove" button to delete the task
    rmButton.addEventListener("click", function () {
      task.remove(); // Remove the task from the list
    });

    // Append the "Remove" button to the task item
    task.appendChild(rmButton);

    // Append the task item to the task list
    taskList.appendChild(task);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // Add an event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add an event listener for the "Enter" key in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      addTask(); // Call the addTask function when "Enter" is pressed
    }
  });
});
