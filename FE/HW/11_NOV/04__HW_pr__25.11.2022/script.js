const customers = [ 
    { 
        id: 1, 
        firstName: "Ivan", 
        lastName: "Alekseev" 
    }, 
    { 
        id: 2, 
        firstName: "Arsen", 
        lastName: "Iusupov" 
    }, 
    { 
        id: 3, 
        firstName: "Sam",
        lastName: "Tyler"
    }, 
    {
         id: 4, 
         firstName: "Jack",
         lastName: "Rocky" 
    }, 
    { 
        id: 5, 
        firstName: "Kendrick", 
        lastName: "Lamaar" 
    }, 
    { 
        id: 6, 
        firstName: "John", 
        lastName: "Lennon" 
    }, 
    { 
        id: 7, 
        firstName: "Paul", 
        lastName: "McCartney" 
    } 
] 

const orders = 
[ 
    { 
        id: 1, 
        customerId: 3, 
        date: "02/03/2022", 
        delivered: true,
        products: [ {productId: 567,  price: 2000}, {productId: 789, price: 3000} ] 
    }, 
    { 
        id: 2, 
        customerId: 3, 
        date: "05/08/2022", 
        delivered: false, 
        products: [ { productId: 413, price: 2500}, {productId: 124, price: 1000} ] 
    }, 
    { 
        id: 3, 
        customerId: 1, 
        date: "05/12/2021", 
        delivered: true, 
        products: [ {productId: 500, price: 1500}, {productId: 213, price: 1500} ] 
    }, 
    { 
        id: 4,
        customerId: 6, 
        date: "10/07/2022", 
        delivered: true, 
        products: [ {productId: 531, price: 1000}, {productId: 231, price: 2500} ] 
    }, 
    { 
        id: 5, 
        customerId: 6, 
        date: "10/08/2022", 
        delivered: false, 
        products: [ {productId: 912, price: 5000}, {productId: 942, price: 500} ] 
    }, 
    { 
        id: 6, 
        customerId: 2, 
        date: "10/08/2022", 
        delivered: true, 
        products: [ {productId: 545, price: 2300}, {productId: 942, price: 800} ] 
    }, 
    { 
        id: 7, 
        customerId: 7, 
        date: "05/09/2022", 
        delivered: true, 
        products: [ {productId: 600, price: 2000}, {productId: 849, price: 900} ] 
    }, 
    { 
        id: 8, 
        customerId: 3, 
        date: "10/10/2022", 
        delivered: true, 
        products: [ {productId: 575, price: 2400}, {productId: 248, price: 850} ] 
    }, 
] 



console.log('TASK 1')
// ДЗ. Написать функцию, которая принимает имя и фамилию пользователя и возвращает 
// true, если пользователь с таким именем делал заказ 
// false, если пользователь с таким именем ничего не заказывал 

let isUserDidOrder = function(uName,uLastName){
    let idByName = customers.find(({firstName,lastName})=> firstName == uName && lastName == uLastName).id
    return orders.some(({customerId})=> customerId == idByName)
}

console.log(isUserDidOrder('John','Lennon')); //true
console.log(isUserDidOrder('Jack','Rocky')); //false



console.log('TASK 2')
// ДЗ. Вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь 
// Написать функцию, которая принимает имя и фамилию и возвращает массив продуктов, 
// которые заказал этот пользователь. У одного пользователя может быть несколько заказов. 
// Итоговый массив должен быть одномерным. То есть должен содержать только объекты продуктов. 

let userOrdersList = function(name, surname){
    let getUserId = customers.find(({firstName,lastName})=> firstName == name && lastName == surname).id
    let getUserOrders = orders.filter(({customerId}) => customerId == getUserId)
    return getUserOrders.map(({products})=> products).flat(1)
    
    // ЕСЛИ НЕ ЗНАЕМ МЕТОД FLAT
    let productsList2 = []; 
    getUserOrders.map(({products})=> products.forEach(product => productsList2.push(product)))
    return productsList2
}

console.log(userOrdersList('Sam','Tyler'));
console.log(userOrdersList('Jack','Rocky'));



console.log('TASK 3')
// ДЗ. Написать функцию, которая возрващает массив пользователей, которые ничего не заказали. 

let notOrderedUsers = function(customersTable,ordersTable){
    return customersTable.filter(({id})=> (
        ordersTable.every(({customerId})=> customerId != id)
    ))
}

console.log(notOrderedUsers(customers,orders))






