function arrGenerate(leng){
    let arr = new Array(leng)
    for(let i = 0 ; i<arr.length;i++){
        let num = Math.floor(Math.random() * 100)
        arr[i] = num
    } 
    return arr
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}


let arr = arrGenerate(5)
console.log(arr)


function getPivotIndex(arr, start, end){

    let pivot = arr[end]
    let i = start
    let j = start


    for(j; j < end ; j++){
        if(arr[j]<pivot){
            swap(arr, i ,j)
            i++
        }
    }

    swap(arr, i ,j)

    return i

}



function sortHuar(arr, left=0 , rigth=arr.length-1){

    if(left<rigth){
        let pivot  = getPivotIndex(arr, left, rigth)

        sortHuar(arr, left, pivot-1)
        sortHuar(arr, pivot+1, rigth)

    }
    
}

sortHuar(arr)
console.log(arr)




console.log('=======arr2========')

function quickSort(arr, left=0 , rigth=arr.length-1){

    let pivot = arr[Math.floor((left+rigth)/2)]

    let i = left
    let j = rigth

    while(i<=j){
        
        while(arr[i]<pivot) i++;
        while(arr[j]>pivot) j--;

        if(i<=j){

            console.log(`${arr[i]} => <= ${arr[j]}`)
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            console.log('i '+i)
            console.log('j '+j)
            i++;
            j--;
            console.log('i++ '+i)
            console.log('j++ '+j)
     
            console.log(arr)
           

        }
        
    }

    if(left < j) quickSort(arr, left, j)
    if(i < rigth) quickSort(arr, i , rigth)


}


let arr2 = arrGenerate(5)

console.log(arr2)
console.log('\/\/\/')
quickSort(arr2)
console.log(arr2)



