/**take user data and show it in the DOC */
function userData(){
    var yourName = prompt("Enter your name");
    var telephoneNumber = prompt("Enter your telephone number");
    var mobileNumber = prompt("Enter your mobile number");
    var email = prompt("Enter your email");

    document.write("<h1>Entering user info</h1><hr>");

    document.write("<h4><span style='color:blue'>Welcome dear guest </span>" + yourName +"</h4>");
    document.write("<h4><span style='color:blue'>Your telephone number is </span>" + telephoneNumber +"</h4>");
    document.write("<h4><span style='color:blue'>Your mobile number is </span>" + mobileNumber +"</h4>");
    document.write("<h4><span style='color:blue'>Your email is </span>" + email + "</h4>");

    var date = new Date();
    // console.log(date);
    var today = date.toLocaleDateString('en-US', {weekday:"short",day: "numeric",month: "short",year:"numeric"});

    document.write("<h4><span style='color:blue'>today is: </span>" + today + "</h4>");

}


/**create web app to convert binary to decimal*/
function binaryToDecimal(){
    var binaryNum = prompt("Enter a binary number");
    document.write("<h2 style='padding:50px 100px;background-color:gray;display:inline-block;'>" + parseInt(binaryNum,"2") + "</h2>");
}



/**ask the user to enter a message and then display it using the different heading tags */
function displayMess(){
    var message = prompt("Please, enter your message");
    for(i=1; i<=6; i++){
        document.write("<h" + i + "> " + message + "</h" + i + ">");
    }
}



/**script to take n numbers from the user and return their sum,
 * stop receiving values from user when he enters 0 or sum exceeds 100,
 * check that the entered data is numeric and inform the user with the total sum of the entered values.
*/

function numbersSum(){
    var count = prompt("What's the number of values you want to sum?");

    var sum = null;
    var arr = [];

    var mess="";

    var flag = 1;

    if(count != 0){
        for(var i=0 ; i<count ; i++){
            if(flag){
                if(i==0)
                arr[i] = parseInt(prompt("Enter the first number"));
                else
                arr[i] = parseInt(prompt("Enter the next number"));

                sum += arr[i];
            }

            // console.log(sum);
            // console.log(isNaN(arr[i]) );
            

            if(sum > 100){
                mess = "<h2>Sorry the sum shouldn't be bigger than 100, try again.</h2>"
                flag = 0;
            }else if(isNaN(arr[i])){
                sum = null; //to prevent it to put value in sum if one of them isNaN
                flag = 0;
            }else{
                mess = "<h2>The sum is " + sum + "</h2>";
            }
        }

    }


    if(sum === undefined || sum === null){
        mess = "<h2>You should enter numbers only, try again please.</h2>";
    }

    document.write(mess);
    // console.log(arr);
}


// arr[0]=NaN;
// console.log(NaN);//number ?????
// console.log(arr[0] == NaN);//false

// console.log(undefined + 0);//NaN
// console.log(null + 0);//NaN