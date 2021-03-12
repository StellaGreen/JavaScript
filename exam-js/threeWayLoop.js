let tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']


	// Loop classique avec une boucle for
	for (let i = 0; i < tab.length; ++i) {
	  console.log(tab[i])
	}

	// for...of
	for (let elem of tab) {
	  console.log(elem)
	}

	// forEach
	tab.forEach((elem) => {
	  console.log(elem)
	})