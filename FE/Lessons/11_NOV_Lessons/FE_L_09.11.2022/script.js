//1

let myButton = document.querySelector('.mybutton');
let myInput = document.querySelector('#input');


myButton.addEventListener('click',changeText);


function changeText(event){
    myInput.value = 'Thanks'
    myButton.removeEventListener('click',changeText)
}





//2


let actionButton  = document.querySelector('.action');
let takeButton  = document.querySelector('.take');
let input = document.querySelector('#input2');



actionButton.addEventListener('click',transferText);

function transferText(event){
    // if(!input.value){
    //     takeButton.textContent = 'fill input'
    // }
    console.log(input.value)

    takeButton.textContent = input.value;
    input.value = '';
}



let squareButton = document.querySelector('.square');
let squareInput = document.querySelector('#input3');


squareButton.addEventListener('click',toSquare);


let square = num => num*num;

function toSquare(event){
    let value = Number(squareInput.value);

    if(isNaN(value)){
        squareInput.value = 'is not number';
    }else{
        squareInput.value = square(value) 
    }
    
}




//3


let greenButton = document.querySelector('.greenButton');
let redButton = document.querySelector('.redButton');
let blockField = document.querySelector('.block');




greenButton.addEventListener('click',changeToGreen);
redButton.addEventListener('click',changeToRed);



function changeToGreen(event){
    blockField.className = 'block greenStyle'
};


function changeToRed(event){
    blockField.className = 'block redStyle'

};



