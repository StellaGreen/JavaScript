/*
Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner 
true si le nombre passé en paramètre est impair, sinon la fonction retournera false.
*/

const isOdd = (nb)=>{
    if(nb %2 === 0){
        return 'false'
    } else {
        return 'true'
    }
//si le nombre est impair ça return 'false' si non 'true"
}
const listNb = [1, 2, 3, 4, 5, 6]

for(nb of listNb){
    if(isOdd(nb)){
        console.log(`${nb} est impair`)
    } else{
        console.log(`${nb} est pair`)
    }
}
//on demande que si le chiffre est pair cela nous le dise, et s'il est impair aussi