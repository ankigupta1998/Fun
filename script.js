const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

if(JSON.parse(localStorage.getItem('taskArray') != null)){
  addTaskToList();
}
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if(todoInput.value.trim()===""){
      return;
  }
  const newTodoText = todoInput.value.trim();
  addTaskToLocalStorage(newTodoText);
  
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  
  todoInput.value = "";
});


todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style= 'text-decoration:line-through; text-decoration-color:red;color:black';
    

  }
});

function addTaskToLocalStorage (task){

   let taskArray= JSON.parse(localStorage.getItem('taskArray'));

   if(taskArray!=null){
     taskArray.push(task);
     localStorage.setItem('taskArray',JSON.stringify(taskArray));
    }else{
      taskArray =[task];
      localStorage.setItem('taskArray',JSON.stringify(taskArray))
      
    }
}
function addTaskToList (){
  const taskArray= JSON.parse(localStorage.getItem('taskArray'));
  console.log(taskArray);
  taskArray.map((task)=>{
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${task}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);})
}
