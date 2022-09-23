var head2 = document.createElement("h2");

console.log(head2);
function rectangle(w,h){
    this.width = w;
    this.height = h;

    this.area = function(){
        return "The area = " + this.width * this.height;
    }

    this.perimeter = function(){
        return "The perimeter = " + 2*(this.width + this.height);
    }

    this.displayInfo = function(){
        document.body.append(head2);
        head2.innerHTML = `The rectangle info :<br>the width = ${this.width}<br>the height = ${this.height}<br>${this.area()}<br>${this.perimeter()}`;
    }
}

var rectArea = new rectangle(2,3);

console.log(rectArea.area());
console.log(rectArea.perimeter());
rectArea.displayInfo();