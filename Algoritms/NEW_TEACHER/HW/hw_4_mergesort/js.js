function arrGenerate(leng){

    let newArr = new Array(leng)

    for(let i = 0; i < newArr.length; i++){
        let value = Math.floor(Math.random() * 100)
        newArr[i] = value
    }

    return newArr
}

function mergeSort(arr, left=0, rigth=arr.length-1){

    if(left<rigth){

        let mid = Math.floor((left+rigth)/2)
        
        mergeSort(arr,left,mid)
        mergeSort(arr,mid+1,rigth)

        sortedSort(arr,left,mid,rigth)
    }

}


function sortedSort(arr,left,mid,rigth){

    let arrLeft = arr.slice(left,mid+1)
    let arrRigth = arr.slice(mid+1,rigth+1)

    let i = 0
    let j = 0
    let k = left

    while(i<arrLeft.length && j<arrRigth.length){
        if(arrLeft[i]<arrRigth[j]){
            arr[k] = arrLeft[i]
            i++
        }else{
            arr[k] = arrRigth[j]
            j++
        }
        k++
    }

    while(i<arrLeft.length){
        arr[k] = arrLeft[i]
        i++
        k++
    }

    while(j<arrRigth.length){
        arr[k] = arrRigth[j]
        j++
        k++
    }
  
}


function reverseCounter(arr){
    let counter = 0

    for(let i = 0 ; i < arr.length;i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]) counter++
        }
    }

    return counter

}



let arr1 = arrGenerate(7)

console.log(arr1)
mergeSort(arr1)
console.log(arr1)



console.log(reverseCounter([8,4,2,1]))
console.log(reverseCounter([3,2,1]))


