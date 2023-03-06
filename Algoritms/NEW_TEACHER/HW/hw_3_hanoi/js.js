
const hanoi = (num, left =1 , mid = 2, rigth = 3 ) => {

    
    if(num === 1) return console.log(`from ${left} to ${rigth}-      num =  ${num}`)
    

    hanoi(num-1, left, rigth, mid)

    console.log(`from ${left} to ${rigth}--     num =  ${num}`)
 
    hanoi(num-1, mid, left, rigth)


}


hanoi(3)
