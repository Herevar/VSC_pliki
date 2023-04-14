//cz.1
// klasa - produkt, ktory bedzie dodany do koszyka -> obiekt do koszyka(nazwa,cena..)
// klasa + metody:
  // - konstruktor ->stworzyc koszyk
  // - dodawanie od koszyka
  // - usuwanie (odcinanie)
  // - wyswietlanie zawartosci
  // - wartość całosci koszyka
  // - czyszczenie koszyka


class Basket {
    constructor(){
        this.basket = []
    }

    addToBasket(product) {
        this.basket.push(product)
    }

    removeFromBasket(id) {
        this.basket.slice(id-1,1)
    }

    showBasket(){
        return this.basket.map((element, i) => `nr: ${i} - ${element.name} `)
    }
    valueOfBasket(){
        let y = 0
        for(const x of this.basket){
            y += Number(x.price)
        }
        return y
    }
    clearBasket(){
        // this.basket = []
        this.basket.length = 0
    }
}
class Productx {
    constructor(nameOf, priceOf){
        this.name = nameOf 
        this.price = priceOf
    }
}
const pipesStorage = new Basket();
// const pipe1 = new Productx('dn80', 170)
// const pipe2 = new Productx('dn50', 100)
// pipesStorage.addToBasket(pipe1)
// pipesStorage.addToBasket(pipe2)
// console.log('koszyk ---> :',pipesStorage.basket)
// console.log(pipesStorage.showBasket())
// console.log(pipesStorage.valueOfBasket())
// console.log("clear - ",pipesStorage.clearBasket())
// console.log("clear - ",pipesStorage.basket)
//cz.2
//- doc.querySelector pozcyje z listy do kupienia
//- kazdy z query ma dostac eventListner'a - zeby stworzyc w koszyku z nich liste; pozniej w funkcji(F) - po kliknieciu ma dodawc do koszyka - class Basket
// liste z koszyka w petli w (F) i w niej
    // - (createElement()) elementy Li  
    // - dodac(appendChild)/innerText do listy 'ul' koszyka
    // nie wiem o chuj chodzi poznizej.......
    // w sekcji zamowienia (stworzy koszyk a usunie poprzedni ) dla kazdej pozycji z listy produktów

// const productList = document.querySelector('.product-list');
const productsPositionList = document.querySelectorAll('.btn-pipe');
const orderList = document.querySelector('.basket-list');
const btnOrder = document.querySelector('.btn-order');

function removeProduct() {
    
}

function addToOrder() {
    const basketList = pipesStorage.showBasket()
    orderList.innerText =''
    for(const x of basketList){
        const createLi = document.createElement('li')
        orderList.appendChild(createLi).innerText = x
        //cz.3:
        createLi.addEventListener('click', removeProduct)
    }

    //cz3:
    const basketOrder = pipesStorage.showBasket();
    const basketValue = pipesStorage.valueOfBasket();
    btnOrder.innerText = `zamow za ${basketValue}zl`
    if (basketOrder !== 0){
        btnOrder.disabled = false;
    } else{
        btnOrder.disabled = true;
    } 
    // koniec cz3:
}

function getProduct(event) {
    const nameOf = event.target.dataset.name;
    const priceOf = event.target.dataset.price;
    const newProd = new Productx(nameOf, priceOf);
    pipesStorage.addToBasket(newProd);
    addToOrder()
}

for(const x of productsPositionList){
    x.addEventListener('click', getProduct) 
}

//cz.3
const buyAll = () => {
    const basketValue = pipesStorage.valueOfBasket()
    alert(`kupione za ${basketValue} zł! `);
    pipesStorage.clearBasket();
    addToOrder()
    
}
btnOrder.addEventListener('click', buyAll)



//cz.3
// guzik zamowienia (selektor) wlaczyc/wylaczyc (disable) warunek - gdy koszyk pusty/pełny - np. value koszyka 0 to wylaczyc a co jest to usun disable
//dodac czysczenie koszyka gdy ktoś "kupi", wyswtli alert(za ile kupione), 'odswiezy' koszyk po ponownym wywolaniu tworzenia listy na podstawie listy produktów

// usuwanie elementu z koszyka przez klikniecie na niego:
    // tworzonemu elementowi 'Li' dodac eventListener'a z funkcja usuwania
        // a w tej funkcji usuwac element o ID 
    // temu samemu 'Li' mozna dopisac element dataset.x = "zxc"
    // tworzonej liscie produktów (w klasie, w showbasket) przypisac ID kazdemu produktowi, poza tekstem -> obiekt z id oraz txt'em =- {id: 111 , text: aaa ,}
    // to ID do dataset.x   /// lub na poczatku w petli destrukturyzacja {id,text} of zmienna


//cz.4 sekcja admina
// form'a a w niej imput'y z type'ami : 'text', 'number' i button z typem-'submit' . Placeholder'u zeby text wstepny był
// obsługuje sie formularz submitem a nie guzikiem "wyslij" czy "dodaj"
// w klasie formularza -pobrac, przypisac i w listenerze(event) - stworzyc '.prevent.default'
// pobrac dane z formularza:
    // 'name' w formularzu (ma specjalne znaczenie); przypisac
    // atrybut 'name' przypisac do stałej-zmiennej
    // ta stałą-zmienna sie przyda ->
//ver1. z eventa danego elementu pobrac wartość name'a - value
//ver2. queryselector name'a (wartosci i ceny)
//stworzyc 'li', strong'a, nową cene dla produktu,  guzik z odpowiednią klasą (classList.add), nazwa i cena produktu (dataset), nazwa guzika - to co maja poczatkowe produkty + trzeba dodaac Listenera do guzika zeby sie dodwał do listy zakupowej pozniej 
//i pozniej pododawac appendchildem wszystko do 'li'
    //a 'li' do (klasy) 'ul' w lista produktów


//cz.5
//JSON.parse(localStorage.getItem('nazwa-danych))
//loclaStorage.setItem('nazwa-danych' , JSON.Stringify(plik/zmienna))

// save i load .localstorage , setitem i json stringify, json parse getitem , w osobnych funcjach
    // save wywolac w miejsach gdzie zapisujemy zmieniona tablice
    //load w miejscu gdzie powstaje na poczatku czyli konstruktor - tam warunkowo wczytaj z localstorage jesli prawda lub stworzyc nowa jesli fasle ; trojwarunkowy lub ??
    //i na koncu calej wczytanego kodu load

// UI save load:
// wydzielic do osobnej funkcji{} samo powstawanie nowych 'li'
// w adminie, przesłac do tej wydzielonej funkcji{}, te wczytane w formularzu
    //save funkcje{} ; wczytac wpierw czy cos istnieje w localStorage = zmienna, sparsowac get, jesli prawda to zostaje a falsz to tworzy   nowa liste
    //do tej zmiennej z istniejacymi (lub nie) pushujemy przesłane nowe name i price
    //zapisujemy do localsotrage setitem ijson.strigify
        //save funkcje uzyjemy wtedy kiedy podajemy też dane - na samym poacztku bo pozniej sie moze zdublowac; czyli kiedy w formularzy sa wprowadzane
    //load funkcje{} wczytujemy do zmiennej tak jak do save - jest to zostaje, fałsz to nowa lista
        //dla kazdej pozycji z wczytanej z json parse localsorage.getitem pare obiektow name i price przesyłamy do funkcji tworzacej 'li'
