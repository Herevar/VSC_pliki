from konto_2bank import Account, SubAccount 


mojekonto = Account()
'''
print(mojekonto.saldo)
#print(mojekonto.deposit(123))
result1 = mojekonto.deposit(2000)

print(mojekonto.saldo)
#print('hm',mojekonto.withdraw(900))
result = mojekonto.withdraw(900)
print(result.msg)
print(mojekonto.saldo)


print('ostatnia wyplata:',mojekonto.lastPayout)
print('ostatnia wplata', mojekonto.lastPayment )
'''
sub = SubAccount(350)

print('saldo',sub.saldo)
zmienna = sub.withdraw(400)
print(zmienna.msg)
print(sub.saldo)

print('saldo głowne',mojekonto.saldo)
a = sub.deposit(444)
print(a.value)
print('A',sub.saldo)
print('saldo głowne',mojekonto.saldo)

print(a.flag)