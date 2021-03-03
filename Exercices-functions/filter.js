const filter = (choice)=>{
    return choice.sort((a, b) => a - b)
}
//je lui demande de filtrer les chiffres du tableau dans l'ordre croissant
console.log(filter([11, 34, 67, 3, 6, 23, 18]))