const readlineSync = require('readline-sync');

const name = readlineSync.question('Welcome, may I have your name please? ');

readlineSync.keyInPause(`
Welcome to World Z, ${name}...
The year is 1985, and Zombies have taken over! It is up to you to fight them off and hopefully find a cure! 
`);

const zombies = ['Boomer', 'Hunter', 'Spitter', 'Charger'];
const items = ['a Health Kit', 'a Flash Light', 'a Shotgun', 'a Molotov Cocktail', 'an Adrenaline Boost', 'a Can of Tomatoes', 'a Grenade Launcher'];
let inventory = [];
let healthPoints = 100;
const options = ['Walk', 'Print Inventory', 'Exit Game'];

function game() {
    let attackPower = Math.floor(Math.random() * (40 - 5) + 1) + 5;
    let zombieAttackPower = Math.floor(Math.random() * (30 - 5) + 1) + 5;
    let zombieHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
    let zombie = zombies[Math.floor(Math.random() * zombies.length)];
    const zombieOptions = ['Run', 'Attack'];
    let newItem = items[Math.floor(Math.random() * items.length)];

    while (healthPoints > 0) {
        const choose = readlineSync.keyInSelect(options, `
 Please choose an action
        `);
    
        if (options[choose] == 'Walk') {
            let luck = Math.random();
            if (luck > 0.3) {
                let findCure = Math.random();
                if (findCure == 0.6) {
                    console.log(`You have found The cure!
                    Now everyone can go back to normal, 
                    congratulations, ${name}!`);
                    healthPoints = 0;
                } else {
                    console.log(`Walking...
                    There are lots of zombies around, 
                    its good idea to keep moving.
                    `);
                }
            } else if (luck <= 0.3) {
                console.log(`You have encountered a ${zombie}! 

His health is ${zombieHealth}. 
Your health is ${healthPoints}.
                `);
                while (healthPoints > 0 && zombieHealth > 0) {
                    const runOrAttack = readlineSync.keyInSelect(zombieOptions, 
                        `Choose how to proceed`);
                    if (zombieOptions[runOrAttack] == 'Run') {
                        let run = Math.random();
                        if (run >= 0.5) {
                            console.log(`You ran away... but now you kind of feel like a whimp...`);
                            zombie = zombies[Math.floor(Math.random() * zombies.length)];
                            zombieHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
                            break;
                        } else if (run < 0.5) {
                            healthPoints = healthPoints - zombieAttackPower;
                            console.log(`While running away, the ${zombie} attacks you with ${zombieAttackPower} attack power.`)
                            if (healthPoints > 0) {
                                console.log(`Your health is now ${healthPoints}.`);
                            } else if (healthPoints <= 0) {
                                console.log(`You have been killed by the ${zombie}. Zombies have now take over the earth. Game over.`);
                            } 
                            zombie = zombies[Math.floor(Math.random() * zombies.length)];
                            zombieHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
                            break;
                        }
                    } else if (zombieOptions[runOrAttack] == 'Attack') {
                        zombieHealth = zombieHealth - attackPower;
                        console.log(`You attack ${zombie} with ${attackPower} strength.`);
                        if (zombieHealth <= 0) {
                            inventory.push(newItem);
                            healthPoints = healthPoints + 20;
                            console.log(`You have killed the ${zombie}!
                            They dropped ${newItem} for your inventory and gained you 20 health points!`);
                            zombieHealth = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
                            zombie = zombies[Math.floor(Math.random() * zombies.length)];
                            newItem = items[Math.floor(Math.random() * items.length)];
                            break;
                        } else {
                            healthPoints = healthPoints - zombieAttackPower;
                            console.log(`The ${zombie} attacks you with ${zombieAttackPower} strength.`);
                            if (healthPoints > 0) {
                                console.log(`  
Your health is now ${healthPoints}. 
Their health is ${zombieHealth}.`);
                            attackPower = Math.floor(Math.random() * (35 - 5) + 1) + 5;
                            zombieAttackPower = Math.floor(Math.random() * (35 - 5) + 1) + 5;
                            } else if (healthPoints <= 0) {
                                console.log(`You have been killed by the ${zombie}. Zombies have now take over the earth. Game over.`);
                            }
                        } 
                    }
                }
            } 
        } else if (options[choose] == 'Print Inventory') {
            console.log(`Name: ${name}
            Health Points: ${healthPoints}
            Inventory: ${inventory}. `);
        } else {
            console.log(`Now leaving the game... Thanks for playing!`);
            healthPoints = 0;
        } 
    }
}
game();