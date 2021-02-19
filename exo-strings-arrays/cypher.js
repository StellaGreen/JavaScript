let txt = 'TOUT PROBLEME A SA SOLUTION SI IL N Y A PAS DE SOLUTION C EST QU IL N Y A PAS DE PROBLEME'
// Dans ma variable je met le texte à coder
let decryptxt = ''
// Dans ma seconde variable de rentre le code crypté vide pour la réponse futur
let d = 0
// D est l'indice de décalage pour trouver les réponses
for (d = 1; d < 26; d++) {
  decryptxt = ''
  console.log(`\nVoici le message codé en Caesar décalé par ${d} :\n`)
  // Dans cette boucle j'intègre l'indice dans la boucle de comptage
  for (i = 0; i < txt.length; i++) {
    // Dans cette boucle je demande d'indexer (de compter) le texte de ma première variable
    let cdltr = txt[i].charCodeAt()
    let decryptltr = String.fromCharCode(cdltr + d)
    // Dans ces variable je déclare mon texte à mettre sous ASCII, et ma future réponse à l'inverse plus mon indice de comptage
    if (txt[i] !== ' ') {

      if ((cdltr + d) > 90) {
        decryptltr = String.fromCharCode((cdltr + d) - 26)
        decryptxt += decryptltr
        // Cette boucle défini la séquence de comptage par rapport aux chiffres ASCII
      } else {
        decryptxt += decryptltr
        // Dans cette variable j'incrémente mon texte codé
      }
    } else {
      decryptxt += ' '
      // Dans cette variable j'integre les espaces
    }
  }
  console.log(decryptxt)
  // Ici je demande de lire les réponses codé de ma variable texte
}