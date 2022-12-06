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

let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

// form.addEventListener('submit',(event)=> {
//     event.preventDefault();
//     const task = event.target.task.value
//     console.log(task)

//     tasks.push({id: Date.now(),task})
//     localStorage.setItem('tasks',JSON.stringify(tasks))

//     event.target.task.value = '';
// })


form.addEventListener('submit',write_local)
form.addEventListener('submit',read_local)


function write_local(event){
    event.preventDefault();
    const task = event.target.task.value
    tasks.push({id: Date.now(),task})
    localStorage.setItem('tasks',JSON.stringify(tasks))
    rerender()
}

function read_local(event){
    event.preventDefault();
    const task = event.target.task.value
    console.log(task)
    event.target.task.value = '';
}


console.log(tasks)


function rerender(){
    tasks_container.innerText = '';

    if(tasks.length == 0){
        const task_p = document.createElement('p');
        tasks_container.append(task_p)
        task_p.innerText = 'Дел нет '
    }

    tasks.forEach(el => {
        const task_p = document.createElement('p');
        tasks_container.append(task_p)
        task_p.innerText = el.task

        task_p.addEventListener('click',(event)=>{
            task_p.classList.toggle('red')
        })
    });



}

rerender()



