const form = document.querySelector('.form');
const container = document.querySelector('.products');
const totalPrice = document.querySelector('.total');
const totalAmount = document.querySelector('.amount');


const goods = [];

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const title = form.title.value;
    const price = form.price.value;
    const amount = form.amount.value;

    if(+price&&+amount){
        goods.push({title,price,amount})
    }

    form.title.value = '';
    form.price.value = '';
    form.amount.value = '';

    createNewCard()
    countTotalPrice()
    countTotalAmouunt()
})


function createNewCard(){
    container.innerText = ''
    goods.forEach((el)=>{
        const card = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardPrice = document.createElement('p');
        const cardCount = document.createElement('p');

        cardTitle.className = 'product_title';
        cardPrice.className = 'product_price';
        cardCount.className = 'product_count';

        container.append(card);
        card.append(cardTitle,cardPrice,cardCount);

        cardTitle.innerText = el.title
        cardPrice.innerText = el.price    
        cardCount.innerText = `${el.price} x ${el.amount} = ${el.price*el.amount}`
    })
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