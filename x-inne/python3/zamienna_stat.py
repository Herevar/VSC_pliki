class User:
    idGlob = 1
    
    def __init__(self, name):
        self.id = User.idGlob 
        User.idGlob +=  1
        self.name = name
        
'''
from pojedyncze2 import User

a = User('dupek')
b = User('jakis')
c = User('nick')


print(b.id)
print(User.idGlob)
'''