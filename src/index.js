document.addEventListener("DOMContentLoaded", () => {
  // your code here
  /*let newTaskForm = document.getElementById("create-task-form");
  let newTaskDescription = document.getElementById("new-task-description");
  let submit=document.getElementByTagName('input')[1]; 
  
  const newTaskUl = document.getElementById("tasks");*/
  
 //- As a user, I should be able to type a task into the input field.
 
 
//- As a user, I should be able to click some form of a submit button.
//newTaskForm.addEventListener("submit",CreateNewTasks)
//;
//- As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

 newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};