const information =(Username, LastName, age)=>{
    console.log(`prenom : ${Username}\nnom : ${LastName}\nage: ${age}\n${age > 18 ? 'vous êtes majeur depuis' : 'Vous serez majeur dans'} ${age - 18 < 0 ? 18 - age : age - 18} ans \n`)
}
information('Sofiane', 'Akermoun', 39)
information('Alice', 'Liddell', 7)