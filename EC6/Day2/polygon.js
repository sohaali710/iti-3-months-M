export class Polygon{
    constructor(t){
        this.type = t;
    }

    showArea(){
        return `The area of the ${this.type} = `;
    }
}

// let pol1 = new Polygon("rec");
// console.log(pol1.showArea());