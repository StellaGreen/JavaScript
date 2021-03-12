let count = 0
let count2=0
const isMagicSquare = (square)=>{
for(let i= 0; i < square.lenght; i++){
 count +=square[i].lenght

for(let j=0; j<square[i].lenght; j++){
count2 += square[i][j].lenght

if( count === count2){
    return true
}else{
   return false
}}}
}
    const square = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8],
      ]
console.log(isMagicSquare(square))

// EXERCICE PAS REUSSI