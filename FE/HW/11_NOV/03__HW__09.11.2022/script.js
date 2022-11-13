//        TASK 1


let input1 = document.querySelector('.input1');
let inputStatusButton = document.querySelector('.inputstatus');


inputStatusButton.addEventListener('click', chengeInputStatus);

function chengeInputStatus(event){
    if(input1.hasAttribute('disabled')){
        input1.removeAttribute('disabled');
    }else{
        input1.setAttribute('disabled','true');
    };
};



//        TASK 2


let changeParagraphs = document.querySelectorAll('.changetext');
let swapButton = document.querySelector('.swapper');

swapButton.addEventListener('click', changeText)

function changeText(event){
    changeParagraphs.forEach((el,i) => {
        el.textContent = i+1;
    })
}
































