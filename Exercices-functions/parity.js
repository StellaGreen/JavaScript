/*
Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner 
true si le nombre passé en paramètre est impair, sinon la fonction retournera false.
*/

const isOdd = (num)=>{
    let resultat
    resultat = 'false'
    return num %2 === 0 
//je demande que si le nombre est impair la réponses sois "false"
}
const isEven = (num)=>{
    resultat = 'true'
    return !isOdd(num)
//je demande que si le nombre est pair la réponse est "true"
}
console.log(isOdd(3))