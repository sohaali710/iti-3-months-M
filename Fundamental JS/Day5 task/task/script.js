var theName = document.getElementById("theName");
var theAge = document.getElementById("theAge");

function logIn(){
    var date = new Date();
    date.setMonth(date.getMonth() + 1);

    document.cookie = `userName=${theName.value}; expires=${date}`;
    document.cookie = `userAge=${theAge.value}; expires=${date}`;
    // console.log(document.cookie);
    document.write(`<h2>Welcome ${document.cookie.split(";")[0].split("=")[1]} \
    , your age is ${document.cookie.split(";")[1].split("=")[1]} </h2>`);
}

function getAllCookies(){
    var allCookies = [];
    var keyValCookies = document.cookie.split(";");

    for(var i =0; i<keyValCookies.length; i++){
        allCookies[keyValCookies[i].split("=")[0].trim()] = keyValCookies[i].split("=")[1].trim();
    }

    return allCookies;
}

function getCookie(cookieName){
    var all = getAllCookies();

    for(i in all){
        if(i == cookieName){
            return all[i];
        }
    }
}

function deleteCookie(cookieName){
    var all = getAllCookies();

    for(i in all){
        if(i == cookieName){
            document.cookie = `${i}=;expires=1-1-2000`;
        }
    }
}