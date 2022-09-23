// var addBtn = document.getElementById("add");
var taskInput;
var parent;
var todoItem;


function newTask(){
    taskInput = document.getElementById("myInput");
    parent = document.getElementById("parent");

    // console.log(taskInput.value);

    if(taskInput.value){
        todoItem = `
        <div id="child">
            <span id="task">
                ${taskInput.value}
            </span>
            <span>
                <button id="done" onclick="taskDone(event)">Done</button>
                <button id="deleteTask" onclick="taskDelete(event)">Delete</button>
            </span>
        </div>
        `;

        parent.innerHTML += todoItem;
        // console.log(parent.innerHTML);
    }else{
        alert("Please enter the task name.");
    }

    
};

var task;
var done;
var deleteTask;
var child;
// console.log(done);

function taskDone(event){
    task = document.querySelectorAll("#task");
    done = document.querySelectorAll("#done");
    
    // console.log(event.target);

    for(var i=0; i<task.length; i++){
        // console.log(done[i]);
        // console.log(task[i]);

        if(event.target == done[i])
        task[i].style.textDecoration = "line-through 5px rebeccapurple";
    }

}

function taskDelete(event){
    task = document.querySelectorAll("#task");
    deleteTask = document.querySelectorAll("#deleteTask");

    child = document.querySelectorAll("#child");

    for(var i=0; i<task.length; i++){
        // console.log(deleteTask[i]);
        // console.log(event);
        // console.log(event.target);
        // console.log(task[i]);
        
        if(event.target == deleteTask[i])
        child[i].remove();
    }
}