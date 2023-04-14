
class Basket {
    constructor() {
        this.basket = []
    }

    addToBasket(product) {
        this.basket.push(product);
    }
    removeFromBasket(index) {
        this.basket.splice(index - 1, 1);
    }
    showBasket() {
        return this.basket
            .map((product, i) => {
                return {
                    id: i + 1,
                    text: `${i + 1} - ${product.name} - ${product.price}`,
                };
            })
        // .forEach(x => console.log(x))
    }

    totalValue() {
        let y = 0
        for (const x of this.basket) {
            y += Number(x.price)
        }
        return y

    }
    clear() {
        this.basket.length = 0;
    }
}

class Product {
    constructor(nameOf, priceOf) {
        this.name = nameOf;
        this.price = priceOf;
    }
}

const koszyk = new Basket();


//- doc.querySelector pozcyje z listy do kupienia
//- kazdy z query ma dostac eventListner'a - zeby stworzyc w koszyku z nich liste pozniej w funkcji(F) - po kliknieciu ma dodawc do koszyka - tego z classy Basket
// wyswietlic liste z koszyka w petli w (F) i w niej
// - (createElement()) elementy Li  
// - dodac(appendChild)/innerText do listy 'ul' koszyka
// nie wiem o chuj chodzi poznizej.......
// w sekcji zamowienia (stworzy koszyk a usunie poprzedni ) dla kazdej pozycji z listy produktów


const listOfBasket = document.querySelector('.list-to-order');
const btnProduct = document.querySelectorAll('.btn-prod');
const btnOrder = document.querySelector('.execute');


function deletingFunction(event) {
    const id = event.target.dataset.id;
    // const listFromBasket = koszyk.showBasket();
    // for ({id,prod} of listFromBasket){}
    koszyk.removeFromBasket(id);
    creatingListForBasket();
}

function creatingListForBasket() {
    const listFromBasket = koszyk.showBasket();
    listOfBasket.innerText = '';
    for (prod of listFromBasket) {
        const createLi = document.createElement('li');
        // const testx = createLi.dataset.id = prod.id
        // createLi.innerText = prod.text;
        listOfBasket.appendChild(createLi).innerText = prod.text;
        createLi.addEventListener('click', deletingFunction)
        // "!!! kiedy callback jest uruchomiony, przesyłany jest obiekt 'event'- i jest to reprezentacja zdarzenia, które wystąpiło ", event.target - element na którym został wywołany event - coś jak this.

    }
    const basketList = koszyk.showBasket()
    const basketValue = koszyk.totalValue();
    btnOrder.innerText = `ZAMÓW ZA ${basketValue} zł`
    if (basketList !== 0) {
        // btnOrder.removeAttribute('disabled')
        btnOrder.disabled = false;
    } else {
        btnOrder.disabled = true;
    }

}

function collectingProdForBasket(event) {
    const nameOf = event.target.dataset.name;
    const priceOf = event.target.dataset.price;
    const newProd = new Product(nameOf, priceOf);
    koszyk.addToBasket(newProd);
    creatingListForBasket()

}

for (const x of btnProduct) {
    x.addEventListener('click', collectingProdForBasket)
}

// guzik zamowienia (selektor) wlaczyc/wylaczyc (disable) warunek - gdy koszyk pusty/pełny - np. value koszyka 0 to wylaczyc a co jest to usun disable
//dodac czysczenie koszyka gdy ktoś "kupi", wyswtli alert(za ile kupione), 'odswiezy' koszyk po ponownym wywolaniu tworzenia listy na podstawie listy produktów

// usuwanie elementu z koszyka przez klikniecie na niego:
// tworzonemu elementowi 'Li' dodac eventListener'a z funkcja usuwania
// a w tej funkcji usuwac element o ID 
// temu samemu 'Li' mozna dopisac element dataset.x = "zxc"
// tworzonej liscie produktów (w klasie, w showbasket) przypisac ID kazdemu produktowi, poza tekstem
// to ID do dataset.x   /// lub na poczatku w petli destrukturyzacja {id,text} of zmienna


const buyAllAndClear = () => {
    const zxc = koszyk.totalValue();
    alert(`KUPIONE!!11oneone za ${zxc}`);
    koszyk.clear();
    creatingListForBasket();
}
btnOrder.addEventListener('click', buyAllAndClear);

// sekcja admina
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


const adminSection = document.querySelector('.admin-form');
const inputName = document.querySelector('[name="product-name"]');
const inputPrice = document.querySelector('[name="price-name"]');
const productsUl = document.querySelector(".product-list");

const addProductToShop = event => {
    event.preventDefault()
    //ver1
    // console.log(event.target.elements['product-name'].value)
    const name = inputName.value;
    const price = Number(inputPrice.value);
    const newLi = document.createElement('li');
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;
    const newPriceTxt = document.createTextNode(` - ${price.toFixed(2)}`);
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-prod');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    console.log('kek', newPrice)
    console.log('kek2', newBtn.dataset.price)
    newBtn.innerText = 'kup!';
    newBtn.addEventListener('click', collectingProdForBasket);
    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceTxt);
    newLi.appendChild(newBtn);
    productsUl.appendChild(newLi);

}

adminSection.addEventListener('submit', addProductToShop);

//JSON.parse(localStorage.getItem('nazwa-danych))
//loclaStorage.setItem('nazwa-danych' , JSON.Stringify(plik/zmienna))

// save i load .localstorage , setitem i json stringify, json parse getitem , w osobnych funcjach
    // save wywolac w miejsach gdzie zapisujemy zmieniona tablice
    //load w miejscu gdzie powstaje na poczatku czyli konstruktor - tam warunkowo wczytaj z localstorage jesli prawda lub stworzyc nowa jesli fasle ; trojwarunkowy lub ??
    //i na koncu calej wczytanego kodu load

// UI save load:
// wydzielic do osobnej funkcji{} samo powstawanie nowych 'li'
// w adminie przesłac do tej wydzielonej funkcji{}, te wczytane w formularzu
    //save funkcje{} (z przesłanymi argumentami do niej name i price) sparsowac get, przypisac do zmiennej, ktora jesli prawda to zostaje a falsz to tworzy nowa liste
        //pushujemy do zmiennej nowe argumenty i zapisujemy do localsotrage setitem ijson.strigify
        //save funkcje uzyjemy wtedy kiedy podajemy też dane - na samym poacztku bo pozniej sie moze zdublowac; czyli kiedy w formularzy sa wprowadzane
    //load funkcje{} wczytujemy do zmiennej tak jak do save - jest to zostaje, fałsz to nowa lista
        //dla kazdej pozycji z wczytanej z json parse localsorage.getitem pare obiektow name i price przesyłamy do funkcji tworzacej 'li'


// CHYBA LEPSZY OPIS PONIZEJ :

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