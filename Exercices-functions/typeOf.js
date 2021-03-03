/*
Ecrire une fonction typeOf qui prend comme paramètre une variable, 
et qui retourne une string qui sera le nom du type de cette variable passée en paramètre. 
Vous devrez utiliser l'opérateur typeof pour cela
*/
 const typeOf = (bonbon) =>{
     return `Il vous reste ${bonbon} bonbon${bonbon > 2 ? 's' : ''}`
//permet de retourner la phrase plus tard
}
const meal = (repeat) =>{
    for(let i= 0;i<repeat;i++){
        console.log(typeOf(bonbon))
}//cela n'a aucune utilité mais ça permet de repeter plusieurs foi la même phrase selon repat
}
const repeat = 1
const bonbon = 12
console.log(meal(repeat))