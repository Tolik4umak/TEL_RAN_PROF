let wordList = JSON.parse(localStorage.getItem('translation')) ?? [];

const form = document.querySelector('.form')
const originalWord = document.querySelector('.original_word')
const translationWord = document.querySelector('.translated_word')
const addButton = document.querySelector('.addToList')
const rotateButton = document.querySelector('.rotateAll')

if(!localStorage.getItem('currentSide')){
    localStorage.setItem('currentSide','frontside')
}

const cards = document.querySelector('.cards')


rerender()

rotateButton.addEventListener('click',rotateAllCards)

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const original = originalWord.value;
    const translate = translationWord.value;
    const id = Date.now();
    if(original != ''&&translate!=''){
        wordList.push({id,original,translate})
        localStorage.setItem('translation',JSON.stringify(wordList))
    }

    originalWord.value = '';
    translationWord.value = '';
    
    rerender()
    console.log(wordList)
})


function rerender(){
    cards.innerText = ''
    wordList.forEach((card)=>{

        const container = document.createElement('div')
        const del = document.createElement('div')
        const box = document.createElement('div')
        const front = document.createElement('div')
        const back = document.createElement('div')

        container.classList.add('card')
        del.classList.add('del')
        box.classList.add('card_container')
        front.classList.add('card_front')
        front.classList.add('side')
        back.classList.add('card_back')
        back.classList.add('side')

        cards.append(container)
        container.append(del,box)
        del.innerText ='X'
        box.append(front,back)
        front.innerText = card.original
        back.innerText = card.translate

        if(localStorage.getItem('currentSide') == 'backside'){
            box.classList.add('rotate180')
        }

        del.addEventListener('click',(event)=> delCard(card.id))
        box.addEventListener('click',rotateCard)

    })   
}


function delCard(cardId){
    wordList = wordList.filter(el => el.id != cardId);
    localStorage.setItem('translation',JSON.stringify(wordList))
    rerender()
}

function rotateCard(){
    this.classList.toggle('rotate180')
}


function rotateAllCards(event){
    const rotateList = document.querySelectorAll('.card_container');

    if(localStorage.getItem('currentSide') == 'frontside'){
        rotateList.forEach((card)=>{
            card.classList.add('rotate180')
        })
        localStorage.setItem('currentSide','backside')
    }else{
        rotateList.forEach((card)=>{
            card.classList.remove('rotate180')
        })
        localStorage.setItem('currentSide','frontside')
    }
 
}

