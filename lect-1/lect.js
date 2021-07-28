console.log("hello world");

let kuchBhi = 2;

let kuchBhi2

let kuchBhi3 = null; 

console.log(kuchBhi);
console.log(kuchBhi2);
console.log(kuchBhi3);

kuchBhi = "Hello"

console.log(kuchBhi);

for(let i = 0; i < 5; i++){
    console.log(i);
}

let i = 5
while(i <= 10){
    console.log(i);
    i++;
}

function f(x, y) {
    console.log(x + y);
}

f(2, 3);
f("Length of abc is ", 3);
/// function statement start
function f1(x, y){
    return x + y;
}
// statement end

console.log(f1(5, 4));

function f2(x, y){
    let z = x + y;
}

console.log(f2(5, 4));

function f2(x, y){
    let z = x + y;
    return;
}

console.log(f2(5, 4));

// js is interpreter

/*let a = 2;
console.log(a);

throw new error

console.log(a);*/

//without name of function is called fuction expression

//console.log(someVar(2, 3));

let someVar = function (x, y){
    let z = x + y;
    return z;
}
//this functoin does not run bcoz if 
//you store function expression in a variable then the
// print stement shoud be below the function

console.log(someVar(2, 3));

//IIFE
(function (x, y){
    let z = x + y
    console.log(z)
})(2, 3);

let value = (function (x, y){
    let z = x + y
    return z
})(3, 7);

console.log(value);

//array
// in js array is a colletion of types of data i.e., 
//{1, 2, "arr", true, 2.2}
let arr = [1, 2, "arr", true, 2.2];
console.log(arr.length);
console.log(arr[3]);
// arr is dynamic in nature
arr[100] = 3;
console.log(arr.length);
console.log(arr[100]);

let darr = []
darr[2] = 3
darr[0] = 1;
console.log(darr[2*darr[2] - 6*darr[0]]);
darr[1] += darr[0]
console.log(darr[1])


///Factoral waala function tu likh lega


//hot to make two D array
function design(n, k){
    let twodarray = [];

    for(let i = 0; i < n; i++){
        let onedarray = []; 
        twodarray[i] = onedarray;
        for(let j = 0; j < n; j++){
            if(i == j || i + j == n - 1){
                twodarray[i][j] = i + 1;
            }
            else{
                twodarray[i][j] = 0;
            }
            
        }
    }

  
    return twodarray[k];
    
}
let n = 3;
for(let k = 0; k < n; k++){
    console.log(design(n, k));
}


// array pass by reference nhi hotu h

let someArr = ["a", "b", "c"];

console.log(someArr);

function returnArr(someArr, n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = i;
        someArr[i] = i;    ///// ye jo h isse someArr k address pr change hora h
    }
    someArr = arr;//// pr yha someArr ko nya address mil rha h
    console.log(someArr);
    return arr;
}

returnArr(someArr, 3)

console.log(someArr);


///objects are written in curly braces 
// all arr are also objects list
// bus objects list

let bus = {
    wheels : 4,
    color : "yellow",
    honk : function () {
        return "Bus is honking";
    }
}

console.log(bus.honk());