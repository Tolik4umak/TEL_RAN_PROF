const mytext = document.querySelector('.mytext');

mytext.value = localStorage.getItem('mytext') ?? '';

mytext.addEventListener('input',(event)=>{
    console.log(event.target.value)
    localStorage.setItem('mytext', event.target.value)
})