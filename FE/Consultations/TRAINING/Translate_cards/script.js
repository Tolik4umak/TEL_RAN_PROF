let wordList = JSON.parse(localStorage.getItem('translation')) ?? [];

const form = document.querySelector('.form')
const originalWord = document.querySelector('.original_word')
const translationWord = document.querySelector('.translated_word')
const addButton = document.querySelector('.addToList')
const rotateButton = document.querySelector('.rotateAll')
const searchInput = document.querySelector('.search')

if(!localStorage.getItem('currentSide')){
    localStorage.setItem('currentSide','frontside')
}

const cards = document.querySelector('.cards')


rerender(wordList)

rotateButton.addEventListener('click',rotateAllCards)

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const original = originalWord.value;
    const translate = translationWord.value;
    const id = Date.now();
    if(original != ''&&translate!=''){
        wordList.unshift({id,original,translate})
        localStorage.setItem('translation',JSON.stringify(wordList))
    }

    originalWord.value = '';
    translationWord.value = '';
    
    rerender(wordList)
})

searchInput.addEventListener('input',(event)=> findFilter(event))




function rerender(arr){
    cards.innerText = ''
    arr.forEach((card, _ ,myArr)=>{
        const container = createCard(card, _ ,myArr) 
        cards.append(container)
    })   
}

function createCard(card, _ ,myArr){
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

    container.append(del,box)
    del.innerText ='X'
    box.append(front,back)
    front.innerText = card.original
    back.innerText = card.translate

    if(localStorage.getItem('currentSide') == 'backside'){
        box.classList.add('rotate180')
    }
    del.addEventListener('click',(event)=> delCard(myArr,card.id))
    box.addEventListener('click',rotateCard)

    return container
}

function delCard(arr, cardId){
    wordList = wordList.filter(el => el.id != cardId);
    localStorage.setItem('translation',JSON.stringify(wordList))

    arr = arr.filter(el => el.id != cardId);
    rerender(arr)
}

function rotateCard(){
    this.classList.toggle('rotate180')
}
function rotateAllCards(event){
    const rotateList = document.querySelectorAll('.card_container');

    if(localStorage.getItem('currentSide') == 'frontside'){
        if([...rotateList].every(item=>item.classList.contains('rotate180'))){
            rotateList.forEach((card)=>{
                card.classList.remove('rotate180')
            })
        }else{
            rotateList.forEach((card)=>{
                card.classList.add('rotate180')
            })
            localStorage.setItem('currentSide','backside')
        }
    }else{
        if([...rotateList].every(item=> !(item.classList.contains('rotate180')))){
            rotateList.forEach((card)=>{
                card.classList.add('rotate180')
            })
        } else{
            rotateList.forEach((card)=>{
                card.classList.remove('rotate180')
            })
            localStorage.setItem('currentSide','frontside')
        }
    }
}

function findFilter(event){
    let currentValue = event.target.value.toLowerCase();
    let TMParr = wordList.filter(({original,translate})=>{
        return original.toLowerCase().includes(currentValue)||translate.toLowerCase().includes(currentValue)
    })
    console.log(TMParr)
    rerender(TMParr)
}
