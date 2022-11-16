
// let buttons = document.querySelectorAll('.item');


// buttons.forEach((el)=>{
//     el.addEventListener('click', changeColor);
// })





// function changeColor(event){
//     if(this.id === 'img'){
//         document.body.style.background = 'url("https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg")';
//     }else{
//         document.body.style.background = `${this.id}`;
//     }
// }

// console.log(buttons);

// let arr = Array.from(buttons);



// console.log(arr);





//========================



let books = [
    {
        id: 1,
        name: 'Капитанская дочь',
        author: 'Пушкин',
        pages: '500'
    },
    {
        id: 2,
        name: 'Война и мир',
        author: 'Толстой',
        pages: '1000'
    },
    {
        id: 3,
        name: 'Преступление и наказание',
        author: 'Достоевский',
        pages: '700'
    }
]

console.log(books)

let main = document.querySelector('main');

function displayBooks(arr, teg){
    arr.map(el =>{
        teg.innerHTML += `
       <div class = "book book-${el.id}">
            <h3>Название книги: "${el.name}"</h3>
            <p>Автор: "${el.author}"</p>
            <p>Кол-во страниц: "${el.pages}"</p>
            <button class = "del-btn" id = "${el.id}">Удалить</button>
       </div>
       `
    })
}

displayBooks(books, main)

let buttons = document.querySelectorAll('.del-btn');
console.log(buttons)

// удаляем ИЗ МАССИВА
buttons.forEach(button => {
    button.addEventListener('click',delItem)
})


function delItem(event){
 
    let idAtr = +this.getAttribute('id');

    main.innerHTML = '';
    books = books.filter(el => el.id !== idAtr );
   
    displayBooks(books, main)
    
    buttons = document.querySelectorAll('.del-btn');
    buttons.forEach(button => {
        button.addEventListener('click',delItem)
    })
}







/// ИЗ HTML
// buttons.forEach(button => {

//     button.addEventListener('click',()=>{
        
//         let idAtr = button.getAttribute('id');
//         let delBlock = document.querySelector(`.book-${idAtr}`);

//         delBlock.remove();
        
//     })

// })







