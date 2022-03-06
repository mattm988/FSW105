var readlineSync = require('readline-sync');

var playerName = readlineSync.question('May I have your name please? ');

const welcomeMessage = `${playerName}, welcome to the Escape Room Simulation!`
console.log(welcomeMessage);

let isAlive = true;
let hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn('Enter 1 to put your hand in the hole, Enter 2 to find the Key, or Enter 3 to open the door: ' ,
     {limit: '$<1-3>' });

     switch(menuOptions){
        case "1":
            console.log (`Oh no! ${playerName} you put your hand in the hole, you are dead.`);
            isAlive = false;
        break;    
        case "2":
            if  (hasKey == false) {
             console.log (`${playerName}, great job! You have found the Key. Please proceed to the next menu option.`);
            hasKey = true;
            break;
            }
            else (hasKey == true); {     
                console.log (`${playerName} you already have the key! Stop wasting time!`);
           } 
        break;    
        case "3":
             if  (hasKey == false) {
            console.log (`${playerName} you do not have the key, you must find it first in order to open the door!`);
        break; 
             }   
        else (hasKey == true); 
            console.log (`Excellent work ${playerName}! You found the key to open the door! Congratulations, you win!`);
            isAlive = false;
         }
        
}
