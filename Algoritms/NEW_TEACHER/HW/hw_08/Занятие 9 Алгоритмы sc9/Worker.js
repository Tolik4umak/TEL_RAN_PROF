class Employee {
  constructor(id, fistName, lastName, bankAccount) {
    this.id = id;
    this.fistName = fistName;
    this.lastName = lastName;
    this.bankAccount = bankAccount;
  }

  getInfo() {
    return `${this.id} ${this.fistName} ${this.lastName} ${this.bankAccount}`;
  }

}

let w1 = new Employee(1, 'sergei', 'kam', 1235);
let w2 = new Employee(2, 'vladimir', 'kam', 1234);
let w3 = new Employee(3, 'mia', 'rit', 5643);

let db = [w1, w2, w3];
db.forEach(e => console.log(e.getInfo()));


// class Employee {
//   constructor(value) {
//     this.id = value;
//   }
// }


// let nw = new Employee(123);
// console.log(nw.id);







class People {
  constructor(name) {
    this.mother = null;
    this.father = null;
    this.name = name;
  }
}

let daughter = new People('Маша');
let v = new People('Василий');;
let t = new People('Таня');
daughter.father = v;
daughter.mother = t;

