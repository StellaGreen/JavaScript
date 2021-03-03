const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousines)=>{
    return nb_monocycle + nb_moto * 2 + nb_voiture * 4 + nb_limousines * 6
// j'annonce le nombre de roues existant sur chaque elements
}
console.log(countWheels(10, 20, 7, 2))
console.log(countWheels(2, 3, 4, 5))