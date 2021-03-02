let tab = [
    [
      [1, 7, 3],
      [11, 17, 7],
      [-3, -5],
      [5, 13],
    ],
    [
      [2, 4, 6, 8, 10],
      [1, 3, 5],
    ],
    [[0]],
    [[0], [1], [2], [1]],
  ]
let add = 0
for (i = 0; i < tab.length; i++) {
    for (j = 0; j < tab[i].length; j++){
        for(y=0; y <tab[i][j].length; y++){
        add += tab[i][j][y]
        }
    }
}
console.log(`La somme de tab est ${add}...`)