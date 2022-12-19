
const form = document.querySelector('.post-form');
const root = document.querySelector('.root')

function readLocal(){
    return JSON.parse(localStorage.getItem('databaseData'))??[]
}
function writeLocalArr(obj){
    return localStorage.setItem('databaseData',JSON.stringify(obj))
}

rerender()

form.addEventListener('submit',takeFormValues)


function takeFormValues(event){

    event.preventDefault()

    let {title,body} = event.target
    if(title.value&&body.value){
        sendPost(title.value,body.value)
    }

    event.target.title.value = ''
    event.target.body.value = ''
    

}



function sendPost(title,body){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(({title,body,id}) => addToArr(title,body,id));
}


function addToArr(title,body,id){
    writeLocalArr([...readLocal(),{title,body,id,localId: Date.now()}])
    rerender()
}

function rerender(){
    root.innerText = ''
    readLocal().forEach(({title,body,id,localId})=>{

        const container = createCard(title,body,id,localId);
        root.append(container)
   
    })
}

function createCard(title,body,id,localId){

    const container = document.createElement('div')
    const titleP = document.createElement('p')
    const bodyP = document.createElement('p')
    const idP = document.createElement('p')
    const del = document.createElement('button')

    titleP.innerText = title
    bodyP.innerText = body
    idP.innerText = id
    del.innerText = 'DELETE'

    del.addEventListener('click',(event)=>delCard(localId))

    container.append(titleP,bodyP,idP,del)
    return container

}


function delCard(localIdToDel){
    writeLocalArr(readLocal().filter(({localId})=> localId != localIdToDel))
    rerender()
}








let fetchPromise  = '[0,1,5,8,7,9]'
// let a  = null

console.log(fetchPromise)


let promise = new Promise((res,rej)=>{
    let x = JSON.parse(fetchPromise)
    if(Array.isArray(x)){
        res(x)
    }else{
        rej('rejjjjj')
    }
})


promise.then((resolve)=>console.log(resolve),(rej)=>console.log(rej))
