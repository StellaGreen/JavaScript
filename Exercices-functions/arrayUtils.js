const biggest = (choose)=>{
    return Math.max(...choose)
//réponse trouvé grace au lien : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max
}
const sortAscend = (choose)=>{
    return choose.sort((a, b) => a - b)
//réponse trouvé grace au lien : https://waytolearnx.com/2019/07/comment-trier-un-tableau-de-nombres-avec-javascript.html
}
const makeUnique = (choose)=>{
    return Array.from(new Set(choose))
//réponse trouvé grace au lien : https://medium.com/@jv.quilichini/comment-supprimer-les-doublons-dun-tableau-en-es6-c547a5b2bcf3
}
console.log(biggest([99, 100, 101, 1]))
console.log(sortAscend([99, 100, 101, 1]))
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))