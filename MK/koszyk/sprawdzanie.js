class Basket{
    constructor(){
      this.basket = []
    }

    addToBasket(product){
      this.basket.push(product);
    }
    showBasket(){
      return this.basket
      .map((element,i) => `${i+1} - ${element.name} - ${element.price}`)     
    }
  }
  
  class Product{
    constructor(nameOf, priceOf){
      this.name = nameOf;
      this.price = priceOf;
    }
  }
  
  
//trzeba 'pobrac' pozycje/guziki i do nich odnosniki
//kazdej pozycji przypisac działanie; guzik-listener
// po kliknieciu ma dodawc do koszyka - kod z lekcji wczesniej
// pozniej mozliwosc wyswietlenia koszyka - kod z lekcji wczesniej
// dla kazdej pozycji z listy produktów stworzyc (createElement()) elementy Li i dodac(appendChild)/innerText w ul (class='klasa')-(liscie zamowienia) w sekcji zamowienia (stworzy koszyk a usunie poprzedni ) 

const koszyk = new Basket();
  
function ToBasket2(event) {  // zdublowana nazwa funkcji !!!!!!
    const nameOf = event.target.dataset.name;
    const priceOf = event.target.dataset.price;
    const newProd = new Product(nameOf, priceOf); 
    koszyk.addToBasket(newProd);
    orderList()
   
  }
function orderList() {
    listOfOrder.innerText ='';
    const basketList = koszyk.showBasket();
    for (const x of basketList) {
        const createLi = document.createElement('li');
        createLi.innerText = x;
        listOfOrder.appendChild(createLi);
    }
}

const btnProduct = document.querySelectorAll('.btn-prod'); 
for (const x of btnProduct){
    x.addEventListener('click', ToBasket2)
  }
  
const listOfOrder = document.querySelector('.orderList');

