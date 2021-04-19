document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskForm = document.getElementById("create-task-form");
  let newTaskDescription = document.getElementById("new-task-description");
  let submit=document.getElementByTagName('input')[1]; 
  
  const newTaskUl = document.getElementById("tasks");
 //- As a user, I should be able to type a task into the input field.
 
 
//- As a user, I should be able to click some form of a submit button.
//newTaskForm.addEventListener("submit",CreateNewTasks)
//;
//- As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

submit.addEventListener("click",function(e){
  e.preventDefault();
 let newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
newTaskUl.appendchild("li");
  
});
