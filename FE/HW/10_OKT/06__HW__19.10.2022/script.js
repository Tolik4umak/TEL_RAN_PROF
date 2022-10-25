//First level
console.log("---------TASK 1----------")



let arrMix = [0,true,2,"three"];
let arrStr = ['00','truscsce','222','ree'];
let arrNum = [1,2,3,4,5,6,7];


let lengestStr = function(array){
    let lenStr = array[0];
    let originIndex = 0;

    for(let i = 1; i<array.length;i++){
        let el = array[i];
        if(lenStr.length<el.length){
            originIndex = i;
            lenStr = el;
        }
    }

    return [lenStr,originIndex]
};

let biggestNum = function(array){
    let compareNum = array[0];
    let originIndex = 0;

    for(let i = 1; i<array.length;i++){
        let el = array[i];
        if(compareNum<el){
            originIndex = i;
            compareNum = el;
        }
    }

    return [compareNum,originIndex]
};

let isAllString = function(array){

    for(let i = 0; i<array.length;i++){
        let el = array[i];
        if(typeof(el)!=='string') {
            return false
        }
    }

    return true
};

let isAllNum = function(array){

    for(let i = 0; i<array.length;i++){
        let el = array[i];
        if(typeof(el)!=='number') {
            return false
        }
    }

    return true
};



let arrayChecker = function(arr){
    
    if(isAllString(arr)){
        return lengestStr(arr);
    } 
    if(isAllNum(arr)){
        return biggestNum(arr);
    } 
    return ['неверный тип данных в массиве', arr.length]

}


console.log(arrayChecker(arrMix));
console.log(arrayChecker(arrStr));
console.log(arrayChecker(arrNum));






console.log("---------TASK 2----------")


let arr1 = ['привет', true, 65];
let arr2 = [3, [], false];
let arr3 =  ['js', 'java', 'script', 'redButton'];



let shiftTypeDirection = function(arr, pos, type){
    for(let i = 0; i<arr.length;i++){
        let el = arr[i];
        
        if(typeof(el) === type){
            arr.splice(pos, 0, el);
            arr.splice(i+1, 1);
            pos++;
        }
    };
}

let concatArr = function(arr1, arr2, arr3){
    
    let newArr = [] ;

    newArr = newArr.concat(arr1.concat(arr2.concat(arr3)));
    
    shiftTypeDirection(newArr, 0, 'boolean');
    shiftTypeDirection(newArr, 0, 'number');
    shiftTypeDirection(newArr, 0, 'string');
   
   
    return newArr
}

console.log(concatArr(arr1, arr2, arr3));
console.log(concatArr(arrMix, arrStr, arrNum));



