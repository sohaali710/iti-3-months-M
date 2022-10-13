
var myDiv = document.getElementsByTagName("div")[0];
var redRange = document.getElementById("red");
var greenRange = document.getElementById("green");
var blueRange = document.getElementById("blue");

function changeColor(){
    // console.log(`rgb(${redRange.value},${greenRange.value},${blueRange.value})`);
    myDiv.style.backgroundColor = `rgb(${redRange.value},${greenRange.value},${blueRange.value})`;
}

redRange.addEventListener('input',changeColor);
greenRange.addEventListener('input',changeColor);
blueRange.addEventListener('input',changeColor);