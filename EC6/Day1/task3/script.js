var fruits = ["apple","strawberry","banana","orange","mango"];

/**a */
var result1= fruits.every((ele)=>{
    return isNaN(ele) ;
})

// console.log(result1)
console.log("Are all elements in the array string ?");
if(result1 == true){
    console.log("Yes");

}else{
    console.log("No");
}

/**b */
var result2= fruits.some((ele)=>{
    // console.log(ele[0]);
    return ele[0] == "a" ;
})

console.log("Does some of array elements start with a ?");
if(result2 == true){
    console.log("Yes");
    
}else{
    console.log("No");
}

/**c */
var result3 = fruits.filter((ele)=>{
    return (ele[0] == "b") || (ele[0] == "s");
})

// console.log(result3);

/**d */
var result4 = fruits.map((ele)=>{
    return `I like ${ele}`;
})

// console.log(result4);

/**e */
result4.forEach((ele)=>{
    console.log(ele);
})