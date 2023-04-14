let votes = {
    Yes : 6,
    No : 7,
}

const items = Object.entries(votes).map(pos => `klucz: ${pos[0]}, wartość: ${pos[1]}`).join('<br>')
      

const items2 = Object.entries(votes)
    let arr =[]
    for (let x of items2){
        arr.push(`klucz: ${x[0]}, wartość: ${x[1]}`)
    }
    arr = arr.join('#')


console.log('wersja 1 :', items) 
console.log('wersja 2 :', arr)
