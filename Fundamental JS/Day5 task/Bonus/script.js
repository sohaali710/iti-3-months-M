var myBtn = document.getElementById('add');
var taskInput;
var parent;
var todoItem;
var addedTasks;

var count=0;
var associatedArr = [];

myBtn.onclick = function(){
    taskInput = document.getElementById("myInput");
    parent = document.getElementById("parent");
    addedTasks = document.getElementById("addedTasks");

    if(taskInput.value){
        todoItem = `
            <span id="child">
                <span id="task">
                    ${taskInput.value}
                </span>
                <span>
                    <button id="done" onclick="taskDone(event)">Done</button>
                    <button id="deleteTask" onclick="taskDelete(event)">Delete</button>
                </span>
            </span>
        `;

        addedTasks.innerHTML += todoItem;
        
        var date = new Date();
        var flag = 1;
        
        if(flag){
            document.cookie = `${taskInput.value}Task=${taskInput.value};expires=${date}`;
            
            associatedArr[`${taskInput.value}Task`] = taskInput.value;
            count++;
            flag = 0;
            // console.log(document.cookie);
        }

        console.log(associatedArr);
        
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

    // console.log(deleteTask);

    for(var i=0; i<tasks.length; i++){
        if(event.target == deleteTask[i]){
            child[i].remove();
            
            for(var key in associatedArr){
                console.log(key.split("Task")[0].trim() == tasks[i].textContent.trim())
                if(key.split("Task")[0].trim() == tasks[i].textContent.trim())
                document.cookie = `${key}=;expires=1-1-2000`;
            }
        }
    }
}