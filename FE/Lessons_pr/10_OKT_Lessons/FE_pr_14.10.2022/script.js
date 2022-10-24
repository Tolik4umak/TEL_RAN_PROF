// let userName = prompt("Как вас зовут","");


// userName = userName.slice(0,1).toUpperCase() + userName.slice(1);


// let toCapitalize = function(name){
//     let newName = name.slice(0,1).toUpperCase() + name.slice(1);
//     return newName;
// }


// console.log('hello '+toCapitalize(userName) + ' !');


// let arr = ['Ivan','Andrey','Anna','Veronika'];
// let newName = prompt('type your name','');
// let newName2 = 'Artur';


// let checkName = function(name){

//     for(let i in arr){
//         if(name.toLowerCase() == arr[i].toLowerCase()){
//             return alert('Такое имя уже существует');
//         }
//     }
//     arr.push(name);
// }
// console.log(arr);
// checkName(newName);

// let checkNameIncludse = function(name){

//     if(arr.includes(name)){
//         return alert('Такое имя уже существует');
//     }
//     arr.push(name);
// }


// console.log(arr);
// checkNameIncludse(newName);
// console.log(arr);
// checkName(newName2, arr);
// console.log(arr);



// let arr = ['a','b','c','d','e'];
// let arrDeleted = arr.splice(1,3, '2','3','4','5');

// console.log(arr);
// console.log(arrDeleted);




// let message = ["Hello", "my", "name", "is", "Aresen"];

// message.splice(-1,1, 'Anatolii');

// console.log(message);

// let newMessage = message.join(" ");

// console.log(newMessage);



// let message = ["Hello", "my", "name", "is", "Aresen"];
// console.log(message);

// let index = +prompt('каое слово вы хотите удалить в: ' + message.join(' '));

// index--

// let str = prompt('каое слово вы хотите добавить');

// message.splice(index, 1, str);

// console.log(message.join(' '));








let message = ["Hello", "my", "name", "is", "Anatolii"];

let changeArr = function(arr){

    let index = prompt(`Какое слово вы хотите поменять в:
     ${arr.join(' ')}?

    Если слов несколько запишите номера слов 
    через пробел в порядке возростания 
    начиная с еденицы
    Где "${arr[0]}" - первое слово `, ''); // Указал номера слов 
    
    index = index.split(' '); // сделал из них массив
    for(let key in index){
        index[key] = +index[key]-1;
    }                               // переобразовал все элементы массива в числовой тип

    let newStr = prompt(`Введите новое слово или слова
    в порядке изменения, через пробел`); // Получил новые слова 
    newStr = newStr.split(' '); // Переобразовал строку в массив

    for(let i in index){
        arr.splice(index[i], 1, newStr[i]);
    }                                 // Поменял новые слова вместо старых в соответствии с их номерами 

    return arr; 
}

changeArr(message);

console.log(message.join(' '));

