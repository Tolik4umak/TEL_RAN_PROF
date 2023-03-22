
  let storage = Array(10);
  let tail = 0

  function enqueue(item) {
    storage[tail++] = item
  }
  function dequeue(item) {
    let t = 0
    let isPresent = false
    for(let i = 0; i < tail; i++){
      if(storage[i] === item){
        t = i
        isPresent = true
      }
    }

    if(isPresent){

      for(let i = t; i<tail-1; i++){
        storage[i] = storage[i+1]
      }
  
      storage[--tail] = ''
      return t
    }
      return -1
  }
  function isEmpty() {
    return tail === 0;
  }
  function maxItemInQueue() {

    let max = storage[0]
    for(let i = 1; i < tail; i++){
      if(storage[i]>max){
        max = storage[i]
      }
    }

    return max;
  }
  function peek() {
    return storage[tail-1] ;
  }



  enqueue(5)
  enqueue(8)
  console.log(maxItemInQueue())
  console.log(dequeue(8))
  console.log(isEmpty())
  console.log(peek())

  console.log(storage)
