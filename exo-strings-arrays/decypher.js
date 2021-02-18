let txt = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let decryptxt = ''
let d = 0
for (d = 0; d < 27; d++) {
  decryptxt = ''
  console.log(`Voici le code Caesar décalé par ${d} :`)

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