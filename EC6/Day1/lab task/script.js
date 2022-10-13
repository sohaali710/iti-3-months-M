let myInput = document.getElementById('myInput');
let add = document.getElementById('add');
let calc = document.getElementById('calc');

let arr = [];

add.onclick = ()=>{
    if(myInput.value == ""){
        console.error('please enter a value');
    }else{
        arr.push(+myInput.value);
    }

    myInput.value = "";
}

calc.onclick = ()=>{
    let calcArr = [...arr];
    let sum = 0;
    
    for(let i=0; i<calcArr.length; i++){
        sum += calcArr[i];
    }
    var myDiv = document.getElementsByTagName("div")[0];
    myDiv.innerHTML = sum;
}