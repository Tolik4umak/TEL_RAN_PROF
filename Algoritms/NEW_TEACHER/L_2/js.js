const arr1 = [1,2,3,7,8,10,15,20,36,48]


function findIndexNum(arr, num , left = 0 , rigth = arr.length-1){

    let middle = Math.floor((left+rigth)/2)
    // console.log(`left: ${left} rigth: ${rigth}  mid: ${middle}`)
        
    if(left<=rigth){
        if(arr[middle] == num){
            return middle;
        }else if(arr[middle] > num ){
            return findIndexNum(arr, num, left, middle-1 )
        }else if(arr[middle] < num ){
            return findIndexNum(arr, num, middle+1, rigth )
        }
    }
    return -1
}


console.log(findIndexNum(arr1, 8 ))
console.log(findIndexNum(arr1, 20 ))
console.log(findIndexNum(arr1, 49 ))
