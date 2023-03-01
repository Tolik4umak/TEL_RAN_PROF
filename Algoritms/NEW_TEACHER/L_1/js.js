
// function showNum(a){
//     let tail  = a 
//     let devision = 0
//     let reversedNum = 0

//     while (tail>0){
//         devision = tail%10
//         tail = Math.floor(tail/10)
//         reversedNum = reversedNum*10+devision
//     }

//     return reversedNum
// }


// // let num = showNum(134)

// // console.log(num)
// console.log(showNum(12))
// console.log(showNum(123456789))



// function numCollect(a){
//     let length = a * 2 +1
//     let mid = length - a-1
//     let arr = new Array(length)
//     arr[mid]=0

//     let i = mid+1
//     let j = mid-1

//     for(let num = 1;i<arr.length;num++){
//         arr[i]=num
//         arr[j]=-num
//         i++
//         j--
//     }

//     return arr
// }

// console.log(numCollect(2))
// console.log(numCollect(5))
// console.log(numCollect(6))





let arr = [6,2,3,4,7]

console.log(arr)

let count = 0


for(let curr = 0 ; curr < arr.length-1; curr++){

    let max = curr;

    for(let i = curr+1; i < arr.length; i++){

        count++
        console.log(`${count}) -  ${arr[i]}>${arr[max]}`)
        
        if(arr[i] > arr[max]){
            max = i
        }


    }
   

    if(curr+1 == arr.length){
        console.log(`лишняя иттерация curr index ${curr+1} =>> last index ${arr.length-1}`)
    }


    let temp = arr[curr]
    arr[curr]=arr[max]
    arr[max]=temp

    console.log(arr)
    console.log('=======')


}


console.log(count)
