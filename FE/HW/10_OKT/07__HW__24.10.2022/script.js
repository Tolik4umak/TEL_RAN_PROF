//First level
console.log("---------TASK 1----------")

let arr1 = [5, 3, 8, 1];

console.log("---------СПОСОБ С МЕТОДОМ ----------")

let filterRange = (arr, a, b) => arr.filter(el => el >= a && el <= b);

let filtered = filterRange(arr1, 1, 4);
console.log(filtered);



console.log("---------СПОСОБ БЕЗ МЕТОДА  ----------") // По сути тот же метод filter (под капотом)

let myFilter = function(array, callback){
    let newArr = [];
    for(let i = 0 ; i < array.length;i++){
        if(callback(array[i], i)){
            newArr.push(array[i])
        }
    };
    
    return newArr
};

let filterRange2 = (arr, a, b) => myFilter(arr, el => el >= a && el <= b);

let filtered2 = filterRange2(arr1, 1, 4);
console.log(filtered2);



console.log("---------TASK 2----------")

let arr2 = [1,2,3,4,5,6,7,8,9];

let filterRangeInPlace = function(arr, a, b){
    let newArr = arr.filter(el => el>=a&&el<=b)
    arr.splice(0,arr.length, ...newArr)

};

filterRangeInPlace(arr1, 1,4);
filterRangeInPlace(arr2, 3,6);

console.log(arr1);
console.log(arr2);

