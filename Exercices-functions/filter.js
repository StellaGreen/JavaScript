
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((elem) => {
    return elem % 2 !== 0
  })
  //j'ai utilisé la méthode apprise en cours car elle permet de filtrer comme souhaité dans l'énoncé
  console.log(Array) // output: [ 1, 3, 5 , 7, 9]