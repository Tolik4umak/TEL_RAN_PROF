// const root = document.querySelector('.root')

// function getData(postI_id){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postI_id}`)
//     .then(resp => resp.json())
//     .then(data => createElemant(data))
// }

// getData(3)


// function createElemant(data){
//     const container = document.createElement('div')
//     const title = document.createElement('p')
//     const body = document.createElement('p')

//     container.append(title,body)

//     title.innerText = data.title
//     body.innerText = data.body
//     root.append(container)

// }

const root = document.querySelector('.root')

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((resp)=> {
        console.log(resp)
        return resp.json()
    })
    .then(data => createData(data))

function createData(data){
    console.log(data)
    data.forEach(element => {
        const par = document.createElement('p')
        root.append(par)
        for(let key in element){
            const subpar = document.createElement('div')
            subpar.innerText = `${key} -........ `
            subpar.append(element[key])
            par.append(subpar)
        }
    });
}