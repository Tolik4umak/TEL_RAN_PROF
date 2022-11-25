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
    console.log(x**n)
}



/* 
2 Имея два отсортированных массива размера m и n соответственно, 
вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
Массив 1 - 100 112 256 349 770
Массив 2 - 72 86 113 119 265 445 892
к = 7
Вывод : 256
Окончательный отсортированный массив -
72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
7-й элемент этого массива равен 256.
*/

let first = [100, 112, 256, 349, 770];
let second = [72, 86, 113, 119, 265, 445, 892];

function getValueByIndex(arr1,arr2,k){
    arr1.push(...arr2);
    arr1.sort((a,b) => a-b);
    return arr1[k-1];
};

console.log(getValueByIndex(first,second,7));


/* 
Имея отсортированный массив arr[] и число x, напишите функцию, которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n)
arr[] = {1, 1, 2, 2, 2, 2, 3,} 
x = 2
Вывод: 4 раза
*/


let arr3 = [1, 1, 2, 2, 2, 2, 3]
let x = 2;

let count = 0;
for(let i = 0;i<arr3.length;i++){
    if(arr3[i]==x){
        count++;
    };
};

console.log(count)

