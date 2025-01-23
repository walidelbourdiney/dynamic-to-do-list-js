"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage and render them
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Get tasks or default to an empty array
    tasks.forEach((taskText) => {
      addTaskToDOM(taskText); // Add each task to the DOM
    });
  }

  // Function to save tasks to Local Storage
  function saveTasks() {
    const tasks = Array.from(taskList.children).map((task) =>
      task.firstChild.textContent.trim()
    );
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks array as JSON
  }

  // Function to create a task and append it to the DOM
  function addTaskToDOM(taskText) {
    const task = document.createElement("li");
    task.innerText = taskText;

    const rmButton = document.createElement("button");
    rmButton.innerText = "Remove";
    rmButton.classList.add("remove-btn");

    // Event listener for removing a task
    rmButton.addEventListener("click", function () {
      task.remove(); // Remove the task from the DOM
      saveTasks(); // Update Local Storage after removal
    });

    task.appendChild(rmButton);
    taskList.appendChild(task);
  }

  // Function to handle adding a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Please insert a task first!");
      return;
    }
    addTaskToDOM(taskText); // Add the task to the DOM
    saveTasks(); // Save the updated tasks array to Local Storage
    taskInput.value = ""; // Clear the input field
  }

  // Event listeners for adding tasks
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});
