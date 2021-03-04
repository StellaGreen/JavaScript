/*
Ecrire une fonction typeOf qui prend comme paramètre une variable, 
et qui retourne une string qui sera le nom du type de cette variable passée en paramètre. 
Vous devrez utiliser l'opérateur typeof pour cela
*/
const typeOf = (myVar) => {
   return typeof myVar
 }
 
console.log(typeOf(1))
console.log(typeOf([i, u, o]))