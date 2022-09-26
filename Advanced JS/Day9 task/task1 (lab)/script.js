var arr1 =[1,2,3];
var arr2 = [];

// arr2 = arr1;
for(var i=0; i<arr1.length; i++){
    arr2[i] = arr1[i];
}

// arr2[1]=55;

arr2.unshift(55);