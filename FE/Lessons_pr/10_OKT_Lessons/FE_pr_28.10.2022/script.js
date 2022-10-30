/*
                  888 888 888                        888      
                  888 888 888                        888      
                  888 888 888                        888      
 .d8888b  8888b.  888 888 88888b.   8888b.   .d8888b 888  888 
d88P"        "88b 888 888 888 "88b     "88b d88P"    888 .88P 
888      .d888888 888 888 888  888 .d888888 888      888888K  
Y88b.    888  888 888 888 888 d88P 888  888 Y88b.    888 "88b 
 "Y8888P "Y888888 888 888 88888P"  "Y888888  "Y8888P 888  888 
                                                              
                                                                                                                      
*/




// function sum(a, b){
//     return a+ b
// };


// function min(a, b){
//     return a- b
// };


// // lib(min, 20, 10);



// let add = function(num){
//     return num+2;
// }

// // console.log(add(10))


// let arr = [1,2,3,4,5,6];
// // console.log(arr);
// arr2 =arr.map(
//     el => el+3
// );
// // console.log(arr2);







console.log(myMap(arr, (item, index) => index % 2 === 0 ? item + 3 : item))
// console.log(arr.map((item, index) => index % 2 === 0 ? item + 3 : item))



let arr = [1,2,3,4,5,6];
let sum = 0;
let sum2 = 0;

arr.forEach(element => {
    sum = sum + element
});

console.log(sum);


myForEach(arr, el => {
    sum2 = sum2 + el
})

console.log(sum2);
