var myVid = document.getElementsByTagName("video")[0];

var mySpan = document.getElementById("mySpan");
var timeRange = document.getElementById("timeRange");

function vidTimeRange(value){
    myVid.currentTime = value;

    var currTime = Math.floor(myVid.currentTime / 60) +":" + ( Math.floor(myVid.currentTime) - 60 * Math.floor(myVid.currentTime / 60) );
    mySpan.innerHTML = `${currTime} / 1:50`;
}

function vidTimeRange1(){
    var currTime = Math.floor(myVid.currentTime / 60) +":" + ( Math.floor(myVid.currentTime) - 60 * Math.floor(myVid.currentTime / 60) );
    // console.log(currTime);
    mySpan.innerHTML = `${currTime} / 1:50`;
}



function vidPlay(){
    myVid.play();
}
function vidPause(){
    myVid.pause();
    myVid.currentTime = 0;
}

function vidStart(){
    myVid.currentTime -= 10;
}
function backward(){
    myVid.currentTime -= 5;
}
function forward(){
    myVid.currentTime += 5;
}
function vidEnd(){
    myVid.currentTime += 10;
}


function vidVolume(value){
    // console.log(value);
    myVid.volume = +`0.${value}`;
}
function vidMute(){
    if(myVid.muted){
        myVid.muted = false;
    }else{
        myVid.muted = true;
    }
}

function vidSpeed(value){
    console.log(value);
    myVid.playbackRate = value;
}
