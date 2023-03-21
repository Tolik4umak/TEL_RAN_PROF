
class Arr{
    constructor(arrLen){
        this.arr = Array(arrLen)
        this.size = 0
    }

    append(item){
       if(this.size >= this.arr.length){
        this.resize() 
       } 
       this.arr[this.size] = item 
       this.size++
    }

    resize(){
        let len = this.arr.length
        if(len === 0) len = 1
        else len *= 2
        let tempArr = Array(len)
        for(let i = 0; i < this.arr.length;i++){
            tempArr[i] = this.arr[i]
        }
        
        this.arr = tempArr
    }

    print() {
        let str = "<div> [";
        for (let i = 0; i < this.size; i++) {
          str += `${this.arr[i]} `;
        }
        document.write(str.trim() + '] </div>') ;
      }

    remove(){
        if(this.size === 0){
            return false
        }
        
        let temp = Array(--this.size)
 
        for(let i = 0; i<this.size; i++){
            temp[i] = this.arr[i]
        }

        this.arr = temp
        return true
    }

    removeAt(index){
        if(this.size === 0 || index >= this.size){
            return false
        }
        if(index === undefined) return false

        let temp = Array(--this.size)
 
        for(let i = 0; i<this.size; i++){
            if(i>=index){
                temp[i] = this.arr[i+1]
            }else{
                temp[i] = this.arr[i]
            }
            
        }

        this.arr = temp
        
        return true
    }

    set(index, data){
        if((index && data) === undefined || index>=this.size ){
            return false
        }
        this.arr[index] = data
        return true
    }

}



let arr2 = new Arr(0)

arr2.append(0)
arr2.append(1)
arr2.append(2)
arr2.append(3)
arr2.append(4)
arr2.append(5)
arr2.append(6)
arr2.append(7)
arr2.append(8)


arr2.print()

console.log(arr2.remove())

arr2.print()

console.log(arr2.removeAt(3))

arr2.print()

console.log(arr2.set(6, 55))

arr2.print()





