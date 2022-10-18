//First level
console.log("---------First level----------")


let camelize = (str) => {
    let arr =[];
    let newStr = '';
    
    arr = str.split('-');

    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].slice(0,1).toUpperCase()+arr[i].slice(1);
    };

    newStr = arr.join('');

    return newStr;
}

let str1 = 'my-short-string';
let str2 = 'background-color';
let str3 = 'list-style-image';
let str4 = '-webkit-transition';
console.log(str1 + " transform to : " + camelize(str1));
console.log(str2 + " transform to : " + camelize(str2));
console.log(str3 + " transform to : " + camelize(str3));
console.log(str4 + " transform to : " + camelize(str4));




//Second level
console.log("---------Second level----------")

let arrSum = (arr) => {
    let sumPositive = 0;
    let sumNegative = 0;

    for(let i in arr){

        if(isNaN(arr[i]) || typeof(arr[i]) !== 'number') continue;
        
        if(arr[i]>0){
            sumPositive+=arr[i];
        }else{
            sumNegative+=arr[i];
        };

    };

    let newArr = [sumPositive, sumNegative];

    return newArr
};



let arr1 = [1, -2, 3, 4, -9, 6];
let arr2 = [5, 'dfv', -8, NaN, 7, -17, true, 23];
console.log(arrSum(arr1));
console.log(arrSum(arr2));



