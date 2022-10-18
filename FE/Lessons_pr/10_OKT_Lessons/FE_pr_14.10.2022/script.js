/*
                  888 888 888                        888      
                  888 888 888                        888      
                  888 888 888                        888      
 .d8888b  8888b.  888 888 88888b.   8888b.   .d8888b 888  888 
d88P"        "88b 888 888 888 "88b     "88b d88P"    888 .88P 
888      .d888888 888 888 888  888 .d888888 888      888888K  
Y88b.    888  888 888 888 888 d88P 888  888 Y88b.    888 "88b 
 "Y8888P "Y888888 888 888 88888P"  "Y888888  "Y8888P 888  888 
                                                              
                                                                                                                      
*/

// function showInConsole(callback, number){
//     const res = callback(number);
//     console.log(res);

// }

// function squer(numberSquer){   // возводим в квадрат
//     return numberSquer*numberSquer;
// }

// function negativeSquer(numberNegativeSquer){   // делит само на себя
//     return numberNegativeSquer/2;
// }


// showInConsole(squer, 10);
// showInConsole(negativeSquer, 10);




// function calcSqToSq(number){
//     let resalt = squer(squer(number));
//     return resalt;
// }

// console.log(calcSqToSq(5));




// условия + && ||



// function typeDetector(value){
//     if (typeof value === 'string'){
//         return value.length;
//     } else{
//         return String(value).length;
//     }
// }

// console.log(typeDetector('hello world'));
// console.log(typeDetector(12345));
// console.log(typeDetector(true));







// СТРОКИ


// console.log(
//     'hello'.length,
//     'hello'[0],
//     'hello'[1],
//     'hello'[2],
//     'hello'[3],
//     'hello'[4]
// );

// let hello = 'hello world';
// console.log(hello);

// hello = hello.toUpperCase();

// console.log(hello);







// МАССИВЫ


// let fruits = [
//     'apple',
//     'orange',
//     'plum'
// ];

// // console.log(fruits.length)

// // console.log(fruits);


// fruits[2] = 'pear'

// // console.log(fruits);



// let arr = [
//     'hello',
//     1000,
//     true
// ]

// console.log(arr);
// arr[1]= String(arr[1]);
// console.log(arr);



// let arr = [ 
//     'Яблоко', // 0 - строка 
//     [ 
//         'лошадь', 
//         'собака', 
//         [ 123, 
//           567, 
//         ] 
//     ], // 1 - массив 
//     true, // 2 - булева истина 
//     function() { // 3 - функция 
//         return 'А это функция'; 
//     } 
// ]; // получить элемент с индексом 3 (функция) и выполнить её 
// console.log(arr[1][2][1]); 
// console.log(arr[3]()); 


// let fruits = [
//     'apple',
//     'orange',
//     'plum'
// ];

// // push
// console.log(fruits);
// let addEl = fruits.push('melon'); // fruits.push('melon') добавл посл ел
// // addEl показывает новую длину массива
// console.log(fruits);
// console.log(addEl);

// //pop
// console.log(fruits);
// let delEl = fruits.pop();  // fruits.pop() удаляет посл ел
// // delEl возвр удаленный ел
// console.log(fruits);
// console.log(delEl);

// // shift  работает как pop но с первым ел 

// // unshift  работает как push но с первым ел 





/*
88888888888     d8888  .d8888b.  888    d8P   .d8888b.  
    888        d88888 d88P  Y88b 888   d8P   d88P  Y88b 
    888       d88P888 Y88b.      888  d8P    Y88b.      
    888      d88P 888  "Y888b.   888d88K      "Y888b.   
    888     d88P  888     "Y88b. 8888888b        "Y88b. 
    888    d88P   888       "888 888  Y88b         "888 
    888   d8888888888 Y88b  d88P 888   Y88b  Y88b  d88P 
    888  d88P     888  "Y8888P"  888    Y88b  "Y8888P"  
                                                                                                      
*/




