var myError = new Error();

function adding(){
    var add = 0;

    if(arguments.length == 0){
        myError.message = "You can't call the function without passing parameters to it.";
        throw myError;
    }else{
        for(var i=0; i<arguments.length; i++){
            if(isNaN(arguments[i])){
                myError.message = "Please enter numbers only.";
                throw myError
            }else{
                add += arguments[i];
            }
        }
    }
    return add;
}

// console.log(adding());
console.log(adding("a"));
// console.log(adding(1,2));