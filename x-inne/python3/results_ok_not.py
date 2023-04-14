class Result :
    def __init__(self, msg, value):
        self.flag = None
        self.msg = msg
        self.value = value
        
class Ok(Result):   
    def __init__(self, msg, value):
        super().__init__(msg,value)
        self.flag = True

class Error(Result):
    def __init__(self, msg, value):
        super().__init__(msg,value)
        self.flag = False
        