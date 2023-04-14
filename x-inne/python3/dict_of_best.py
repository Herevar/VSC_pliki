def best_user_of_dict(dictionary):
    best_user = {}
    for (key, value)in dictionary.items():
        if value == max(dictionary.values()):
            best_user.update({key,value})
    return best_user   
        
def best_score_of_user(dictionary):
    return [key 
            for key,value in dictionary 
            if value == max(dictionary.values())
            ]
    
    
list1 = [1,2,3]
list2 = [7,8,9]
list3 = list1 + list2

def jebanakonsturkcje(jebanatablica):
    wynikkurwa = 0
    for x in range(len(jebanatablica)) :
     if isinstance(jebanatablica[x], str):
       print('wypierdalac')
     else :
       wynikkurwa += jebanatablica[x] 
    return wynikkurwa
       
print(jebanakonsturkcje([24,5,6,'kk']))



    
    
        