
/*
 ██████  ██████       ██ ███████  ██████ ████████ ███████ 
██    ██ ██   ██      ██ ██      ██         ██    ██      
██    ██ ██████       ██ █████   ██         ██    ███████ 
██    ██ ██   ██ ██   ██ ██      ██         ██         ██ 
 ██████  ██████   █████  ███████  ██████    ██    ███████ 
                                                          
                                                          
*/



let users ={'Коля':'1000', 'Вася':'500', 'Петя':'200'} ;

for (let key in users){
    let num = Number(users[key])
    console.log(num);
}

let out = Object.values(users);
console.log(out);



let week = {
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
    7: 'вс',

};


function getKey(val, object){


    for(let key in object){
        if(object[key]===val){
            return key
        }
    }

    return 'error'
    
}


console.log(getKey('ср',week))



function getVal(num,object){
    for(let key in object){
        if(key===num){
            return object[num]
        }
    }

    return 'error'
}

console.log(getVal('1',week))




let getObject= {
    getVal:(num,object)=>{
        for(let key in object){
            if(key===num){
                return object[num]
            }
        }
    
        return 'error'
    },
    getKey:(val, object)=>{


        for(let key in object){
            if(object[key]===val){
                return key
            }
        }
    
        return 'error'
        
    }
}


console.log(getObject.getKey('ср',week))
console.log(getObject.getVal('1',week))
console.log('========================')



// сумма зарплат всего обьекта



let salary = {
    Nick: 1500,
    Vasia: 500,
    Sveta: 2500,
    Ivan: 1000,
    Department: 'development'
}


function sumSalary(obj){
    let sum = getSum(obj);
    let max = getMaxSal(obj);
    let min = getMinSal(obj,max);

    // for(let key in obj){
    //     if(typeof obj[key]==='number'){
    //         sum += obj[key]
    //         if(max<obj[key]){
    //             max = obj[key]
    //         }
    //     }
    // }

    // for(let key in obj){
    //     if(typeof obj[key]==='number'){
    //         min = max;
    //         if(min>obj[key]){
    //             min = obj[key]
    //         }
    //     }
    // }

    return {sum, max, min}
}



function getSum(obj){

    let sum = 0;
    for(let key in obj){
        if(typeof obj[key]==='number'){
            sum += obj[key]
        }
    }
    return sum
}


function getMaxSal(obj){
    let max = 0;

    for(let key in obj){
        if(typeof obj[key]==='number'){
            if(max<obj[key]){
                max = obj[key]
            }
        }
    }
    return max
}
function getMinSal(obj,maxVal){
    let min = maxVal;
    for(let key in obj){
        if(typeof obj[key]==='number'){
            if(min>obj[key]){
                min = obj[key]
            }
        }
    }
    return min
}


console.log(sumSalary(salary))




// проверяет обьект ли 

let isPlainObject = (data) => typeof data === 'object'&& !Array.isArray(data)&&data!==null


console.log(isPlainObject(week))
console.log(isPlainObject([1,2,3,5]))
console.log(isPlainObject(null))


// переобразование в массив 

let makeArrFromObj= obj=> {
    let arr = [];

    for(let key in obj){
        arr.push([key,obj[key]])
    }

    return arr
} 

console.log(makeArrFromObj(week));









console.log(' =======================');

// =======================



let fired = (obj, ...delAll)=>{      
    let newObj = {};

    for(let key in obj){
        if(!delAll.includes(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(fired(week,'1','7'));  // {2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб'}









// let fired = (obj, ...delAll)=>{      
//     let newObj = {...obj};

//     delAll.forEach(del => {
//         newObj = objFilter(newObj, objKey => objKey!==del)
//     })
    
//     return newObj
// }

// console.log(fired(week,'5','6','7'));  // {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт'}



// function objFilter(obj, callback){
//     newObject ={};
//     for(let key in obj){
//         if(callback(key)){
//             newObject[key]=obj[key]
//         }
//     }

//     return newObject
// }


























