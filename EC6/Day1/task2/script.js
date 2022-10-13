let arr1 = [3,4,30,2,9,1,20,67,32];

function minMaxFunc(...arr){
    arr.sort((a,b)=> a-b);

    let minMaxArr = [...arr];
    minMaxArr = [minMaxArr.shift() , minMaxArr.pop()];
    // console.log(minMaxArr);
    return minMaxArr;
}

let result = minMaxFunc(...arr1);
console.log(`The min value = ${result[0]}`);
console.log(`The max value = ${result[1]}`);

let myArr = [3,1,30,4,2,9,20,5];

// function minMaxFunc(...arr){
//     return arr;
// }

// let result = minMaxFunc(...myArr);

// let max = myArr.reduce((acc,curr)=>{
//     return curr > acc ? curr : acc;
// })

// console.log(`The max value = ${max}`);

// let min = myArr.reduce((acc,curr)=>{
//     return curr < acc ? curr : acc;
// })

// console.log(`The min value = ${min}`);
