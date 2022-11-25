// function solve(n,fromRod,toRod,additionalRod){
//     if(n==1){
//         return console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
//     }

//     solve(n-1,fromRod,additionalRod,toRod)
//     console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
//     solve(n-1,additionalRod,toRod,fromRod)
// }


// solve(3,'left','rigth','middle')


// let arr = [40, 250, 8, 88, 240, 12, 148]
let arr = [40, 8, 148]

console.log(findMin(arr,0))
console.log(findMax(arr,0))

// function findMinDefault(arr) 
// { var min = Number.MAX_SAFE_INTEGER; 
//     for (let i = 0; i < arr.length; i++) 
//     { if (arr[i] < min) 
//         { min = arr[i]; }
//      } return min; } 


// function findMaxDefault(arr) 
// { var max = Number.MIN_SAFE_INTEGER; for (let i = 0; i < arr.length; i++) 
//     { if (arr[i] > max) { max = arr[i]; } } return max; } 

// function findMin(arr, index) { 
//     let min = Number.MAX_SAFE_INTEGER;
//     if(index === arr.length){
//         return arr[index - 1]
//     };
   
  

//     min = findMin(arr, index+1);
//     if(arr[index]<min){
//         min = arr[index]; 
//     }

//     return min;
// } 



    
function findMin(arr, index) { 
    let min = Number.MAX_SAFE_INTEGER; 

    if (index === arr.length) { //index=3         // index = 2                 // index = 1                   // index = 0
        return min;            // MAX
    } 

    min = findMin(arr, index + 1);               // min = MAX                  // min = 148                   // min = 8

    if (arr[index] < min) {                      // arr[2]=148 < min=MAX       // arr[1]=8 < min=148          // arr[0]=40 < min=8 
        min = arr[index];                        // min = arr[2] = 148         // min = arr[1] = 8            // не выполняется 
    } 
    
    return min;                                  // 148                        // 8                           // 8
} ;


function findMax(arr, index) { 
    let max = Number.MIN_SAFE_INTEGER; 

    if (index === arr.length) { //index=3         // index = 2                 // index = 1                   // index = 0
        return max;            // MIN
    } 


    max = findMax(arr, index + 1);               // max = MIN                  // max = 148                   // min = 148

    if (arr[index] > max) {                      // arr[2]=148 > max=MIN       // arr[1]=8 > max=148          // arr[0]=40 > max=8 
        max = arr[index];                        // max = arr[2] = 148         // не выполняется              // не выполняется 
    } 
    
    return max;                                  // 148                        // 148                         // 148
} ;




// function findMax(arr, index) { } 



//  function findMin(arr, index) { if (arr.length > index) { let min = findMin(arr, index + 1); if (arr[index] < min) { return arr[index]; } return min; } return arr[index - 1]; } 
 
//  function findMax(arr, index) { if (arr.length > index) { let max = findMax(arr, index + 1); if (arr[index] > max) { return arr[index]; } return max; } return arr[index - 1]; } 