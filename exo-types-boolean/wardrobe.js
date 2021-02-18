//Wardrobe exercice

let isRainy = true
let temperature = 28

let clothes = '' + 'un t-shirt, un caleçon, des chaussettes, '
if (isRainy) {
  clothes += 'un parapluie, '
}
if (temperature < 15) {
  clothes += 'un gros pull, un pantalon épais, un manteau, des gants et des bottes moumoutes'
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'un pull, un pantalon et des baskettes'
} else {
  clothes += 'un chapeau, un short et des claquettes'
}
console.log(`Je vous recommande de porter: ${clothes} pour aujourd'hui.`)