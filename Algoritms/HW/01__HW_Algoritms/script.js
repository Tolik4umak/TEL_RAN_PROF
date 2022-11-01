//First level
console.log("---------TASK 1----------")
/*   Given an array arr[] of N elements, 
the challenge is to write a function to find a given element x in arr[] . */


let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = [1,1,2,2,3,4,4,5,5];
let arr3 = [1,1,2,2,3,3,4];
let arr4 = [1];
let arr5 = [];


let itemFinder = function(arr, item){

    for(let i = 0; i<arr.length; i++){
        if(item == arr[i]){
            return i
        }     
    }

    return -1

}

console.log(itemFinder(arr1, 5));
console.log(itemFinder(arr2, 6));
console.log(itemFinder(arr3, 1));
console.log(itemFinder(arr4, 3));
console.log(itemFinder(arr5, 10));
       



console.log("---------TASK 2----------");

/*Find the element that appears once in a sorted array
Given a sorted array in which all elements occur twice (one after the other)
 and one element appears only once. */


let doublicatFinder = function(arr){

    for(let i = 0; i<arr.length; i+=2){
        if(arr[i] !== arr[i+1]){
            return arr[i];
        }     
    }

    return -1

}


console.log(doublicatFinder(arr2));
console.log(doublicatFinder(arr3));  // сравнивает 4 с undefined получает false и возвращает 4 (ошибки при выходе за предел массива как в JAVA не выдает)
console.log(doublicatFinder(arr4));
console.log(doublicatFinder(arr5));


