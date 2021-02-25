/*
En utilisant une structure conditionnelle switch (mais pas que), 
simulez le fonctionnant d'un ascenseur qui devra gérer 1 trajet pour un utilisateur. 
L'ascenseur peut amener notre utilisateur de l'étage -2 à 7. 
L'ascenseur devra aussi prendre en compte si un utilisateur est déjà à l'étage 
qu'il a sélectionné. Les départs et les arrivées d'un étage seront affichés 
avec un console.log Les variables à utiliser et que vous manipulerez pour simuler 
le choix d'un utilisateur seront: currentFloor: Pour l'étage actuel de l'utilisateur 
targetFloor: Pour l'étage où souhaite se rentre l'utilisateur
*/
let currentFloor = 5
let targetFloor = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
const chalk = require('chalk');


while (targetFloor >= -2 || targetFloor <= 7 !== currentFloor){
    switch (currentFloor){
        case -2 :{
            console.log(chalk.blue('Etage n°-2'))
            break
        }
        case -1 :{
            console.log(chalk.pink('Etage n°-1'))
            break
        }
        case 0 :{
            console.log(chalk.white('RDC'))
            break
        }
        case 1 :{
            console.log(chalk.green('Etage n°1'))
            break
        }
        case 2 :{
            console.log(chalk.red('Etage n°2'))
            break
        }
        case 3 :{
            console.log(chalk.yellow('Etage n°3'))
            break
        }
        case 4 :{
            console.log(chalk.grey('Etage n°4'))
            break
        }
        case 5 :{
            console.log(chalk.purple('Etage n°5'))
            break
        }
        case 6 :{
            console.log(chalk.black('Etage n°6'))
            break
        }
        case 7 :{
            console.log(chalk.magenta('Etage n°7'))
            break
        }
        
    }
    currentFloor = targetFloor
    break
}