// let fruits = [
//     'яблоко',
//     'груша',
//     'апельсин'
// ]

// let shoppingCard = fruits;
// shoppingCard.push('банан');







/*
888                      888       d888   
888                      888      d8888   
888                      888        888   
888888  8888b.  .d8888b  888  888   888   
888        "88b 88K      888 .88P   888   
888    .d888888 "Y8888b. 888888K    888   
Y88b.  888  888      X88 888 "88b   888   
 "Y888 "Y888888  88888P' 888  888 8888888 
                                                                    
 */


// let sumArrNumbers = function(arr){

//     let acamulate = 0;
//     let counter = 0;

//     for(let i = 0; i < arr.length; i++){

//         let arrElement = arr[i];

//         if(!isNaN(Number(arrElement)) ){
//             acamulate+= Number(arrElement) ;
//             counter++;
//         }
        
//     }



//     return [
//         `сумма - ${acamulate}`,
//         arr.length,
//         counter
//     ];

// }

// let arr1 = [
//     1,
//     2,
//     '3',
//     'Vasia',
//     3
// ]


// console.log(sumArrNumbers(arr1));



// console.log(typeof Number('3') === 'number')

// console.log(Number('3'));
// console.log(Number('Vasia'));





/*
888                      888       .d8888b.  
888                      888      d88P  Y88b 
888                      888             888 
888888  8888b.  .d8888b  888  888      .d88P 
888        "88b 88K      888 .88P  .od888P"  
888    .d888888 "Y8888b. 888888K  d88P"      
Y88b.  888  888      X88 888 "88b 888"       
 "Y888 "Y888888  88888P' 888  888 888888888  
                                                                                
 */


// function inArr(textElement, arr){

//     for (let i = 0;i < arr.length; i++) {   
//         let element = arr[i];
//         if(element===textElement){
//             return true;
//         }
//     }
//     return false;

// }

// let arr = [
//     'vasia',
//     123,
//     '5545',
//     true
// ]

// console.log(inArr('vasia',arr));
// console.log(inArr('tamara',arr));
// console.log(inArr(true,arr));





/*
888    888 888       888 
888    888 888   o   888 
888    888 888  d8b  888 
8888888888 888 d888b 888 
888    888 888d88888b888 
888    888 88888P Y88888 
888    888 8888P   Y8888 
888    888 888P     Y888 
 */





// let getDigitsSum = function(num){

//     if (typeof(num) !== 'number' || isNaN(num)){
//         return 'wrong data format: please type number';
//     };

//     if (typeof(num) === 'number'){
//         num = String(num);
//         let sum = 0;
//         for(let i = 0 ; i < num.length ;i++){
//             sum+= +num[i]; 
//         }
//         return sum;
//     };
    

// }
// console.log(NaN);
// console.log(getDigitsSum(true));
// console.log(getDigitsSum('55'));
// console.log(getDigitsSum('sdfb'));
// console.log(getDigitsSum(5025));
// console.log(getDigitsSum(1563));












// let arr = [1,11,3,5,8,6,8,9,6];


// let howManyToTen = function(arr){

//     let sum = 0 ;
//     for(let i = 0 ; i< arr.length; i++){
//         sum+= arr[i];
//         if(sum > 10){
//             return i +1 ;
//         }
//     }
//     return 'сумма не больше 10'
// }

// console.log(howManyToTen(arr));




// Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
// Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, 
// если число положительное, и false - если отрицательное. 


let arr = [1,-11,3,-5,8,-6,8,-9,6];


let isPositive = number => number>-1;
// {
//     if(number<0){
//         return false;
//     }else{
//         return true
//     }
// }


let positiveFilter = arr =>{

    let positiveArr = [];


    for(let i= 0; i<arr.length;i++){
        if(isPositive(arr[i])){
            positiveArr.push(arr[i]);
        }
    }


    return positiveArr;

};


console.log(positiveFilter(arr));






for(let i =0;i<=10;i+2){
    console.log(i)
}