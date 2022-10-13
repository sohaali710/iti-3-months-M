import { Polygon } from "./polygon.js";

class Rectangle extends Polygon{
    constructor(t, w, h){
        super(t);

        this.width = w;
        this.height = h;
    }
    toString(){
        let area = this.width * this.height
        return this.showArea() + area;
    }
}

let rect = new Rectangle("rectangle",200,100);

console.log(rect.toString());

let rectCanv = document.getElementById("rectCanv");
let rectCtx = rectCanv.getContext("2d");

rectCtx.beginPath();
rectCtx.rect(50,50,rect.width,rect.height);

// rectCtx.lineWidth = 2;
rectCtx.strokeStyle = "black";
rectCtx.stroke();
rectCtx.closePath();


rectCtx.font = "24px Arial";
rectCtx.fillStyle = "blue";
rectCtx.fillText("w", rect.width/2 + 40 , rect.height + 80);

rectCtx.font = "24px Arial";
rectCtx.fillStyle = "blue";
rectCtx.fillText("h",20, rect.height/2 + 50 );

let parent1 = document.getElementsByClassName("parent")[0];
let myDiv1 = document.createElement("div");
myDiv1.className = "myDiv1";
myDiv1.innerHTML = `
    <h2>${rect.toString()} px<br><br>The ${rect.type} parameters is:<br>the width = ${rect.width} px<br>the height = ${rect.height} px</h2>
`;

// console.log(myDiv1);
// console.log(parent1)
parent1.appendChild(myDiv1);

/////////////////// circle ///////////////////////

class Circle extends Polygon{
    constructor(t, r){
        super(t);

        this.raduis = r;
    }
    toString(){
        let area = Math.PI * this.raduis ** 2 ;
        return this.showArea() + area;
    }
}

let cir = new Circle("circle",100);

console.log(cir.toString());


let cirCanv = document.getElementById("cirCanv");
let cirCtx = cirCanv.getContext("2d");

cirCtx.beginPath();
cirCtx.arc(50 + cir.raduis, 50 + cir.raduis , cir.raduis, 0, 2 * Math.PI);
cirCtx.strokeStyle = "black";
cirCtx.stroke();
cirCtx.closePath();

cirCtx.beginPath();
cirCtx.moveTo(50 + cir.raduis , 50 + cir.raduis);
cirCtx.lineTo(50 , 50 + cir.raduis);
cirCtx.strokeStyle = "black";
cirCtx.stroke();
cirCtx.closePath();

cirCtx.font = "24px Arial";
cirCtx.fillStyle = "blue";
cirCtx.fillText("r", 50 + cir.raduis/2 , 40 + cir.raduis);

let parent2 = document.getElementsByClassName("parent")[1];
let myDiv2 = document.createElement("div");
myDiv2.className = "myDiv";
myDiv2.innerHTML = `
    <h2>${cir.toString()}<br><br>The ${cir.type} parameters is:<br>the width = ${cir.raduis}</h2>
`;

parent2.appendChild(myDiv2);

////////////////// square ///////////////

class Square extends Polygon{
    constructor(t, l){
        super(t);

        this.length = l;
    }
    toString(){
        let area = this.length ** 2 ;
        return this.showArea() + area;
    }
}

let sq = new Square("square",150);

console.log(sq.toString());



let sqCanv = document.getElementById("sqCanv");
let sqCtx = sqCanv.getContext("2d");

sqCtx.beginPath();
sqCtx.rect(50,50,sq.length,sq.length);
sqCtx.strokeStyle = "black";
sqCtx.stroke();
sqCtx.closePath();

sqCtx.font = "24px Arial";
sqCtx.fillStyle = "blue";
sqCtx.fillText("L",20,sq.length/2 + 50);

let parent3 = document.getElementsByClassName("parent")[2];
let myDiv3 = document.createElement("div");
myDiv3.className = "myDiv3";
myDiv3.innerHTML = `
    <h2>${sq.toString()} px<br><br>The ${sq.type} parameters is:<br>the length = ${sq.length} px</h2>
`;

parent3.appendChild(myDiv3);


////////////////// triangle ////////////////////


class Triangle extends Polygon{
    constructor(t, b, h){
        super(t);

        this.base = b;
        this.height = h ;
    }
    toString(){
        let area = 0.5 * this.base * this.height ;
        return this.showArea() + area;
    }
}

let tri = new Triangle("triangle",150,200);

console.log(tri.toString());



let triCanv = document.getElementById("triCanv");
let triCtx = triCanv.getContext("2d");

triCtx.beginPath();
triCtx.moveTo(50 + tri.base , 50);
triCtx.lineTo(50, 50 + tri.height);
triCtx.lineTo(50 + tri.base, 50 + tri.height);
triCtx.closePath();

triCtx.strokeStyle = "black";
triCtx.stroke();


triCtx.font = "24px Arial";
triCtx.fillStyle = "blue";
triCtx.fillText("b",50 + tri.base/2 , tri.height + 80);

triCtx.font = "24px Arial";
triCtx.fillStyle = "blue";
triCtx.fillText("h", 60 + tri.base , 50 + tri.height/2);

let parent4 = document.getElementsByClassName("parent")[3];
let myDiv4 = document.createElement("div");
myDiv4.className = "myDiv4";
myDiv4.innerHTML = `
    <h2>${tri.toString()} px<br><br>The ${tri.type} parameters is:<br>the base = ${tri.base} px<br>the height = ${tri.height} px</h2>
`;

parent4.appendChild(myDiv4);

