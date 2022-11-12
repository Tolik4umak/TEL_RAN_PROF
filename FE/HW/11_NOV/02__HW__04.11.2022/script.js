//        TASK 1

let username = prompt('What is your name?');
let seyHelloButton = document.querySelector('.hellobutton');

seyHelloButton.addEventListener('click', greetings);

function greetings(event){
    if(!username){
        username = 'User'
    }
    console.log(`Hello ${username}`);
};



//        TASK 2


let blockNewStyleButton = document.querySelector('.addStyle');
let blockNewStyle = document.querySelector('.imgBLock');

blockNewStyleButton.addEventListener('click', styleToggle);

function styleToggle(event){
    blockNewStyle.classList.toggle('newstyle')
}





















