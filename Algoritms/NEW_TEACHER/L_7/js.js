
let org = [1,9,1,9]
let tar = [0,0,0,0]



function findShottestWay(origin, target){
  let count = 0
  for(let i = 0 ; i<origin.length; i++){
    let localCount = 0;
    let moveRigth = origin[i]
    let moveLeft =  origin[i]
    while(moveRigth !== target[i] && moveLeft !== target[i]){
      localCount++
      moveRigth++
      if(moveRigth === 10){
        moveRigth=0
      }
      moveLeft--
      if(moveLeft === -1){
        moveLeft=9
      }
    }
    count = count + localCount
  }
  return count
}
console.log(findShottestWay(org, tar))
