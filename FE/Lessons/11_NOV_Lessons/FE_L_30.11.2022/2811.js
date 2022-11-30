const modeButton = document.querySelector('.change_moge');
const main = document.querySelector('.main');
const fontSizeUp = document.querySelector('.incr');
const fontSizeDown = document.querySelector('.decr');
const mainText = document.querySelector('.main p')



let fz;

if(!localStorage.getItem('fontSize')){
  fz=12;
  localStorage.setItem('fontSize',fz)
}else{
  fz = +localStorage.getItem('fontSize');
  
}



mainText.style.fontSize = fz+'px';




modeButton.addEventListener('click',changeMode);


if(localStorage.getItem('mode')==='dark'){
  document.body.classList.add('dark');
}

function changeMode(event){
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    localStorage.setItem('mode','dark');
  }else{
    localStorage.setItem('mode','ligth');
  }
}



fontSizeUp.addEventListener('click',makeTextBigger);
fontSizeDown.addEventListener('click',makeTextSmaller);



function makeTextBigger(event){
  // mainText.style.fontSize = `${parseInt(mainText.style.fontSize)+1}px`
  
  fz+=1
  mainText.style.fontSize = fz+'px'
  localStorage.setItem('fontSize',fz)
}
function makeTextSmaller(event){
  // mainText.style.fontSize = parseInt(mainText.style.fontSize)-1+'px'
  
  mainText.style.fontSize = `${--fz}px`
  localStorage.setItem('fontSize',fz)
}


