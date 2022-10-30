// let users = [ 
// "Вася", 
// 'Петя', 
// "Маша", 
//  ]; 
//  let someUsers = users.filter( 
//     item => item[3] === 'я' 
//     ); 
//     let someUsers2 = users.filter( 
//         function(item) { 
//             return item[3] === 'я' 
//         } ); 
        
// console.log(someUsers,someUsers2); 


// let array = ['ttt', 'fff', 555, true, false, undefined, null, 0, 5, 61, 1];

// function withoutArr(arr, ...dellData){
//     let filteredArr = [...arr]; 

    
//     dellData.forEach(
//         deleteItem => {
//             filteredArr = filteredArr.filter(
//                 elem => elem !== deleteItem
//             )
//         }
//     )
      
//     return filteredArr;
// }

// console.log(array);
// console.log(withoutArr(array, 555, 61));








let array = ['ttt', 'fff', 555, true, false, undefined, null, 0, 5, 61, 1];

function withoutArr(arr, ...dellData){
    let filteredArr = [];  // массив изначально пустой

    arr.forEach(  // перебираем все елементы исходного массива
        el => {
            let flag = true; // устанавливаем индикатор
            dellData.forEach(   // перебираем все исключения
                del => {
                    if(del === el){  // проверяем итый елемент на совпадение с исключением
                        flag = false // если хоть одно исключение совпадает с проверяемым елементом меняем индикатор
                    }
                }
            )
            if(flag){
                filteredArr.push(el)  // если индикатор так и остался true -  добавляем этот елемент к массиву
            }
        }
    )
    return filteredArr;
}

console.log(array);
console.log(withoutArr(array, 555, 61));











// let array = ['ttt', 'fff', 555, true, false, undefined, null, 0, 5, 61, 1];

// function withoutArr(arr, ...dellData){
//     let filteredArr = [];  

//     arr.forEach(  
//         el => {
//             if(!dellData.includes(el)){
//                 filteredArr.push(el)
//             }
//         }

//     )
      
//     return filteredArr;
// }

// console.log(array);
// console.log(withoutArr(array, 555, 61));