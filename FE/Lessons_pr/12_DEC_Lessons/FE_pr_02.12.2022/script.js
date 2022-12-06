const laptops = [
    {
        id: 1,
        name: "Acer Paradise",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 20000,
        category: "laptop"
    },
    {
        id: 2,
        name: "HP Pavillon",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 25000,
        category: "laptop"
    },
    {
        id: 3,
        name: "Samsung X20",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 40000,
        category: "monoblock"
    },
    {
        id: 4,
        name: "Iphone 13Pro",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 70000,
        category: "smartphone"
    },
    {
        id: 5,
        name: "Sony TI201",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 55000,
        category: "smartphone"
    },
    {
        id: 6,
        name: "Samsung",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 80000,
        category: "computer"
    },
    {
        id: 7,
        name: "Acer Computer M500",
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        price: 75000,
        category: "computer"
    },
]


const orders = 
[ 
    { 
        id: 1, 
        customerId: 3, 
        date: "02/03/2022", 
        delivered: true,
        products: [ {productId: 567,  price: 2000}, {productId: 789, price: 3000} ] 
    }, 
    { 
        id: 2, 
        customerId: 3, 
        date: "05/08/2022", 
        delivered: false, 
        products: [ { productId: 413, price: 2500}, {productId: 124, price: 1000} ] 
    }, 
    { 
        id: 3, 
        customerId: 1, 
        date: "05/12/2021", 
        delivered: true, 
        products: [ {productId: 500, price: 1500}, {productId: 213, price: 1500} ] 
    }, 
    { 
        id: 4,
        customerId: 6, 
        date: "10/07/2022", 
        delivered: true, 
        products: [ {productId: 531, price: 1000}, {productId: 231, price: 2500} ] 
    }, 
    { 
        id: 5, 
        customerId: 6, 
        date: "10/08/2022", 
        delivered: false, 
        products: [ {productId: 912, price: 5000}, {productId: 942, price: 500} ] 
    }, 
    { 
        id: 6, 
        customerId: 2, 
        date: "10/08/2022", 
        delivered: true, 
        products: [ {productId: 545, price: 2300}, {productId: 942, price: 800} ] 
    }, 
    { 
        id: 7, 
        customerId: 7, 
        date: "05/09/2022", 
        delivered: true, 
        products: [ {productId: 600, price: 2000}, {productId: 849, price: 900} ] 
    }, 
    { 
        id: 8, 
        customerId: 3, 
        date: "10/10/2022", 
        delivered: true, 
        products: [ {productId: 575, price: 2400}, {productId: 248, price: 850} ] 
    }, 
] 


/*
<div class="product">
    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true" alt="" class="product-img" alt="" class="product-img">
    <h5 class="product-name">HP Drago</h5>
    <p class="product-price">15000</p>
</div>
 */



const productsContainer = document.querySelector('.products')
const searchInput = document.querySelector('.search-input')


const showProducts = function(products){
    productsContainer.innerHTML = products.map(
        product =>`
        <div class="product">
            <img src="${product.img}" alt="" class="product-img" alt="" class="product-img">
            <h5 class="product-name">${product.name}</h5>
            <p class="product-price">${product.price}</p>
        </div>
        `
    ).join('')
}

showProducts(laptops);


searchInput.addEventListener('input', (event)=>{
    const newList = laptops.filter(({name}) => name.includes(event.target.value))
    showProducts(newList);
})
















