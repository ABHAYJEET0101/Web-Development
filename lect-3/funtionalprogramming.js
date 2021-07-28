// let arr = [1,2,3,4];

// function pure(arr){
//     let nArr = [];
//     for(x in arr){
//         nArr[x] = arr[x];
//     }
//     nArr[1] = 'a';
//     nArr[2] = 'b';
//     return nArr;
// }

// function impure(arr){
//     arr[1] = 'a';
//     arr[2] = 'b';
//     return arr
// }

// console.log(arr);
// console.log(pure(arr));
// console.log(arr);
// console.log(impure(arr));
// console.log(arr);




// function f(f2, x){
//     return f2(x) + 1;
// }

// function g(x){
//     return x * x;
// }

// console.log(f(g, 2));



// function morningGreeting(lang = "en"){
//     if(lang == "en"){
//         return "";
//     }
//     else{

//     }
// }

// function eveningGreeting(lang = "en"){
//     if(lang == "en"){
//         return "Good morning";
//     }
//     else{
        
//     }
// }

// function Greet(f, name, lang){
//     if(name == "Jack" && lang == "en"){

//     }
//     else if(name == "" && lang == "port"){

//     }
// }

// let arr = [1, 2, 3, 4, 5];

// function doubler(x){
//     return 2 * x;
// }

// let nArr = [];

// for(x in arr){
//     nArr.push (doubler(arr[x]));
// }

// let nArr = arr.map(doubler);

// console.log(nArr);

// function myMap(arr, f){
//     let nArr = [];
//     for(x in arr){
//         nArr.push(f(arr[x]))
//     }
//     return nArr;
// }

// console.log(myMap(arr, doubler));


let arr = [1, 2, 3, 4, 5];

function checkEven(x){
    return x % 2 === 0;
}

let nArr = arr.filter(checkEven);