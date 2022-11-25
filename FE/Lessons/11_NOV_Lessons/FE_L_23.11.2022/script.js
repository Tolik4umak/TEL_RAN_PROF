// const btn_elem = document.querySelector('.btn');
// const p_elem = document.querySelector('.text');



// btn_elem.addEventListener('click',()=>console.log(randomColor()));
// p_elem.addEventListener('click',()=>console.log('привет из параграфа'));


// function randomColor(){
//     let r = Math.round(Math.random()*255);
//     let g = Math.round(Math.random()*255);
//     let b = Math.round(Math.random()*255);

//     return `rgb(${r},${g},${b})`
// }

// // btn_elem.addEventListener('click',()=> document.body.style.background = randomColor());
// // btn_elem.addEventListener('click',()=> btn_elem.style.background = randomColor());


// function random_color(){
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
//     return color;
//     } 




// // создать программу, которая имитирует работу игральных костей
// // при нажатии на кнопку в параграфе должны появиться два случайных числа от 1 до 6 
// function rendomNum(){
//     let num1 = Math.ceil(Math.random()*6)
//     let num2 = Math.round(Math.random()*5+1)

//     return `${num1} ${num2}`
// }

// btn_elem.addEventListener('click',()=> p_elem.innerText = rendomNum());


const data = [

]



const addForm =document.querySelector('.add_form');

addForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const title =addForm.title.value;
    const price =addForm.price.value;
    data.push({title, price});
    addForm.title.value = ''
    addForm.price.value = ''
    rerender()
})

const products = document.querySelector('.products');


function rerender(){
    products.innerText = ''
    data.forEach(({title,price})=>{
        let container = document.createElement('div');
        let titleP = document.createElement('p');
        let priceP = document.createElement('p');
        container.append(titleP,priceP);
        products.append(container);
        titleP.innerText = title;
        priceP.innerText = price;
    })
}


// addForm.addEventListener('submit',(event)=>{ // ----  ПЛОХАЯ РЕАЛИЗАЦИЯ (НЕ ДЕЛАТЬ )
//     event.preventDefault();
//     let container  = document.createElement('div');
//     let titleP = document.createElement('p');
//     let priceP = document.createElement('p');
//     products.append(container);
//     container.append(titleP,priceP);
//     titleP.innerText = addForm.title.value;
//     priceP.innerText = addForm.price.value;
//     addForm.title.value = '';
//     addForm.price.value = '';

// })




