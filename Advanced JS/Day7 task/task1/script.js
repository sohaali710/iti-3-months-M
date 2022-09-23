var myError = new Error();

function checkParaNum(){
    if(arguments.length !== 2){
        myError.message = "You should enter just two parameters.";
        throw myError;
    }
}

checkParaNum(1,2,3);
// checkParaNum(15);
// checkParaNum(13,34);
