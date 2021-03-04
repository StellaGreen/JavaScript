/*
Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner 
true si le nombre passé en paramètre est impair, sinon la fonction retournera false.
*/

const isOdd = (nb)=>{
    return nb % 2 !== 0
}

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isOdd(1))
console.log(isOdd(10)) 
console.log(isEven(1)) 
console.log(isEven(10)) 