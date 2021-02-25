let currentFloor = 5
let targetFloor = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
const chalk = require('chalk');
const log = console.log


while (targetFloor >= -2 || targetFloor <= 7 !== currentFloor){
    switch (currentFloor){
        case -2 :{
            log(chalk.blue('Etage n°-2'))
            break
        }
        case -1 :{
            log(chalk.pink('Etage n°-1'))
            break
        }
        case 0 :{
            log(chalk.white('RDC'))
            break
        }
        case 1 :{
            log(chalk.green('Etage n°1'))
            break
        }
        case 2 :{
            log(chalk.red('Etage n°2'))
            break
        }
        case 3 :{
            log(chalk.yellow('Etage n°3'))
            break
        }
        case 4 :{
            log(chalk.grey('Etage n°4'))
            break
        }
        case 5 :{
            log(chalk.purple('Etage n°5'))
            break
        }
        case 6 :{
            log(chalk.black('Etage n°6'))
            break
        }
        case 7 :{
            log(chalk.magenta('Etage n°7'))
            break
        }
        
    }
    currentFloor = targetFloor
    break
}


