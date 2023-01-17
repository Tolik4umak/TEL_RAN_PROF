const form = document.querySelector('.form')
const container = document.querySelector('.container')

form.addEventListener('submit',getProductFromDatabase)

rerender()


function getLocal(){
    return JSON.parse(localStorage.getItem('fetchData')) ?? []
}

function getProductFromDatabase(event){
    event.preventDefault()

    const fId = +event.target.id.value

    if(typeof(fId) == 'number' && !isNaN(fId) && fId != 0){
        fetch (`https://fakestoreapi.com/products/${fId}`)
        .then((resp)=> resp.json())
        .then((prod)=> addToLocal(prod))
    }else{
        alert('wrong data')
    }

    event.target.id.value = ''
}

function addToLocal(newProd){
    let arr = JSON.parse(localStorage.getItem('fetchData')) ?? []
    newProd.localId = Date.now()
    localStorage.setItem('fetchData', JSON.stringify([...arr,newProd]))
    rerender()
}


function rerender(){
    container.innerText = ''
    getLocal().forEach((prod) => {
        const card = createCard(prod)
        container.prepend(card)
    });
}

function createCard(prod){
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <div class="card_img" >
            <img src=${prod.image} alt="">
        </div>
        <div class="card_title">${prod.title}</div>
        <div class="card_category">${prod.category}</div>
        <div class="card_descr">${prod.description}</div>
        <div class="card_price">${prod.price} $</div>
        <div class="card_count">count - ${prod.rating.count}</div>
        <div class="card_rate">
            rate - ${prod.rating.rate}
            <div class="card_rate_container"> 
                <div class="card_rate-diagram"></div> 
            </div> 
        </div>
        <button class="card_remove"><i class="las la-times"></i></button>
    `
    setRate(prod,card)

    const rmCard = card.querySelector('.card_remove')
    rmCard.addEventListener('click',(event)=>delCard(prod.localId))
    
    
    return card
}


function setRate(prod, card){
    const rate = card.querySelector('.card_rate-diagram')
    rate.style.width = `${prod.rating.rate*20}%`
    if(prod.rating.rate < 3){
        rate.style.background = `red`
    } else if(prod.rating.rate < 4){
        rate.style.background = `orange`
    }else{
        rate.style.background = `green`
    }
}


function delCard(localId){
 
    let newArr = getLocal().filter((el) => el.localId != localId)
    localStorage.setItem('fetchData', JSON.stringify(newArr))
    rerender()
}



fetch (`https://fakestoreapi.com/products/1`)
.then((resp)=> resp.json())
.then((prod)=> console.log(prod))