
/*
 ██████  ██████       ██ ███████  ██████ ████████ ███████ 
██    ██ ██   ██      ██ ██      ██         ██    ██      
██    ██ ██████       ██ █████   ██         ██    ███████ 
██    ██ ██   ██ ██   ██ ██      ██         ██         ██ 
 ██████  ██████   █████  ███████  ██████    ██    ███████ 
                                                          
                                                          
*/




// let user = {
//     name: 'Anatolii',
//     age: 27
// };

// console.log(user);

// user.married = true;

// console.log(user);

// delete user.age;

// console.log(user);



// const user2; // можно изменить свойства но нельзя переназначить саму переменную



// const user3 = {
//     name: "Tolik",
//     age: 25
// };

// let userKey = 'age';

// console.log(user3);
// console.log(user3[userKey]);













// Проверка на пустоту 
// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false. 
// Должно работать так: 
// let schedule = {}; 
// console.log( isEmpty(schedule) ); // true 
// schedule["8:30"] = "get up"; 
// console.log( isEmpty(schedule) ); // false 



let isEmpty = obj => {
    for(let key in obj){
        return false
    }
    
    return true
};



let user = {
   
}
console.log(isEmpty(user));
user.name = 'John';
user.surname = 'Smith'
console.log(isEmpty(user));






let helpers = {
    isEmpty: obj => {
        for(let key in obj){
        return false
    }
    
    return true}
};

console.log(helpers.isEmpty(user));




