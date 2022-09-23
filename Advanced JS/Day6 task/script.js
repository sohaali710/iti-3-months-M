var myError = new RangeError();
var myInput = document.getElementById("myInput");
var myDiv = document.getElementById("myDiv");

function handleCatchError(){
    try{
        var val = myInput.value;

        if(val >= 100){
            myError.message = "The number is greater than 100";
            throw myError;
        }else if(val < 1){
            myError.message = "The number is smaller than 1";
            throw myError;
        }
        //console.log(val);
    }catch(err){
        // console.logg(err.message);
        console.log(err.message);
    }finally{
        myDiv.innerHTML = `The number is ${val}`;

        myDiv.style.padding = "10px 20px";
    }
}



onerror = function(msg,URI,lin,col,err){
    console.log(err.message);

    return true;
    // return false;
}
// console.logg();

function handleOnError(){
    var val = myInput.value;
    
    console.log(val);
    myDiv.innerHTML = `The number is ${val}`;
    myDiv.style.padding = "10px 20px";
    
    if(val >= 100){
        myError.message = "The number is greater than 100";
        throw myError;
    }else if(val < 1){
        myError.message = "The number is smaller than 1";
        throw myError;
    }
}