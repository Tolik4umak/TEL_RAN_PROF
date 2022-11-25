

// let arr =[]

// for(let i =0;i<=9;i++){
//     arr.push(i);
// }

// console.log(arr)



// 5


// const numbers = [12, 4, 3, 34, 3, 1, 5, 34]; 


// function countSolid(arr){
//     let count = 0;
//     arr.map((el)=> {
//         if(el%2==0){
//             count += el
//         }
//     })
//     return count
// }


// console.log(countSolid(numbers));




// const arr = [12, 5, -34, 2, 38, -6, 4, -32, -5, 27] 


// arr.forEach((elem,index,arr)=> console.log(elem,index,arr));

// function forEach(arr,callback){
//     for(let i = 0; i<arr.length;i++){
//         callback(arr[i],i,arr)
//     }
// }

// forEach(arr,(elem,index,arr)=> console.log(elem,index,arr))


// const res = arr.map(elem => elem ** 2);
// console.log(res);


// const newaArr= arr.map(el => el<0? el*-1:el)
// const newaArr2= arr.map(el => Math.abs(el))

// console.log(newaArr)
// console.log(newaArr2)



//=================



// const res = arr.filter(elem => elem>0);
// console.log(res);

//===================


// const res = arr.filter(elem => elem>=-10&&elem<=10);
// console.log(res);


//===================


// const res = arr.find(elem => elem.length<7);
// console.log(res);



//===================


// const products = [
//     {
//     id: 1,
//     title: 'велосипед',
//     price: 45000
//     },
//     {
//     id: 2,
//     title: 'самокат',
//     price: 15000
//     },
//     {
//     id: 3,
//     title: 'лыжи',
//     price: 25000
//     },
//     {
//     id: 4,
//     title: 'скейт',
//     price: 13000
//     },
//     {
//     id: 5,
//     title: 'коньки',
//     price: 7000
//     }
// ]; 


// const newProducts = products.filter(product => product.price<20000);






// const resalt = products.map(product => ({
//     title: product.title,
//     price: product.price
// }))

// const resalt2 = products.map(function(product){
//     return{
//         title: product.title,
//         price: product.price
//     }
// } )

// console.log(resalt);
// console.log(resalt2);
// console.log('=========');




// let arr3 = [1,2,3,4,5,6,7,8,9,10]


// let arr4 = arr3.map(el => {
//     count++;
// })

// let arr5 = arr3.slice(0,arr3.length);

// console.log('arr3 - '+arr3)
// console.log(arr4)
// console.log(count)



// let list = document.querySelector('.list');



// list.innerHTML += `
// <h1> hello world </h1>

// `;


// let items = document.querySelectorAll('.item')



// items.forEach(el =>{
//     el.addEventListener('click',del)
// });


// function del(){
//     this.remove();
// }





// const products = [
//     {
//     id: 1,
//     title: 'велосипед',
//     price: 45000
//     },
//     {
//     id: 2,
//     title: 'ролики',
//     price: 25000
//     },
//     {
//     id: 3,
//     title: 'самокат',
//     price: 1500000
//     },
//     {
//     id: 4,
//     title: 'сноуборд',
//     price: 27000
//     },
//     {
//     id: 5,
//     title: 'лыжи',
//     price: 30000
//     }
//     ]; 


// let goods = products.map(el => el.title)

// let titles = products.map(el => {
//     const {title} = el
//     return title
// })

// let titles = products.map(function(el) {
//     const {title} = el
//     return title
// })

// let titles = products.map(({title}) => {
//     return title
// })

// let titles = products.map(({title}) => title )



// console.log(goods)
// console.log(titles)






// написать скрипт, который формирует массив из объектов с товарами
// которые стоят дешевле 26000 

// let goods2 = products.filter(({price}) => price < 26000)
// console.log(goods2)





//найти общую сумму товаров используя методы массивов 


// let res = products.reduce(((sum,{price})=> sum+price),0)
// let res = products.reduce((sum,{price})=> sum+price,0)
// console.log(res)





// используя методы массивов найти самый дорогой товар 

// let res = products.reduce((prev,el)=> prev.price<el.price ? el: prev)
// console.log(res)




// const products = [
//     {
//     id: 1,
//     title: 'велосипед',
//     price: 45000,
//     marks: [4, 3, 5, 3]
//     },
//     {
//     id: 2,
//     title: 'ролики',
//     price: 25000,
//     marks: [4, 3, 5, 5]
//     },
//     {
//     id: 3,
//     title: 'самокат',
//     price: 15000,
//     marks: [3, 5, 3]
//     },
//     {
//     id: 4,
//     title: 'сноуборд',
//     price: 270000,
//     marks: [4, 3, 5]
//     },
//     {
//     id: 5,
//     title: 'лыжи',
//     price: 30000,
//     marks: [4]
//     }
//     ]; 







// используя методы массивов 
// написать процесс, который позволит сформировать массив
// из объектов с названием, ценой и средней оценкой 


// const resalt2 = products.map(function(el){
//     return{
//         tittle: el.title,
//         price: el.price,
//         avg_marks: el.marks.reduce((a,b)=>a+b)/el.marks.length
//      }
// } )



// const resalt2 = products.map(({id,title,price,marks})=>(
//     {
//         id,title,price,
//         avg_marks: marks.reduce((a,b)=>a+b)/marks.length
//      }
// ))


// console.log(resalt2);



const products = [
    {
    id: 1,
    title: 'велосипед',
    price: 45000,
    count: 3,
    marks: [4, 3, 5, 3]
    },
    {
    id: 2,
    title: 'ролики',
    price: 25000,
    count: 5,
    marks: [4, 3, 5, 5]
    },
    {
    id: 3,
    title: 'самокат',
    price: 15000,
    count: 2,
    marks: [3, 5, 3]
    },
    {
    id: 4,
    title: 'сноуборд',
    price: 270000,
    count: 0,
    marks: [4, 3, 5]
    },
    {
    id: 5,
    title: 'лыжи',
    price: 30000,
    count: 1,
    marks: [4,1]
    }
    ]; 



// используя методы массивов найти общую стоимость всех товаров 

// const resalt2 = products.map(function({price,count}){
//     return price*count
// }).reduce((a,b)=>a+b);

// const resalt2 = products.reduce((a,b)=> a+(b.price*b.count),0);
// const resalt2 = products.reduce((a,{price,count})=> a+(price*count),0);

// console.log(resalt2);

let sum = products.reduce((a,{marks}) => a+marks.reduce((a,b)=>a+b),0);


console.log(resultSum);




