function lib(callback, a, b){
    console.log(callback(a,b))
}


function myMap(array, callback){
    let newArr = [];
    for(let i = 0; i<arr.length;i++){
        let el =  arr[i];
        newArr.push(callback(el, i, array));
    }
    return newArr
}

function myForEach(array, callback){

    for(let i = 0; i<arr.length;i++){
        let el =  arr[i];
        callback(el, i, array)
    }
    
}