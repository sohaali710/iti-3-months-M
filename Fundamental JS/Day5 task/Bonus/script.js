var taskInput;
var parent;
var todoItem;

var count=0;

function newTask(){
    taskInput = document.getElementById("myInput");
    parent = document.getElementById("parent");

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
        
        var date = new Date();
        var flag = 1;
        
        if(flag){
            document.cookie = `taskName${count}=${taskInput.value};expires=${date}`;
            count++;
            flag = 0;
            // console.log(document.cookie);
        }
    }else{
        alert("Please enter the task name.");
    }
};

var tasks;
var done;
var deleteTask;
var child;

function taskDone(event){
    tasks = document.querySelectorAll("#task");
    done = document.querySelectorAll("#done");

    for(var i=0; i<tasks.length; i++){
        if(event.target == done[i])
        tasks[i].style.textDecoration = "line-through 5px rebeccapurple";
    }

}

function taskDelete(event){
    tasks = document.querySelectorAll("#task");
    deleteTask = document.querySelectorAll("#deleteTask");

    child = document.querySelectorAll("#child");

    for(var i=0; i<tasks.length; i++){
        if(event.target == deleteTask[i]){
            child[i].remove();
            document.cookie = `taskName${i}=;expires=1-1-2000`;
        }
    }
}