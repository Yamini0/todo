//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//eventslisterner
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
todoList.addEventListener('click',edit);

//functions
function addTodo(event){
    event.preventDefault(); //stops the browser to get reload when click on button
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); //class name of todoDiv is todo
    //create li
    const newTodo = document.createElement('li');
    //adding element in tododiv(task)
    newTodo.disable = true;
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //append the newtodo to tododiv

    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash button
    const deleteButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
    trashButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //edit btn
    const editbutton = document.createElement('button');
    editbutton.innerHTML = "edit";
    editbutton.classList.add('edit-btn');
    todoDiv.appendChild(editbutton);


    //append all the todotask(todoDiv) to todolist
    todoList.appendChild(todoDiv);

    //clear toinput value(user input wale box ka after adding delete from the inputbox)
    todoInput.value = "";
}


function deleteCheck(event){
    const item = event.target;
    //delete todo
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle('completed');
    }

    /*if(item.classList[0] === "edit-btn"){
        const todo =item.parentElement;
        item.parentElement.disabled = !item.parentElement.disabled;
    }*/

    

}

function edit(e){
    const item = e.target; //return the clicked item inside the list
        if(item.classList[0] === "edit-btn"){
            const todo =item.parentElement;
            item.parentElement.disable = !item.parentElement.disabled;
        }

    }
