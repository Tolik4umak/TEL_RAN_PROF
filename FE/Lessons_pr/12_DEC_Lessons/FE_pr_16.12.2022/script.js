// После отправки формы добавлять продукт в корзину
// Переменные
const addForm = document.querySelector('.add-form')
const productName = document.querySelector('.add-name')
const productsWrapper = document.querySelector('.products-wrapper')
const notification = document.querySelector('.notification')
const submitBtm = document.querySelector('.submit-btn')

let editMode = false;
let editingProductName = ''

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

    if(currentProduct && !editMode){
        createProducts(id,currentProduct)
        addToLocalStorage(id,currentProduct)
        resetOptions()
        showNotification('Елемент успешно добавлен','success')
    }else if(currentProduct && editMode){
        // меняем в HTML
        editingProductName.innerText = currentProduct
        // меняем в localStorage
        let oldId = editingProductName.parentElement.id
        console.log(oldId)

        let arr = JSON.parse(localStorage.getItem('productsArr'))??[]
        arr.forEach((product)=>{  // не понимаю почему когда делаю то же самое но используя диструктуризацию {id,name} массив в локал сторедж не меняется ?
            if(product.id == oldId){    // if(id == oldId){  
                product.name = currentProduct // name = currentProduct
            }
        })
        localStorage.setItem('productsArr',JSON.stringify(arr))  
        
        // обнуляем input
        resetOptions()
        // возвращаем input mode в исходное состояние
        editMode = false 
        submitBtm.value = 'Добавить'
        
    }else{// возвращаем input mode в исходное состояние если при нажатии на сохранить input был пустой
        editMode = false 
        submitBtm.value = 'Добавить'
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
    const editBtn = element.querySelector('.edit-btn')

    deleteBtn.addEventListener('click',(event)=>deleteProduct(event,id))
    editBtn.addEventListener('click',editProduct)
    productsWrapper.prepend(element)
}


// function editProduct(event,id){
//     const product = event.target.parentElement.previousElementSibling
//     product.innerText = productName.value
//     console.log(product.parentElement.id)

    // let arr = JSON.parse(localStorage.getItem('productsArr'))??[]
    // arr.forEach((product)=>{
    //     if(product.id == id){
    //         product.name = productName.value
    //     }
    // })
    // localStorage.setItem('productsArr',JSON.stringify(arr))
// }

function editProduct(event){
    submitBtm.value = 'Сохранить'
    const oldProdName = event.target.parentElement.previousElementSibling
    productName.value = oldProdName.innerText

    editMode = true;
    editingProductName = oldProdName;
}





function showNotification(text,className){
    notification.classList.add(className);
    notification.style.display = 'block'
    notification.querySelector('.notification-text').innerText = text
    notification.style.opacity = '0'

    setTimeout(()=> notification.style.opacity = '100%',1)
    setTimeout(()=> notification.style.opacity = '0',2500)

    setTimeout(()=>{
        notification.classList.remove(className);
        notification.style.display = 'none'
    },3000)
}

function deleteProduct(event,id){
    const productEl = event.target.parentElement.parentElement
    productEl.remove()

    removeFromLocalStorage(id)

    showNotification('Елемент удален','danger')
}

function addToLocalStorage(id,name){
    let arr = JSON.parse(localStorage.getItem('productsArr'))??[]
    localStorage.setItem('productsArr',JSON.stringify([...arr,{id,name}]))
}

function removeFromLocalStorage(prodId){
    let arr = JSON.parse(localStorage.getItem('productsArr'))
    arr = arr.filter(({id})=> prodId != id)
    localStorage.setItem('productsArr',JSON.stringify(arr))
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