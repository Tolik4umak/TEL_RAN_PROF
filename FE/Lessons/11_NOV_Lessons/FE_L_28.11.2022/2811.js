const addForm = document.querySelector('.add_form');
const products = document.querySelector('.products');
let data = [
  {
    id: 1,
    title: 'Велосипед',
    price: 45000,
  },
  {
    id: 2,
    title: 'Ролики',
    price: 25000,
  },
  {
    id: 3,
    title: 'Самокат',
    price: 15000,
  },
];

function randomColor(){
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  return `rgb(${r},${g},${b})`
}


addForm.addEventListener('submit', event => {
  event.preventDefault();
  const title = addForm.title.value;
  const price = addForm.price.value;
  const id = Date.now();

  data.push({id,title, price});

  addForm.title.value = '';
  addForm.price.value = '';
  rerender();
});


function delProduct(id){
  data = data.filter(product => product.id !== id)
  rerender() 
}

function createProductCard(id,title,price){
      const container = document.createElement('div');
      const title_p = document.createElement('p');
      const price_p = document.createElement('p');

      //добавляем кнопку 'Удалить'
      const delButton = document.createElement('button');
      delButton.innerText = 'Удалить';

      // доработать процесс таким образом, чтобы при нажатии на кнопку в консоль выводился идентификатор товара
      delButton.addEventListener('click',(event)=> delProduct(id));

      title_p.innerText = `Название товара: ${title}`;
      price_p.innerText = `Цена: ${price}`;

      container.classList.add('product');


      // вынести процесс создания карточки в отдельную функцию
      // функция должна получать в качестве аргументов
      // id, title, price и возвращать тег div который
      // является контейнером карточки 
      container.addEventListener('dblclick',(event)=>{
        container.style.background = randomColor()
      })

  
      container.append(title_p, price_p, delButton);

      return container
}



function rerender() {
  products.innerText = '';

  //  реализовать здесь  проверку, если массив с данными пустой, то вывести параграф с тектом "Товаров нет"
  //  в ином случае выводить товары как сейчас

  if (data.length === 0) {
    const info = document.createElement('p');
    info.innerText = 'Товаров нет';
    products.append(info);
  } else {
    data.forEach(({ id, title, price }) => {
      const container = createProductCard(id,title,price)
      products.append(container);
    });
  }
}





rerender();
