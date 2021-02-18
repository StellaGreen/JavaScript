let msg = "Je suis le ténébreux, - le veuf, - l'inconsolé,\nLe prince d'Aquitaine à la tour abolie :\nMa seule étoile est morte, - et mon luth constellé\nPorte le soleil noir de la Mélancolie.\n\nDans la nuit du tombeau, toi qui m'as consolé,\nRends - moi le Pausilippe et la mer d'Italie,\nLa fleur qui plaisait tant à mon cœur désolé,\nEt la treille où le pampre à la rose s'allie.\n\nSuis - je Amour ou Phébus ?...Lusignan ou Biron ?\nMon front est rouge encor du baiser de la reine;\nJ'ai rêvé dans la grotte où nage la sirène...\n\nEt j'ai deux fois vainqueur traversé l'Achéron;\nModulant tour à tour sur la lyre d'Orphée\nLes soupirs de la sainte et les cris de la fée."
msg = msg.toLowerCase()
nbrvoyel = 0

for (let i = 0; i < msg.length; ++i) {
  if (msg[i] === 'a' || msg[i] === 'à' || msg[i] === 'e' || msg[i] === 'ê' || msg[i] === 'è' || msg[i] === 'é' || msg[i] === 'i' || msg[i] === 'o' || msg[i] === 'u' || msg[i] === 'ù' || msg[i] === 'y')
    nbrvoyel++
}
console.log(`Dans le texte du dossier "nbChar.js" il y a ${nbrvoyel} voyelles.`)