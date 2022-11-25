// // const elem =document.querySelector('p');
// const elemList = document.querySelectorAll('p')

// // console.log(elem)
// // console.log(elem.innerText)
// // console.log(elem.innerHTML)
// // console.log(elem.textContent)

// // console.log(elemList)
// // console.log(elemList[2].innerText)


// // const text_list = [...elemList].map(elem => elem.innerText);

// // console.log(text_list)


// const mainElem = document.getElementById('main');
// const pList = document.getElementsByTagName('p')

// // console.log(mainElem.innerText);
// // console.log(pList[2].innerText);


// let myText = document.querySelector('.main p');
// console.log(myText.innerText);







//=====================
//=====================
//=====================
//=====================


// вывести параграф с классом info из div с идентификатором main 

// let myP = document.querySelector('#main .info')
// console.log(myP.innerText)



//найти параграф с классом main, который находится в div, который находится в div с идентификатором info 


// const myP = document.querySelector('#info div .main')
// console.log(myP.innerText)





//=====================
//=====================
//=====================
//=====================



// const rootElem = document.querySelector('#root');

// const words = ['велик','самокат','лыжи']

// words.forEach(word =>{
//     const newP = document.createElement('p');
//     newP.innerText = word
//     rootElem.append(newP)
// })



// const pElem = document.createElement('p');
// pElem.innerText = "я новый "

// rootElem.append(pElem)

// console.log(pElem)



//=====================
//=====================
//=====================
//=====================


const rootElem = document.querySelector('#root');



const products = [
    {
        title: 'велосипед',
        price: 45000,
        count: 1,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/220px-Alexandr_Ivanov_001.jpg',
    },
    {
        title: 'самокат',
        price: 25000,
        count: 0,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/220px-Alexandr_Ivanov_001.jpg',
    },
    {
        title: 'лыжи',
        price: 30000,
        count: 3,
        link: 'https://example.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/220px-Alexandr_Ivanov_001.jpg',
    }
];


// products.forEach(product => {
//     const container = document.createElement('div')
//     const titleP = document.createElement('p');
//     const priceP = document.createElement('p');
//     container.append(titleP,priceP);
//     rootElem.append(container);
//     titleP.innerText = product.title;
//     priceP.innerText = product.priceP;
// })

// products.forEach(product => {
//     rootElem.innerHTML += `
//     <div>
//         <p>${product.title}</p>
//         <p>${product.price}</p>
//     </div>

//     `
// })






// добавить в каждый объект свойство count с каким-либо числом и
// выводить кол-во продуктов отдельный параграфом

// products.forEach(product => {
//     const container = document.createElement('div')
//     const titleP = document.createElement('p');
//     const priceP = document.createElement('p');
//     const countP = document.createElement('p');
//     container.append(titleP,priceP,countP);
//     rootElem.append(container);
//     titleP.innerText = product.title;
//     priceP.innerText = product.price;
//     countP.innerText = product.count;
// })




// в случае, если кол-во товара равно нулю выведите фразу "Товар закончился" 


// products.forEach(product => {
//     const {count} = product;
//     const container = document.createElement('div')
//     const titleP = document.createElement('p');
//     const priceP = document.createElement('p');
//     const countP = document.createElement('p');
//     container.append(titleP,priceP,countP);
//     rootElem.append(container);
//     titleP.innerText = product.title;
//     priceP.innerText = product.price;
//     // if(product.count === 0) {
//     //     countP.innerText = 'товар закончился';
//     // } else{
//     //     countP.innerText = product.count;
//     // }
//     // product.count === 0?  countP.innerText = 'товар закончился': countP.innerText = product.count;
//     // countP.innerText = product.count === 0? 'товар закончился': product.count;
//     countP.innerText = count === 0? 'товар закончился': count;
// })



products.forEach(({count, link,img,...product}) => {
    const container = document.createElement('div')
    const titleP = document.createElement('p');
    const priceP = document.createElement('p');
    const countP = document.createElement('p');
    const linkA = document.createElement('a');
    const imageImg = document.createElement('img');


    container.append(titleP,priceP,countP,linkA,imageImg);
    rootElem.append(container);


    titleP.innerText = product.title;
    priceP.innerText = product.price;
    countP.innerText = count === 0? 'товар закончился': count;
    linkA.innerText = 'follow link';
    linkA.href = link;
    linkA.target = '_blank';

    imageImg.src = img;






    container.classList.add('product')

})
