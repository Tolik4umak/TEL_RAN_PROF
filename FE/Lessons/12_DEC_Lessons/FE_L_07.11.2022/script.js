// const arr = {
//     data: [12,4,32,5,43]
// }


// localStorage.setItem('test_item',JSON.stringify(arr));

// console.log(JSON.parse(localStorage.getItem('test_item')));

let form= document.querySelector('.add_task');
const tasks_container = document.querySelector('.tasks')

// let tasks = JSON.parse(localStorage.getItem('tasks'));

// if(tasks === null){
//    tasks = [];
// }

// let tasks;
// if(localStorage.getItem('tasks')){
//     tasks = JSON.parse(localStorage.getItem('tasks'))
// }else{
//     tasks =[]
// }

// let tasks = read_local();

// form.addEventListener('submit',(event)=> {
//     event.preventDefault();
//     const task = event.target.task.value
//     console.log(task)

//     tasks.push({id: Date.now(),task})
//     localStorage.setItem('tasks',JSON.stringify(tasks))

//     event.target.task.value = '';
// })

function read_local(){
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
}

function write_local(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


form.addEventListener('submit',fillList)
function fillList(event){
    event.preventDefault();
    const task = event.target.task.value
   
    // write_local([...read_local(),{id: Date.now(),task}])
    write_local(read_local().concat({id: Date.now(),task}))

    rerender()
    event.target.task.value = '';
}



function rerender(){
    tasks_container.innerText = '';

    if(read_local().length == 0){
        const task_p = document.createElement('p');
        tasks_container.append(task_p)
        task_p.innerText = 'Новых дел нет '
    }

    read_local().forEach(card => {
        const new_card = createCard(card);
        tasks_container.append(new_card)
    });



}

rerender()


function createCard(el){
    const card = document.createElement('div')
    const p = document.createElement('p');
    const button = document.createElement('button')

    card.append(p,button)

    p.innerText = el.task;
    button.innerText = 'Х'

    button.addEventListener('click',(event)=> delCard(el.id))

    return card 
}

function delCard(buttonId){
    write_local(read_local().filter(({id})=> id!=buttonId))
    rerender()
}




