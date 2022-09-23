function sortNumbers(){
    var arr = [];

    for(i=0; i<5; i++){
        arr[i] = +prompt("Enter your values");
    }

    document.write("<h1>Sorting</h1><hr>");
    document.write("<p><span style='color:red'>You've entered values: </span>" + arr.join(" , ") + "</p>");
    
    var ascending = arr.sort(function (a,b){
        return a - b;
    });

    document.write("<p><span style='color:red'>Your values in ascending order: </span>" + ascending.join(" , ") + "<p>");

    var descending = arr.sort(function (a,b){
        return b - a;
    });
    
    document.write("<p><span style='color:red'>Your values in descending order: </span>" + descending.join(" , ") + "</p>");

}



function AddMultiplyDivide(){
    var arr = [];

    arr[0] = +prompt("Enter your values");

    var add = arr[0], multiply = arr[0],divide = arr[0];

    for(var i=1; i<3; i++){
        arr[i] = +prompt("Enter your values");

        add += arr[i];
        multiply *= arr[i];
        divide /= arr[i];
    }

    document.write("<h1>Adding, Multipling and Dividing 3 values </h1><hr>");

    document.write("<p><span style='color:red'>Sum of the 3 values: </span>" + add + "</p>");
    document.write("<p><span style='color:red'>Multiplication of the 3 values: </span>" + multiply + "<p>");
    document.write("<p><span style='color:red'>Division of the 3 values: </span>" + divide + "</p>");

}