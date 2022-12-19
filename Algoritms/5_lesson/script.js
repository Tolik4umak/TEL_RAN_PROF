
function generateArray(n) { let a = []; for (let i = 0; i< n; i++) { a[i] = Math.random(); } return a; } 

function sumTo(max){
    if(max == 1){
        return max
    }else{
       return sumTo(max-1)+max
    }
}

console.log(sumTo(5))



let arr = [2,3,4,5]

function multiply(arr){
    if(arr.length == 0){
        return 1
    }
    let n = arr.shift()
    return multiply(arr)*n
}

console.log(multiply(arr))



let arr1 = [5,2,3,4,9,21]

function checkElements(arr ,n){
    if(arr.length == 0){
        return true
    }
    if(arr.shift()>=n) return false
    return checkElements(arr,n)
}

console.log(checkElements(arr1,20))
console.log(checkElements(arr1,22))
console.log('=========')
console.log(checkElements([1, 2, 1, 2, 3, 4, 1], 5)) // -> true 
console.log(checkElements([1, 2, 1, 5, 3, 4, 1], 5)) // -> false 
console.log(checkElements([1, 6, 1, 5, 3, 4, 1], 5)) // -> false 


let n = 10
console.log(fib(n)); 
function fib(n) {
    if (n < 2) {
         return 1; 
    } 
    return fib(n - 1) + fib(n - 2); 
} 