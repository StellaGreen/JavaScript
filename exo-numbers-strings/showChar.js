let msg = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."
let auteur = 'Gustave Flaubert'
let livre = 'Salammbô'

console.log(`Dans le livre ${livre} de ${auteur}, on y retrouve la phrase : ${msg}\n\nCette phrase contient ${msg.length} caractères.\n\nVoici les indexs pour chaques caractères :\n `)
for (let i = 0; i < msg.length; ++i) {
  console.log(`Le caractère ${msg[i]} est à l'index : ${i}`)
}
