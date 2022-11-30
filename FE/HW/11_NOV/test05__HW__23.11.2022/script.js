const form = document.querySelector('.form');
const container = document.querySelector('.products');
const totalPrice = document.querySelector('.total');
const totalAmount = document.querySelector('.amount');





let goods;

if(!localStorage.getItem('goods')){
    goods = [];
    localStorage.setItem('goods',JSON.stringify(goods))
}else{
    goods = [];
    goods = JSON.parse(localStorage.getItem('goods'));
    createNewCard()
    countTotalPrice()
    countTotalAmouunt()
};


form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const title = form.title.value;
    const price = form.price.value;
    const amount = form.amount.value;
    const id = Date.now()

    if(+price&&+amount){
        goods.push({id,title,price,amount})
    }

    form.title.value = '';
    form.price.value = '';
    form.amount.value = '';

    createNewCard()
    countTotalPrice()
    countTotalAmouunt()

    localStorage.setItem('goods',JSON.stringify(goods))
})

function createNewCard(){
    container.innerText = ''
    goods.forEach((el)=>{
        const card = fillContainer(el);
        container.append(card);
    })
}

function fillContainer(el){
    const card = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardPrice = document.createElement('p');
        const cardCount = document.createElement('p');
        const delButton = document.createElement('button')

        cardTitle.className = 'product_title';
        cardPrice.className = 'product_price';
        cardCount.className = 'product_count';
        delButton.className = 'delButton';


        cardTitle.innerText = el.title
        cardPrice.innerText = el.price    
        cardCount.innerText = `${el.price} x ${el.amount} = ${el.price*el.amount}`
        delButton.innerHTML = 'DELETE';

        delButton.addEventListener('click',(event)=> delCard(el.id))

        card.append(cardTitle,cardPrice,cardCount,delButton);
        return card
}

function delCard(cardId){
    goods = goods.filter(prod => prod.id!=cardId);
    localStorage.setItem('goods',JSON.stringify(goods))
    createNewCard()
    countTotalPrice()
    countTotalAmouunt()
}



function countTotalPrice(){
    totalPrice.innerText = '';
    const countPrice = goods.reduce((sum,el)=> sum + ((+el.price) * (+el.amount)),0);
    totalPrice.innerText = `Общая стоимость: ${countPrice}`;
}

function countTotalAmouunt(){
    totalAmount.innerText = '';
    const countAmount = goods.reduce((sum,{amount})=> sum + +amount,0);
    totalAmount.innerText  = `Общее количество: ${countAmount}`;
}