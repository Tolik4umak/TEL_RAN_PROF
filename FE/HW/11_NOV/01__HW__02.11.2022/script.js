console.log("---------TASK 1----------")

console.log("ВАРИАНТ РЕШЕНИЯ  -- 1 --")


const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1};
const data3 = { a: 1, b: 2 };
const data4 = { a: 1, b: 1, c: 4};
const data5 = { b: 1, a: 1};



function isEqual(obj1, obj2){
    let arr1 = Object.entries(obj1);
    let arr2 = Object.entries(obj2);    
    

    if(arr1.length !== arr2.length){
        return false
    } else{
        for(let i = 0; i<arr1.length;i++){
            let key1 = arr1[i][0]; 
            let key2 = arr2[i][0]; 
            let value1 = arr1[i][1]; 
            let value2 = arr2[i][1]; 
            
            if((key1!==key2)||(value1!==value2)){
                return false
            }


        }
    }
    
    return true
}



console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
console.log(isEqual(data, data4)); // false
console.log(isEqual(data, data5)); // false





console.log("ВАРИАНТ РЕШЕНИЯ  -- 2 --")  



function isEqual2(obj1,obj2){
    for(let key in obj1){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }
    for(let key in obj2){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }
    return true
}

console.log(isEqual2(data, data2)); // true
console.log(isEqual2(data, data3)); // false
console.log(isEqual2(data, data4)); // false
console.log(isEqual2(data, data5)); // true   // вернет true даже если ключи/знач в разном порядке но при етом полностью совпадают 




console.log("==========================")
console.log("==========================")


console.log("---------TASK 2----------")



const data6 = { a: 1, b: 2 };
const data7 = { c: 1, b: 2 };

console.log("ВАРИАНТ РЕШЕНИЯ  -- 1 --")  // Этот способ по моему мнению предпочтительнее

function intersection2(obj1,obj2){
    let newObj = {};
    
    for(let key in obj1){
        if(obj1[key]===obj2[key]){
            newObj[key]=obj1[key];
        }
    }
    
    return newObj
}



console.log(intersection2(data, data2)); //{a: 1, b: 1}
console.log(intersection2(data, data3)); //{a: 1}
console.log(intersection2(data, data4)); //{a: 1, b: 1}
console.log(intersection2(data, data5)); //{a: 1, b: 1}
console.log(intersection2(data6, data7)); // { b: 2 }






console.log("ВАРИАНТ РЕШЕНИЯ  -- 2 --")

function intersection(obj1,obj2){
    let newObj = {};
    let arr1 = Object.entries(obj1);
    let arr2 = Object.entries(obj2);    
    

    arr1.map(function(item){
        arr2.map(function(el){
            if(item[0]===el[0]&&item[1]===el[1]){
                newObj[item[0]]=item[1]
            }
        })
    })
    
    return newObj
}

console.log(intersection2(data, data2)); //{a: 1, b: 1}
console.log(intersection2(data, data3)); //{a: 1}
console.log(intersection2(data, data4)); //{a: 1, b: 1}
console.log(intersection2(data, data5)); //{a: 1, b: 1}
console.log(intersection2(data6, data7)); // { b: 2 }





















