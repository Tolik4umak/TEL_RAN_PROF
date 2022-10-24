// let strArr = ['a','b','c','d','e','f','g','h','k','j'];

// let even = num => num%2==0;
// let multThree = num => num%3==0;

// let arrToStrConcat = function(arr){
//     let str = '';
    
//     for(let i = 0; i<arr.length;i++){
//         const element = arr[i];

//         if(i==0){
//             str+=element;
//             continue
//         }

//         if(even(i)){
//             str+=`, ${element}`;
//         }else{
//             str+=element;
//         }
//     }
    
//     return str;

// }

// console.log(arrToStrConcat(strArr));


let even = num => num%2==0;

let arr = [2,5,3,9,5,5,3];

let arrToCalc = arr => {
    let res = 0 ;
    for(let i = 0; i<arr.length;i++){
        if(i%2!==0){
            res = res + (arr[i-1]*arr[i])
        }
    }
    return res;
}

console.log(arrToCalc(arr));


