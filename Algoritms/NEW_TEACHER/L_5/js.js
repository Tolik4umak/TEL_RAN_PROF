

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age ;
    }

    getInfo() {
        console.log({
            name: this.name,
            age: this.age
        })
    }
}


let p1 = new Person('tolik', 29)
let p2 = new Person('violetta', 28)
let p3 = new Person('sliva', 3, ('sdv', 4))

class Team {
    constructor(){
        this.stek = []
    }
    addPersom(obj){
        this.stek.push(obj)
    }
    print(){
        this.stek.forEach(e => e.getInfo())
    }
}

let team1 = new Team

team1.addPersom(new Person('tolik', 29))
team1.addPersom(new Person('violetta', 28))
team1.addPersom(new Person('sliva', 23))

team1.print()


