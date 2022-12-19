const root = document.querySelector('.root')
const form = document.querySelector('.form')

let postArr = []
// function createPost(title,string){
//     let container = document.createElement('div')
//     let body_p = document.createElement('p')
//     let titile_p = document.createElement('p')
    
//     container.classList.add('post')
//     titile_p.classList.add('sub_header')


//     titile_p.innerText = title
//     body_p.innerText = string

//     root.append(container)
//     container.append(titile_p,body_p)
// }


// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(resp => resp.json())
// .then(({title,body}) => createPost(title,body))


// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const id = e.target.id.value;

//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(resp => resp.json())
//         .then(({title,body}) => createPost(title,body))
    
//     e.target.id.value = ''
// })







fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    tit: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json)
  .then((json) => console.log(json));









  rerender()

const postForm = document.querySelector('.post-form');


postForm.addEventListener('submit',(event)=>{
    event.preventDefault()

    const {title,body,id} = event.target;

    sendPost(title.value,body.value,id.value)

    event.target.title.value = ''
    event.target.body.value = ''
    event.target.id.value = ''
    
})


function sendPost(title,body,userId){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then(({title,body}) => createPost(title,body));
}






function createPost(title,string){
    // postArr.push({title,string})
    setLocal([...localArr(),{title,string}])
    rerender()
}



function rerender(){
    root.innerText = ''
    localArr().forEach(({title,string})=>{
        let container = document.createElement('div')
        let body_p = document.createElement('p')
        let titile_p = document.createElement('p')
        
        container.classList.add('post')
        titile_p.classList.add('sub_header')
    
    
        titile_p.innerText = title
        body_p.innerText = string
    
        root.append(container)
        container.append(titile_p,body_p)
    })
}








function setLocal(a){
    return localStorage.setItem('request', JSON.stringify(a))
}

function localArr(){
    return JSON.parse(localStorage.getItem('request'))??[]
}