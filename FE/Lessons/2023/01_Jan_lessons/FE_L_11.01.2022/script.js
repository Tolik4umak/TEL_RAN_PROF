const todos = []

const todo_container = document.querySelector('.todo_container')
const countContainer = document.querySelector('.count_container')
 
const add_todo = document.querySelector('.add_todo')

rerender()

add_todo.addEventListener('submit',(event)=>{
    event.preventDefault();
    const {title} = event.target;

    const new_todo = {
        id: Date.now(),
        title: title.value,
        dttm: new Date().toLocaleDateString(),
        done_flg: false,
    }

    todos.push(new_todo)

    rerender()

    console.log(title.value);
    title.value = '';
})

function rerender(){
    todo_container.innerText = '';

    // const done_cnt = todos.reduce((prev, item)=> prev + (item.done_flg ? 1 : 0), 0);
    // const not_done_cnt = todos.length - done_cnt; 
    let done = 0
    let notDone = 0
    todos.forEach(todo => {
        if(todo.done_flg){
            done++
        }else{
            notDone++
        }
    })

    console.log(`not done = ${notDone} , done = ${done}`)
    countContainer.innerHTML = `not done = ${notDone} , done = ${done}`

    todos.map( todo => {

        const container = document.createElement('div')
        const info = document.createElement('div')
        const change_state = document.createElement('button')
        const title_p = document.createElement('p')
        const dttm_p = document.createElement('p')

        container.classList.add('item')

        title_p.innerText = todo.title;
        dttm_p.innerText = todo.dttm;
        change_state.innerText = todo.done_flg? 'сделать':'сделано';
        change_state.style.background = todo.done_flg? 'green': 'red';

        if(todo.done_flg){
            container.classList.add('done')
        }

        change_state.addEventListener('click',() => stateChanger(todo))
        

        info.append(title_p,dttm_p)
        container.append(info,change_state)
        todo_container.append(container)
    })
}



function stateChanger(todo){
    // var 1
    // const target = todos.find(item => item.id === todo.id);
    // target.done_flg = !target.done_flg; 



    // var 2 
    // todo.done_flg ? todo.done_flg = false: todo.done_flg = true;
    todo.done_flg = !todo.done_flg
    rerender()
}

