class Dog{
    constructor(name){
        this.name = name;
    }
    hi(){
        console.log('hi ' + this.name)
    }
};


const dog1 = new Dog('bobik');
const dog2 = new Dog('sharik');


// dog1.init('bobik')
// dog2.init('sharik')

dog1.hi()
dog2.hi()



class User{

    static _roles = ['manager','admin','root','guest']
    
    static add_role(new_role){
        this._roles.push(new_role);
    }

    constructor(name,username,age,role = 'guest'){
       
        this.name = name;
        this.username = username;
        this.age = age;
        this.changeRole(role)
    }
    hi(){
        const {name,username,age,role} = this;
        console.log(`Hi ${name} ${username} ${age} ${role} `)
    }
    birthday(){
        this.age = this.age+1
    }
    changeName(newName){
        this.name = newName
    }
    changeRole(role){

        if(User._roles.includes(role)){
            this.role = role
        }else{
            this.role = null
        }
    }
}



const user1 = new User('Anatolii','Tolik4umak',29,'manager')
const user2 = new User('Violetta','Violetka',27,'admin')
console.log(user1)
user1.hi()
user1.birthday()
user1.changeName('Konstantin')

console.log(user1)

user1.name = 'dfjhkh'
console.log(user1)
console.log(user2)
user2.changeRole('manage')
console.log(user2)
user2.changeRole('manager')
console.log(user2)
User.add_role('manage')
user2.changeRole('manage')
console.log(user2)


























// class Product{
//     constructor(title, price, count){
//         this.title = title;
//         this.price = price;
//         this.count = count;
//         this.income = 0
//     }
//     change_price(newPrice){
//         if(newPrice>0){
//             this.price = newPrice
//         }else{
//             console.log(`the price ${newPrice} is negative`)
//         }
//     }
//     sale(){
//         if(this.count==0){
//             console.log('товар закончился')
//         }else{
//             this.count -= 1
//             this.income +=  this.price
//         }
//     }
// }

// const bike = new Product('велик',4500,7)
// console.log(bike)
// bike.change_price(55000)
// bike.change_price(-3000)
// bike.sale()
// bike.sale()
// bike.sale()
// bike.sale()
// bike.sale()
// console.log(bike)
// bike.sale()
// bike.sale()
// bike.sale()
// bike.sale()
// bike.sale()
// console.log(bike)
