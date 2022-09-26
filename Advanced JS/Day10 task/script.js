var taskInputVal;
var todoItem;
var addedTasks;

var associatedArr = [];

$("#add").click(
    function(){
        
        taskInputVal = $("#myInput").val();
        parent = $("#parent");
        addedTasks = $("#addedTasks");

        if(taskInputVal){
            todoItem = `
            <span id="child">
                <span id="task">
                    ${taskInputVal}
                </span>
                <span>
                    <button id="done">Done</button>
                    <button id="deleteTask">Delete</button>
                </span>
            </span>
            `;
    
            addedTasks.append(todoItem);

            var date = new Date();
            var flag = 1;
            
            if(flag){
                document.cookie = `${taskInputVal}Task=${taskInputVal};expires=${date}`;
                
                associatedArr[`${taskInputVal}Task`] = taskInputVal;
                
                flag = 0;
                // console.log(document.cookie);
            }

            // console.log(associatedArr);

        }else{
            alert("Please enter the task name.");
        }
    }
);

$("#addedTasks").on('click','#done',
    function(){
        $(this).parent().prev().css("textDecoration","line-through 5px rebeccapurple");
    }
);

var addedTasks = $("#addedTasks");
var childs;
var tasks = [];

addedTasks.on('click','#deleteTask',
    function(){
        var thisChild = $(this).parent().parent()[0];
        // console.log(thisChild);

        childs = addedTasks.children();
        tasks = childs.children().even();
        
        // console.log(childs.children());
        // console.log(tasks);
        
        for(var i=0; i<addedTasks.children().length; i++){
            if( childs[i] == thisChild){
                thisChild.remove();
                for(var key in associatedArr){
                    // console.log(key.split("Task")[0].trim() , tasks[i][0].textContent.trim())
                    if(key.split("Task")[0].trim() == tasks[i].textContent.trim())
                    document.cookie = `${key}=;expires=1-1-2000`;
                }
            }
        }
    }
);  
