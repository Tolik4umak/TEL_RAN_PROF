// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
// решение 1 - рекурсивно O(n)

function getNumPower(x,n){
    let res = 1;
    if(n===1){
        return res * x;
    }else{
        res = getNumPower(x,n-1)*x;
    }
    return res;
}

console.log(getNumPower(2,3));
console.log(getNumPower(3,3));
console.log(getNumPower(5,2));


// решение 2 - улучшить решение 1 до O(lon n)
function getNumPower2(x,n){
    if(n==0){
        return 1;
    }

    let z = getNumPower2(x, Math.floor(n/2));
    
    if(n % 2 == 0){
        return z*z;
    }else{
        return z*z*x;
    }

}


console.log(getNumPower2(2,3));


function powerRecImproved(x, n) {
     if (n == 0) { 
        return 1; 
    } 

    let half = powerRecImproved(x, Math.floor(n / 2)); 

    if (n % 2 == 0) { 
        return half * half; 
    } else {
         return half * half * x; 
    }
} 


console.log(powerRecImproved(2,3));
