const reverseStr = (str)=>{
    return str.split('').reverse().join('')
//on demande que la string soit raccourcis, retourné et collé
}
const isPalindrome =(str)=>{
   return str === reverseStr(str)
//on demande que la string soit identique si elle est retourné
}
console.log(isPalindrome('adda'))