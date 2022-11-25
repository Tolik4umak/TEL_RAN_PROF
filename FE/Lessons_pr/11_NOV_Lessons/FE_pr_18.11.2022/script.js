
const cars = [ 
    { mark : "Mercedes-Benz", model : "S600", year : "1999", price : 15000 }, 
    { mark : "BMW", model : "M3", year : "2002", price : 18000 },
    { mark : "Audi", model : "Q3", year : "2006", price : 14000 }, 
    { mark : "VW", model : "Golf-4", year : "1998", price : 8000 }, 
    { mark : "Toyota", model : "MarkX", year : "2005", price : 13000 }, 
    { mark : "Lexus", model : "RX300", year : "2007", price : 20000 }, 
    { mark : "Mercedes-Benz", model : "S500", year : "1995", price : 12000 }, 
]




// 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет 
// объединенная строка `Марка Модель` и все остальные свойства


// const newCars = cars.map(({mark,model,...rest}) => (
//     {
//         'mark and model': `${mark} ${model}`,
//         ...rest
//     }
// ))

// const newCars = cars.map(({mark,model,...rest}) => {
//     return{
//         'mark and model': `${mark} ${model}`,
//         ...rest
//     }
// })


// Задача2. Посчитать среднюю цену всех автомобилей 
// средняя цена = сумма всех цен / количество автомобилей 

// const carsAvr = cars.reduce((a,{price})=> a+price ,0)/cars.length;


// console.log(carsAvr.toFixed(2))
// console.log(Math.round(carsAvr))
// console.log(Math.ceil(carsAvr))
// console.log(Math.floor(carsAvr))


// const dateCompare =new Date('11/18/2002').getFullYear()
// const today = new Date().getFullYear();

// // let modernCar = cars.filter(({year}) =>  year > (today-20)) 
// let modernCar = cars.filter(({year}) =>  today-year<20) 


// // let modernCar = cars.filter(({year}) => year > (2022-20) )

// console.log(modernCar)
// console.log(dateCompare)
// console.log(today-20)



const users = [
    {name: 'Anatolii', bDay: '12/05/1993'},
    { name : "Arsen", bDay : "03/03/1998"}, 
    { name : "Ivan", bDay : "10/25/1990" }, 
    { name : "Alex", bDay : "07/05/1995" }, 
    { name : "Kostya", bDay : "02/12/2005" }, 
    { name : "Max", bDay : "05/07/2001" }, 
    { name : "Ann", bDay : "01/15/2002" }, 
    { name : "Julia", bDay : "09/13/2003" }, 
    { name : "Oksana", bDay : "10/25/2001" }, 
]

// Кто из пользователей старше 20? Для след. года тоже должно работать 

const today = new Date().getFullYear();
let older20 = users.filter(({bDay}) => today-(new Date(bDay).getFullYear()) > 20 )
console.log(older20)
console.log(users)


let sortedCars = cars.sort((a,b)=> a.price-b.price);
console.log(sortedCars)









































































// // 1. Вернуть массив с маркой и моделью машины. ["Mercedes-Benz S600", "BMW M3"] 

// let newCars = cars.map(({mark,model}) => ${mark} ${model});
// //let newCars = cars.map((car) => ${car.mark} ${car.model});
// console.log(newCars);

// // 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет // объединенная строка Марка Модель и все остальные свойства // [{ markModel : "Mercedes-Benz S600", year : "1999", price : 15000 }, // { markModel : "BMW M3", year : "2002", price : 18000 } ] 


// let newCars2 = cars.map(car => {
//     return {
//     markModel: ${car.mark} ${car.model},
//     price: car.price,
//     year : car.year
// }
// })

// let newCars3 = cars.map(({mark, model,year, price}) => {
//     return{
//         markModel:  ${mark} ${model},
//         year,
//         price
//     }
// })

// let newCars4 = cars.map(({mark, model, ... rest}) => {
//     return{
//         markModel:  ${mark} ${model},
//        ...rest
//     }
// })
// console.log(newCars2);
// console.log(newCars3);
// console.log(newCars4);