/*Bonjour Bob, vous êtes entré sur le chan ---firstName---gender---
Bonjour Alice, vous êtes entrée sur le chan*/
let genger = 'female'
let firstname ='Alice'
let msg = `Bonjour ${firstname}, vous êtes entré${genger === 'female' ? 'e' : ''} sur le chan.`
console.log(msg)