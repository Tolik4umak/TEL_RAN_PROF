// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
// решение 1 - рекурсивно O(n)

// function getNumPower(x,n){
//     let res = 1;
//     if(n===1){
//         return res * x;
//     }else{
//         res = getNumPower(x,n-1)*x;
//     }
//     return res;
// }

// console.log(getNumPower(2,3));
// console.log(getNumPower(3,3));
// console.log(getNumPower(5,2));


// // решение 2 - улучшить решение 1 до O(lon n)
// function getNumPower2(x,n){
//     if(n==0){
//         return 1;
//     }

//     let z = getNumPower2(x, Math.floor(n/2));
    
//     if(n % 2 == 0){
//         return z*z;
//     }else{
//         return z*z*x;
//     }

// }


// console.log(getNumPower2(2,3));


// function powerRecImproved(x, n) {
//      if (n == 0) { 
//         return 1; 
//     } 

//     let half = powerRecImproved(x, Math.floor(n / 2)); 

//     if (n % 2 == 0) { 
//         return half * half; 
//     } else {
//          return half * half * x; 
//     }
// } 


// console.log(powerRecImproved(2,3));




// let arr = [2,6,87,1,0,52,42,1,5,7];
let arr = [2,6,87,1];
// let arr = [8,7,6,5,4,3,2];  // 7 8  5 6
console.log(arr);


function mergeSort(arr,left,rigth){
    if(left<rigth){
        let middle = Math.floor((left+rigth)/2)  //5

        mergeSort(arr,left,middle);       //4-5
        mergeSort(arr,middle+1,rigth);    //6-7
        
        merge(arr,left,middle,rigth);     // 4 5 7

    }
}
                                        //    4  5   6  7
function merge(arr, left, middle, rigth){  // [3 4]  [1 2] 

    let leftLength = middle-left+1;         // 5-4+1=2 (4-5)  
    let rigthLength = rigth-middle;         // 7-5 = 2 (6-7)


    let leftArr = [];
    let rigthArr = [];

    for(let i = 0;i<leftLength;i++){      
        leftArr[i]=arr[i+left]                     
    }
    for(let i = 0;i<rigthLength;i++){
        rigthArr[i]=arr[i+middle+1]
    }

    let i = 0;
    let j = 0;
    let k = left;

    while(i<leftArr.length&&j<rigthArr.length){
        if(leftArr[i]<rigthArr[j]){
            arr[k]=leftArr[i];
            i++
        }else{
           arr[k]=rigthArr[j];
           j++
        }
        k++
    }

    while(i<leftArr.length){
        arr[k]=leftArr[i];
        i++
        k++
    };
    while(j<rigthArr.length){
        arr[k]=rigthArr[j];
        j++
        k++
    }



}











// function mergeSort(arr,left,rigth){
//     if(left<rigth){

//         let middle = Math.floor((left+rigth)/2);

//         mergeSort(arr,left,middle);
//         mergeSort(arr,middle+1,rigth);

//         merge(arr,left,rigth,middle)
//     }
// }

// function merge(arr,left,rigth,middle){

//     if(arr[left]>arr[middle+1]){
//         let tempArr = [];
        
//         let i=0;

//         for(i;i+middle+1<=rigth;i++){
//             tempArr[i]=arr[i+middle+1];
//         }
//         for(let j=0;j+left<=middle;j++){
//             tempArr[i]=arr[j+left];
//             i++;
//         }
        
//         for(let i = left;i<=rigth;i++){
//             arr[i]=tempArr[i-left]
//         }
//     }
// }

mergeSort(arr,0,arr.length-1);
console.log(arr);








console.log('========')
console.log('LESSON 5')
console.log('========')



let a = 123;


function reverseNum(x){
    let d = 0;
    let y = 0;
    while(x>0){
        d = x%10
        y = y*10+d
        x = Math.floor(x/10)
    }
    return y 
}

// console.log(reverseNum(a))


function reverseX(x){
    if(x<10){
        return x
    }else{
        return +("" + x%10 + reverseX(Math.floor(x/10)))
    }
}


console.log(reverseX(a))


function fib(n){
    if(n==1||n==2){
        return 1
    }
    let a = fib(n - 1) + fib(n - 2)
    return a
}

console.log(fib(7))

let num1=1;
let num2=1;
for(let i = 0;i<5;i++){
    console.log(num1)
    console.log(num2)
    num1 = num2+num1;
    num2 = num1+num2;
}