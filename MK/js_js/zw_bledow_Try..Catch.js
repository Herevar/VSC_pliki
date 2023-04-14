class Calculator {
    constructor(a, b) {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            throw new Error('podane dana musza być liczbami!');
        }
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    subtract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        if (this.b === 0) {
            throw new Error('łooo paaaaaanie, 0!');
        }
        return this.a / this.b;
    }
}



const numA = Number(prompt('podaj 1-sza liczbe: '));
const numB = Number(prompt('podaj 2-ga liczbe: '));
const calc = new Calculator(numA, numB);




const choose = prompt('jakie działanie chcesz zrobic: 1 - dodawanie, 2 - odejmowanie, 3 - mnożenie, 4 - dzielenie : ');
//mozna trzez zrzutowac choose na Number i wpisac w porównaniu liczbe a nie tekst a najlepiej to pewnie coś jak z 'enum' by było
try {
    if (choose === '1') {
        console.log(calc.add());
    } else if (choose === '2') {
        console.log(calc.subtract());
    } else if (choose === '3') {
        console.log(calc.multiply());
    } else if (choose === '4') {
        console.log(calc.divide());
    }
} catch (error) {
    console.log('błont!!!!!!!,', error)
}