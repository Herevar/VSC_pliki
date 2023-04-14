# pol powierchni; prostokąt (a*b), kwadrat (a*a),  szescian(6*a^2)
# obj szescianu V = a^3

class Rectangle:
    def __init__(self,param1, param2):
        self.param1 = param1
        self.param2 = param2
        
    def counting_area(self):
        return self.param1 * self.param2
    #def surface_area (self, A, B):
    #    return A*B
        
class Square(Rectangle):
    def __init__(self, param1):
        super().__init__(param1, param1)

class Cube(Square): # nie robimy tak bo prostopadłoscian raczej nie jest-
    #-typem do dziedziczenia z kwadratu
    #dziedziczenie kopiuje to co w klasie wyzej
        
    def counting_6_area(self):
        return super().counting_area()*6
    def volume(self):
        return super().counting_area()*self.param1
        #self.area6side = 6*(self.area)
        #self.volume = self.param1*self.area
        
class Cube_alter() :
    def __init__(self, figura: Square ):
        self.figura = figura
        self.high = figura.param1
    def cube_area(self):
        return self.figura.counting_area()*6
    def cube_volume(self):
        return self.figura.counting_area()*self.high
        
class Cuboid(): # (a*b*H)
    #def __init__(self,a,b):
    #    super().__init__(a,b)         
    def count_v(self,x, H):
        return x.counting_area() * H 
    
class Cuboid2():   
    def __init__(self, object : Rectangle, high ) :
       self.object = object 
       self.high = high
       
    def count_volume(self):
        return self.object.counting_area()*self.high
             
    # Pp = 2(ab+ac+bc) = 2ab                +2ac                            +2bc     
    def count_area(self):
        return 2*self.object.counting_area()+2*self.object.param1*self.high + 2*self.object.param2*self.high












    #def count_area(self, a, b, c):
     #   self.ab = a*b
     #   self.ac = a*c
      #  self.bc = b*c   
       # pass