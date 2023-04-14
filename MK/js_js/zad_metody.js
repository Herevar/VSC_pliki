// stowrzenie klasy, która pozwala stworzyc obiekt 'country'
// w niej 2 wlasciwosci:
// 1 - wlassciwosc; tablice ktora bedzie przechowywala wyniki danego kraju na zawodach
// 2 - metody ktora pozwala dodawac kolejne wyniki
// * - metoda, jezeli w tablicy medal złoty/1 miejsze to wystli, ze fanfary/impreza czy cos tam - sprawdza czy jest 1 miejsce/złoto i drukuje ze 'super'

class Country {
    constructor() {
        this.gold = 0;
        this.silver = 6;
        this.bronze = 0;
        this.scoreTable = [this.gold, this.silver, this.bronze,];
    }
    collectScore(gold = 0, silver = 0, bronze = 0) {
        this.gold += gold;
        this.silver += silver;
        this.bronze += bronze;
        this.scoreTable = [this.gold, this.silver, this.bronze,];
        return 'checked';
    }
    checkGold() {
        if (this.gold !== 0) {
            return `hurray, number of gold medal is ${this.gold} !`
        } else if (this.silver !== 0 || this.bronze !== 0) {
            return `congratz, medals accuired are ${this.silver} silver and ${this.bronze} bronze`
        } else if (this.bronze != 0) {
            return `at least ${this.bronze} bronze`
        }
        return `next time..`
    }
}
const zimbabwe = new Country();
// zimbabwe.collectScore(0,0,0);
// console.log(zimbabwe.scoreTable);
// console.log('medal',zimbabwe['silver']);
// console.log(zimbabwe.checkGold);


// ZADANIE 2:------------------------------------------------------

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];
console.log(grades.reduce(
    (pre, curr) => (pre + curr)
));
const result2 = grades.filter(number => number >= 4);
console.log(result2);
const result3 = grades.forEach((num, i) => { grades[i] = num * 2 }, grades);
console.log(grades);
// result3 - nie działa to tak, bo .forEach() zmienia oryginalna tablice, trzeba uzyc .map()
const result4 = grades.map(num => num + 10);
console.log(result4, "aaaaaaaaaaaaaaaaaa");

const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

function evenCities(miasto) {
    citiesRegrouped = []
    for (let x of miasto) {
        console.log(x);
        if (x.length % 2 === 0) {
            citiesRegrouped.push(x.toUpperCase());
        } else {
            citiesRegrouped.push(x.toLowerCase());
        }
    }
    return citiesRegrouped;
}
// console.log('cities: ',evenCities(cities));

// console.log(cities.filter(city => city.length >= 4));
cities.filter(city => city.length % 2 === 0).forEach(element => {
    console.log(element.toLocaleUpperCase())
});


