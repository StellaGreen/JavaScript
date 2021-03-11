const test = (prenom, jour)=>{
    return `Pour ${prenom} la salle serra ouverte ${jour}\n`
}
//je veux retourner une string avec un prenom valiable et un jours variable
const appelle = (prenom, jour)=>{
    let j = 0   
    for(let i = 0; i < prenom.length; ++i){
            console.log(test(prenom[i], jour[j]))
            j === 6 ? j = 0 : j++   
//je demande a ce qu'un prenom soit assigné a un jour
    }
}

const prenom = ['Maelys', 'Gaetan', 'Achille', 'Bernard', 'Maxence', 'Elma', 'Martin', 'Max']
const jour = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

console.log(`En raison de l'épidémie 'Covid 19' les salles serront attribué journalierement et individuellement pour chaque élèves.\n`)
appelle(prenom, jour)