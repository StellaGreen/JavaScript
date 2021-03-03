/*
Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner 
true si le nombre passé en paramètre est impair, sinon la fonction retournera false.
*/

const isOdd = (num)=>{
    let resultat
    resultat = 'false'
    return num %2 === 0 

}
const isEven = (num)=>{
    resultat = 'true'
    return !isOdd(num)
}
console.log(isOdd(3))