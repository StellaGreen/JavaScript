const average =(number)=>{  
    let n = number.length;
    let somme=0;
    for(i=0; i<n; i++)
    {
        somme += number[i];
    }
    let resultat = somme / n;
    return resultat;
 
}
console.log(average([8, 4, 6, 12, 14]))