
from figury import Rectangle,Square,Cube, Cuboid, Cuboid2, Cube_alter


r1 = Rectangle(5,6)
print('r1:',r1.counting_area())
#print('r1:',r1)
s2 = Square(3)
print('s2:',s2.counting_area())

c2 = Cube(4)
print('c2.area:',c2.counting_6_area())
print('c2.vol:',c2.volume())
#ale tak nie za bardzo mozna dziedziczyc, ponizej odpowiednie uzycie
c2a = Cube_alter(Square(4))
print("c2a:", c2a.cube_area())
print("c2a:", c2a.cube_volume())

c3 = Cuboid()
print('c3:', c3.count_v(r1,4))
print('c3:', c3.count_v(Rectangle(5,6),4))
'''
#to nie zadziała 
c4 = Cuboid(Rectangle(5,6),4)
print('c4:', c4.count1())
musi byc jak ponizej
'''

c5 = Cuboid2(Rectangle(2,3),4)
print('c5:',c5.count_volume())
print('c5_area:', c5.count_area())



