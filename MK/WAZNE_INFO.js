//-----------------------------------------------------------------
// ta wersja działa tylko raz na zakonczenie programu
  // exec ('node dosprawdzenia.js', (error, stdout, stderr)=> {
  //   console.log('error==>',error,)
  //   console.log('stdout==>',stdout,)
  // })
  // // powyzej od razu wszystkie opcje dostajemy, a w "zbyt prostej formie" by było reagowanie na każde wydarzenie:
// const cp = exec('mkdir')
// cp.stdout.on('data', ()=> cos tam zrob np conosle.log('asd')) ; itd z cp.stderr, cp.on('close', ()=> console.log('koniec'))
//w promosie wersja callback'owa zwraca błąd oraz 1 rzecz; zeby sie więcej rzeczy zmiesciło to promise zwraca obiekt w tymi informacjami
// w callbacku moze byc duzo informacji w prosmisie tylko jedn

//-----------------------------------------------------------------

// skoro {readfile} ma wbudownego callbacka to po co te prosmis'y ? zeby to obsluzyc .then'em i .catch'em ? tak oraz z powodu prosmise hell'a - kaskada 
//idac dalej to uzywamy sync await bo to 'nowa-lepsza' wersja promise'ow ..?tak
//jezeli tak to czemu na {readfile} lub {lookup} uzywamy .promises lub promisify() .. ? zeby moc obsluzyć wogole tego callback'a ?
  // ale callback wraca do przypisanej zmiennej przy 'await' i tam pozniej dalej sie go gdzes uzywa
// bo stare implementacje były kiedy nie było async...await, wiec tem wszystkim metoda/funckja z bibliotek trzeba dac opcje promisowania, bo zmieniajac stare metody sie wysypie cos

//-----------------------------------------------------------------


//do kazdego projektu:
// npm init -y instaluje i tworzy package json
// npm i -D eslint babel-eslint eslint-config-airbnb 
// to powzyej doinstalowywje paczki do package json , D-skrot development/dependecies , 3 narzedzia; eslint, babel i airbnb, 
//-y -> doyslne ustawienia instaluje; bez tego trzeba odpowiedziec za akzdym razem co podac/wpisac

//-----------------------------------------------------------------


// npm WARN deprecated babel-eslint@10.1.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.

//-----------------------------------------------------------------

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

//pojedynczy obiekt to wychodzi na to ze to taki 'słownik' z Pythona
// to jest literał obiektu
//-----------------------------------------------------------------
//STRZAŁKOWE 'THIS' POCHODZI Z GLOBALNEGO ZAKRESU === console.log(this) w globalnej
//-----------------------------------------------------------------
// literał obiektu i konstruktor to z grubsza to samo tylko inaczej powstaje
//-----------------------------------------------------------------
// konstruktor - po prostu funkcja ALE; konwencja ze musi byc z dużej litery !
// też nie może być strzałkowa 
  //function Person (name, surname) {
//-----------------------------------------------------------------
// jeżeli wywołamy po prostu funckje(konstruktor) to stworzy nam w globalnym this te własciwosci ; name,surname itd i jest to błędem, nie wolno tak robic i wogole
// aby stworzyc (nowy) obiekt musimy użyć słowa "new" !!!
// new Person('janusz', 'kowalski');
//i musimy to gdzies przypisac bo sie tworzy i znika po prostu
//-----------------------------------------------------------------
//ODWOŁYWANIE SIE DO ELEMENTU OBIEKTU JEST W TEN SAM SPOSOB CO WYWOŁYWANIE JEGO METODY TJ .metoda lub .wartosc 
//-----------------------------------------------------------------
// construktor to taki __init__() z pythona , nawet jak tego nie zapiszemy to sie podobno tworzy sam
//-----------------------------------------------------------------

// .then().then() mozna jedno pod drugim !! bo inaczej powstaje promise hell (czyli taka kaskada) !! 

//-----------------------------------------------------------------
