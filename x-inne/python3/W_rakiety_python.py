from rocket_luncher import RocketBoard
from rocket_luncher import Rocket


rakiety = RocketBoard(3) # rakiety to instancja(obiekt) klasy RocketBoard

# rakiety[0].altitude = 66 # jest ok ale mu chcemy inaczej:
rakiety[0] = 666 # i domyslnie leci do __setitem__
print('test',rakiety[0])


print('hmm',rakiety[0]) # odwołujemy sie do danej rakiety bez podania dla niej atrybutu(__getitem__), wiec domyslnie zwraca __str__

print('aaa',rakiety[0].getDistance(rakiety[1])) # rakiety[0] to tutaj 'self' dla metody getDistance, a [1] leci jako arg/param

print(rakiety.getDistance2(rakiety[1], rakiety[0])) #zmona importowac metode/funkcje getDistance ale tak jest czytelniej (ze statyczna metoda)
#mozna wywałac metoda nawet jesli nie ma instancji - I TAKA JEST ZALECANA - tylko klasa
print(RocketBoard.getDistance2(rakiety[1], rakiety[0]))

print('new',len(rakiety.rockets))
print('2len', len(rakiety)) #to je wbudowana len 
print('3len', rakiety.amount_of_rockets())

print(rakiety[2].id)

dupa =['1', 'dwa', 'three']

type(dupa)