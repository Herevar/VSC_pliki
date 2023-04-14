class Shop {
    constructor() {
        this.basket = [];
        // this.productName = productName;
        // this.priceOfProduct = price;
        this.product = ''
    }
    addProduct(product) {
        // this.productName = productName;
        // this.priceOfProduct = price;
        // this.basket.push(`${productName} - ${price}`) ;
        this.basket.push(product);
    }
    removeProduct(iks) {
        // for(const x in this.basket){
        //         if(x.nameOfProduct === productpicked){
        this.basket.splice(iks - 1, 1)
        // remove x po prostu pewnie XD ; zrobic po indeksach; i usunac przesłany numer indeksu
        // }
    }
    // showBasket(){
    //     this.basket
    //     .map((product, i) => `${i+1} - ${product.nameOfProduct} - ${product.priceOfProduct}`)
    //     .forEach(element => {console.log(element)
    //         });
    // }
    remove(value) {
        this.basket.splice(value - 1, 0);
    }

}
class Product {
    constructor(nameOf, priceOf) {
        this.nameOfProduct = nameOf;
        this.priceOfProduct = priceOf;
    }
}
const mleko = new Product('milk', 2.99);
const maslo = new Product('butter', 6.99);
const chleb = new Product('bread', 4.50);
const sklep = new Shop();


sklep.addProduct(mleko);
sklep.addProduct(maslo);
sklep.addProduct(chleb);

console.log("przed ---->", sklep.basket);
sklep.removeProduct(2);
console.log("po--->", sklep.basket)
// sklep.showBasket();
sklep.remove(2);
// console.log('----------')
// sklep.showBasket();

