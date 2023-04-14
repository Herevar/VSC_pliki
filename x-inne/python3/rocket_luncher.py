from random import randint
class Rocket :
    idGlob = 1
    def __init__(self, speed):
        self.id = Rocket.idGlob
        Rocket.idGlob +=1
        self.altitude = 0
        self.speed = speed
    def moveUp(self):
        self.altitude += self.speed
    def __str__(self):
        return "odwołanie do samego obiektu z klasy Rocket 'Rocket()'; altitude rakiety: " + str(self.altitude)
    def getDistance(self,rocket2):
        return rocket2.altitude - self.altitude    
    
        
class RocketBoard :  
    def __init__(self, rocketsNumber):
        self.rockets = [Rocket(randint(0,5)) for i in range(rocketsNumber)]

        for i in range(10):
            randRocket = randint(0,rocketsNumber-1) # or len(self.rockets)-1
            self.rockets[randRocket].moveUp()
        for i in self.rockets:
            print('x',i) #printuje Rocket() czyli metoda __str__ , jakby było i.altitdue to wtedy by dało wynik konkretny
    
    def __getitem__(self, key): # jak przy __str__(self); tutaj dla obiektów klasy RocketBoard, getItem jest tak zaprogramowane ze działa kiedy odwołuje sie do pozycji 
        return self.rockets[key]
    
    def __setitem__(self, key, value): #setItem działa (tak zaprogramowane) kiedy chcemy coś przypisać do danej pozycji
         rakieta = self.rockets[key].altitude = value # musimy podac do czego ma sie dokładnie tyczyc ta przesłąna wartosc "666"
         return rakieta
    @staticmethod 
    def getDistance2(rocket1, rocket2):
        return rocket2.altitude - rocket1.altitude
    
    def amount_of_rockets(self):
        return len(self.rockets)
    
    def __len__(self):
        return len(self.rockets) #self.amount_of_rockets()
        