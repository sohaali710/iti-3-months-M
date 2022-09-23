var Person = function(age,add){
    var userName;
    this.userAge = age;
    this.userAdd = add;

    this.getName = function(){
        console.log(userName);
    }

    this.setName = function(name){
        userName = name;
    }
}

Person.prototype.displayInfo = function(){
    console.log("The age = " + this.userAge, "The salary = " + this.userAdd);
}

var employee = new Person(25,"Beni swuef");

console.log(employee);

employee.displayInfo();

employee.setName("soha");
employee.getName();