let txt = 'TOUT PROBLEME A SA SOLUTION SI IL N Y A PAS DE SOLUTION C EST QU IL N Y A PAS DE PROBLEME'
let decryptxt = ''
let d = 0
for (d = 1; d < 26; d++) {
  decryptxt = ''
  console.log(`\nVoici le message codé en Caesar décalé par ${d} :\n`)

  for (i = 0; i < txt.length; i++) {

    let cdltr = txt[i].charCodeAt()
    let decryptltr = String.fromCharCode(cdltr + d)

    if (txt[i] !== ' ') {

      if ((cdltr + d) > 90) {
        decryptltr = String.fromCharCode((cdltr + d) - 26)
        decryptxt += decryptltr

      } else {
        decryptxt += decryptltr
      }
    } else {
      decryptxt += ' '
    }
  }
  console.log(decryptxt)
}