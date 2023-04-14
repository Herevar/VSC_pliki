from results_ok_not import Ok, Error

class Account:
    
    def __init__ (self, dupa = 0):
        self.saldo = dupa
        self.lastPayment = 0
        self.lastPayout = 1

        
    def withdraw (self, amount):
        if self.saldo - amount >= 0 :
            self.saldo -= amount
            self.lastPayout = amount
            #return 'Wypłacone:', amount,', obecny stan salda:', self.saldo # to jest nie do konca dobre bo zwraca to wszystko jako krotke
            return Ok ('Wypłacone', amount)
        else :
            #return "Nie da rady;", self.saldo, 'tyle na koncie' # '+' zmiaast ',' to trzeba rzutować na string
            return Error('nie da rady wypłacic', amount)
    
    
    def deposit(self, amount_dep) :
        self.saldo += amount_dep
        self.lastPayment = amount_dep
        #return 'wpłacono:' ,amount_dep, ', obecne saldo:', self.saldo # zreszta i tak sie tak nie robi
        return Ok ("wpłacone", amount_dep)      
    

class SubAccount(Account) :
    
    def withdraw (self, amount, limit_value = 500):
        if amount > limit_value:
            return Error('NIE MOZNA', amount)
        else :            
            return super().withdraw(amount)
        
    def deposit(self, amount_to_dep):
        return super().deposit(amount_to_dep)
      