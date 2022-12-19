// После отправки формы добавлять продукт в корзину
// Переменные
const addForm = document.querySelector('.add-form')
const productName = document.querySelector('.add-name')
const productsWrapper = document.querySelector('.products-wrapper')
const notification = document.querySelector('.notification')


addForm.addEventListener('submit',addProduct)

// Отображенипри первой загрузке

function showProducts(){
    let arr = JSON.parse(localStorage.getItem('productsArr'))??[]

    if(arr.length>0){
        arr.forEach(({id,name}) => {
            createProducts(id,name)
        });
    }

}

showProducts()


function addProduct(event){
    event.preventDefault()
    const currentProduct = productName.value
    const id = new Date().getTime().toString()
    console.log(id)

    if(currentProduct){
        createProducts(id,currentProduct)
        addToLocalStorage(id,currentProduct)
        resetOptions()
        showNotification(true)
    }
    
}

function resetOptions(){
    productName.value = ''
}

function createProducts(id,name){
    const element = document.createElement('div')
    element.setAttribute('id', id)
    element.classList.add('product')
    element.innerHTML = `
        <h5 class="product-name">${name}</h5>
        <div class="product-actions">
            <button class="delete-btn">удалить</button>
            <button class="edit-btn">редактировать</button>
        </div>
    `

    const deleteBtn = element.querySelector('.delete-btn')
    deleteBtn.addEventListener('click',()=>deleteProduct(element,id))

    productsWrapper.prepend(element)
}




function showNotification(flag){
    notification.style.display = 'block'
    setTimeout(()=>(notification.style.opacity = '100%'),1)
    setTimeout(()=>(notification.style.opacity = '0%'),2000)
    setTimeout(()=>(notification.style.display = 'none'),4000)
    let text = notification.querySelector('.notification-text')

    if(flag){
        notification.classList.add('success')
        notification.classList.remove('danger')
        text.innerText = 'Продукт добавлен'
    }else{
        notification.classList.remove('success')
        notification.classList.add('danger')
        text.innerText = 'Продукт удален'

    }
}

function deleteProduct(element,prodId){
    element.remove()

    let arr = JSON.parse(localStorage.getItem('productsArr'))
    arr = arr.filter(({id,name})=> prodId != id)
    localStorage.setItem('productsArr',JSON.stringify(arr))

    showNotification(false)
}

function addToLocalStorage(id,name){
    let arr = JSON.parse(localStorage.getItem('productsArr'))??[]
    localStorage.setItem('productsArr',JSON.stringify([...arr,{id,name}]))
}












// продолжить с 2:54:00
/*
<div class="product">
    <h5 class="product-name">Название продукта</h5>
    <div class="product-actions">
        <button class="delete-btn">удалить</button>
        <button class="edit-btn">редактировать</button>
    </div>
</div>
 */