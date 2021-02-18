/*Programme qui va m'aider à décider si je dois mettre mon manteau
ou pas en fonction d'une méteo pluvieuse ou venteuse */

let isRainy = true
let isWindy = false
let isSunny = true

if (isRainy && isWindy) {
  console.log('Tempête en vue, mettez votre carpa et prenez un parapluie bien solide !')
} else if (isRainy && isSunny) {
  console.log('Prenez votre parapluie et admirez les arc-en-ciel.')
} else if (isWindy && isSunny) {
  console.log('Prenez une simple veste à manches longues.')
}
else {
  console.log('Nous n avez pas besoin de manteau today')
}