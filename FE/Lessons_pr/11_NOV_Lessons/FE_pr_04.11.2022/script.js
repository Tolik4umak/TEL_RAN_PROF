



const posts = [
    {
        title: 'My first title',
        descr: 'My first descr',
        autor: 'Anatolii'
    },
    {
        title: 'My second title',
        descr: 'My second descr',
        autor: 'Ivan'
    }
];

const title = 'TITLE';
const descr = 'Anatolii';
const autor = 'Chumak';

const newData =  {
    title: title,
    descr: descr,
    autor: autor
};



const newPosts = posts.concat(newData);
// const newPosts = [...posts,newData];



console.table(posts);
console.table(newPosts);













let user = {
    name: 'Anatolii',
    age: 27
};



// console.log(`<div> 
//     <p class = 'user'>${user.name}</p>
//     <p class = 'user'>${user.age}</p> 
// </div>`)







// for(let i = 0;i<newPosts.length;i++){


// console.log(
// `<div> 
//     <p> title: ${newPosts[i].title} </p>
//     <p> descr: ${newPosts[i].descr} </p>
//     <p> autor: ${newPosts[i].autor} </p>
// </div>`)

// }


// for(let i = 0;i<newPosts.length;i++){

// console.log(
// `<div> 
//     <p> ${Object.keys(newPosts[i])[0]}: ${Object.values(newPosts[i])[0]} </p>
//     <p> ${Object.keys(newPosts[i])[1]}: ${Object.values(newPosts[i])[1]} </p>
//     <p> ${Object.keys(newPosts[i])[2]}: ${Object.values(newPosts[i])[2]} </p>
// </div>`)

// }





// const book = {
//     author: 'Pushkin',
//     name: 'Kipitanskaya dochka',
//     count: 500
// }

// const books = [
// {
//     author: 'Pushkin',
//     name: 'Kipitanskaya dochka',
//     count: 500
// },
// {
//     author: 'Tolstoi',
//     name: 'Voina i mir',
//     count: 200
// },
// {
//     author: 'Dostoevskii',
//     name: 'Prestuplenie i nakazanie',
//     count: 700
// }

// ]





// console.log(
// `<div> 
//     <p> author: ${book.author} </p>
//     <p> name: ${book.name}} </p>
//     <p> count: ${book.count} </p>
// </div>`)




// console.log(
// `<div> 
//     <p> author: ${books[1].author} </p>
//     <p> name: ${books[1].name}} </p>
//     <p> count: ${books[1].count} </p>
// </div>`
// )




// for(let i = 0;i<books.length;i++){


// console.log(
// `<div> 
//     <p> ${Object.keys(books[i])[0]}: ${books[i].author} </p>
//     <p> name: ${Object.values(books[i])[1]} </p>
//     <p> count: ${books[i].count} </p>
// </div>`)

// }



// const newAutor =  prompt('newAutor');
// const newName =  prompt('newName');
// const newCount =  prompt('newCount');


// const newBook = {
//     author: newAutor,
//     name: newName,
//     count: newCount
// }

// const newBooks = books.concat(newBook);


// for(let i = 0;i<newBooks.length;i++){
// let book = newBooks[i];

// console.log(
// `<div> 
//     <p> ${Object.keys(book)[0]}: ${book.author} </p>
//     <p> name: ${Object.values(book)[1]} </p>
//     <p> count: ${book.count} </p>
// </div>`)

// }


// newBooks.map(book => {
//     console.log(
//         `<div> 
//             <p> ${Object.keys(book)[0]}: ${Object.values(book)[0]} </p>
//             <p> name: ${Object.values(book)[1]} </p>
//             <p> count: ${book.count} </p>
//         </div>`)
// })



// let arr = [0,1,2,3,4]
// console.log(arr);

// arr.forEach(function(el,i) {

//     if(i == 0){
//         return arr[0]='Tolik';
//     }
    
// });
// console.log(arr);



// let newArr = arr.map(function(el,i) {

//     if(i == 0){
//         return 'Anatolii';
//     }
//     return el+1;
// });



// let newArr = arr.map(function(el){
//     console.log(el)
//     if(typeof(el)!=='number'){
//         return 1
//     }else{
//         return el*2
//     }

// })

// // console.log(arr);
// console.log(newArr);




function getFib(n){
    console.log(n)
    if(n<2){
        return n
    }
  
    return getFib(n-1)+1;
}


let res = getFib(5)
console.log("----------"+res);











