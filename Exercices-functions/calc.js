const add = (nbr1, nbr2)=>{
   return nbr1 + nbr2
//je demande l'addition 
}
const sub = (nbr1, nbr2)=>{
    return nbr1 - nbr2
//je demande la soustraction
}
const mul = (nbr1, nbr2)=>{
    return nbr1 * nbr2
//je demande la multiplication
}
const div = (nbr1, nbr2)=>{
    return nbr1 / nbr2
//je demande la division
}
const calc = (op, nbr1, nbr2) => {
switch(op){
    case '+': 
        return add(nbr1, nbr2)
    break
    case '-':
        return sub(nbr1, nbr2)
    break
    case '*':
        return mul(nbr1, nbr2)
    break
    case '/':
        return div(nbr1, nbr2)
    break
    default :
    console.log('This is not a calcul')
}
}
console.log(calc('+', 2, 3))
console.log(calc('*', 15, 8))
console.log(calc('-', 2, 5))
console.log(calc('/', 6, 2))
//pas compris le dernier exercices de calc