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





console.log(document.body.previousElementSibling)


// firstElementChild - первый ребенок
// lastElementChild - последний ребенок
// previousElementSibling - предыдущий братский узел
// NextElementSibling - следующий братский узел
// parentNode - родительский тег 

// -- Определение элемента (метод)

// .div (class = 'div')
// #div (id = 'div')
// div (<div></div>)
// div.element (<div class = 'element'> </div>)




// --------------------------------------
// 2) Работа по созданию новых элементов

// Правило, которое не запутает в рамках создание нового элемента
// 1) Создать элемент
// 2) Заполнить элемент
// 3) Вставить заполненный элемент в разметку 




//1
let btn = document.createElement('button');
//2

btn.className = 'elem';
btn.id = 'elemid';
btn.id = 'elemi';
btn.innerText = 'button'



//3
let p1 = document.querySelector('.text1');

// after() - добавить как следующий братский узел
// before() - добавить как предыдущий братский узел
// append() - добавить как последнего ребенка
// prepend() - добавить как первого ребенка 


p1.before(btn)

document.body.prepend(btn)


 
console.log(btn)


// -------------------------------
// Создание картинки

let img = document.createElement('img')
img.src = 'https://learn.javascript.ru/article/modifying-document/before-prepend-append-after.svg'
document.body.append(img) 



//------------------



let createButton = document.querySelector('.create');
let createInput = document.querySelector('.ulnum');



function addUl(num){
    let ul =document.createElement('ul')
    document.body.prepend(ul)
    for(let i = 1 ; i<=num;i++){
        let li = document.createElement('li');
        li.innerText = i;
        ul.append(li);
    }
}

createButton.addEventListener('click', (event)=> addUl(createInput.value))


// list

let back = document.body;

let list = document.createElement('ul');
list.style.cursor = 'pointer'
list.classList.add('list');

for(let i = 1;i<=3;i++){
    let items =  document.createElement('li')
    items.classList.add('item');
    items.textContent = `item ${i}`
    list.append(items);
}

back.append(list);

let item1 =document.querySelectorAll('.item')[0];
item1.classList.add('havesub')

let arrow = document.createElement('div')
arrow.classList.add('arrow');
item1.prepend(arrow);


// sublist

let subList = document.createElement('ul');
subList.classList.add('hide')
subList.classList.add('sublist')
item1.append(subList);

for(let i = 1;i<=5;i++){
    let subItems =  document.createElement('li')
    subItems.classList.add('subitem');
    subItems.textContent = `sub Item ${i}`
    subList.append(subItems);
}



item1.addEventListener('click',getSubMenu)


function getSubMenu(event){
    this.querySelector('.sublist').classList.toggle('hide')
    this.querySelector('.arrow').classList.toggle('mirrow')
}


// subsub

let subItem1 = subList.querySelectorAll('.subitem')[1];
let subArrow = document.createElement('div')
subArrow.classList.add('arrow');
subArrow.classList.add('subarrow');
subItem1.prepend(subArrow);


let subsubList = document.createElement('ul');
subsubList.classList.add('hide')
subsubList.classList.add('sublist')
subItem1.append(subsubList);

for(let i = 1;i<=8;i++){
    let subsubItems =  document.createElement('li')
    subsubItems.classList.add('subitem');
    subsubItems.textContent = `subsub Item ${i}`
    subsubList.append(subsubItems);
}

subItem1.addEventListener('click',getSubMenu)