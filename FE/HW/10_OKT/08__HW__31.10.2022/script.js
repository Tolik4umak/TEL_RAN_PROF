//First level
console.log("---------TASK 1----------")

let user = {
    name: 'John',
    age: 30
 };

let countObj = function(obj){
    let count = 0;
    for(let key in obj){
        count++
    }
    return count
}

console.log(countObj(user));



console.log("---------TASK 2----------")

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
 };

 let salaries2 = {};

 let topSalary = function(obj){
    let max = ['',0];

    for(let key in obj){
        if(max[1]<obj[key]){
            max[1] = obj[key];
            max[0] = key;
        }
    }
    if(max[0]===''&&max[1]===0){
        return null
    }

    return max;
 };


console.log(topSalary(salaries));
console.log(topSalary(salaries2));




