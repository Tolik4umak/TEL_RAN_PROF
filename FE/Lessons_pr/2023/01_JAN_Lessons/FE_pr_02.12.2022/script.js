let container = document.querySelector('.container')
const form = document.querySelector('form')
const title = document.querySelector('input[name="title"]')
const descr = document.querySelector('input[name="descr"]')
const URL = "http://localhost:3000/posts"

const fetchData = () => {
    fetch(URL)
    .then((resp) => resp.json())
    .then(data => showData(data))
}

fetchData()

const showData = (arr) => {
    container.innerHTML =''
    arr.map((el) => {
        showNewPost(el)
    })

}


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const newTitle = title.value
    const newDescr = descr.value

    const newPost = {
        title: newTitle,
        descr: newDescr
    }

    addPost(newPost)

})

const addPost = (post) => {
    fetch(URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(resp => resp.json())
    .then((data)=>{
        showNewPost(data)
        title.value = ''
        descr.value = ''
    })
}

function showNewPost(post){
    container.innerHTML += `
    <div class="post">
        <h5>${post.title}</h5>
        <p class="post-descr">${post.descr}</p>
        <button class="delete-btn"id=${post.id}>удалить</button>
    </div>  
    `
}


document.addEventListener('click' ,(event) => {

    if(event.target.className == 'delete-btn'){
        console.log(event.target);
        deletePost(event.target)
    }
    
})


function deletePost(btn){
    fetch(`${URL}/${btn.id}`, {
        method: "DELETE"
    })
    .then(() => {
        btn.parentElement.remove()
    })

}