
function funcReverse(){
    return [].reverse.call(arguments);
}

// function funcReverse(){
//     var reversed = [].reverse.bind(arguments)
//     return reversed();
// }

console.log(funcReverse(1,2,3,4,5));
