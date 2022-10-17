//First level
console.log("---------First level----------")

let answer = (num) =>  console.log(`number of symbols =  ${num.length}`);



let typeValue = someValue => {

    if(typeof(someValue)=='string'){
        return answer(someValue);
    }
    if(typeof(someValue)=='number' || typeof(someValue)=='boolean' ){
        return answer(String(someValue));
    };

    return console.log('неверный тип данных')

}


typeValue('Hello World');
typeValue(2526255);
typeValue(true);
typeValue(false);
typeValue(undefined);
typeValue(null);






//Second level


// 1.  Стрелочный  Function Expression
// на мой взгляд является наиболее правильным решением:
// - Стрелочная потому что возвращаем одно значение (возвратная функция) 
// на что явно указывает стрелка, таким образом функция становится более читабельной  
// - Function Expression потому что является более безобасным способом чем Function Declaration  , 
//   так как облать видимости в ней более ограничена 
let typeValue1 = someValue => {

    if(typeof(someValue)=='string'){
        return answer(someValue);
    }
    if(typeof(someValue)=='number' || typeof(someValue)=='boolean' ){
        return answer(String(someValue));
    };

    return console.log('неверный тип данных')

}


// 2.  Обычный  Function Expression
 
let typeValue2 = function(someValue) {

    if(typeof(someValue)=='string'){
        return answer(someValue);
    }
    if(typeof(someValue)=='number' || typeof(someValue)=='boolean' ){
        return answer(String(someValue));
    };

    return console.log('неверный тип данных')

}


// 3.  Обычный  Function Expression
// наименее безопасный метод обьявления так как область видимости у нее так же аналогичка как у 'var'
function typeValue3(someValue) {

    if(typeof(someValue)=='string'){
        return answer(someValue);
    }
    if(typeof(someValue)=='number' || typeof(someValue)=='boolean' ){
        return answer(String(someValue));
    };

    return console.log('неверный тип данных')

}



