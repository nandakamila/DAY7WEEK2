/*
1. Create a function to check if two objects are equal 
    ● Example
        ○ Input : { a: 2 } & { a: 1 }
        ○ Output: false
    ● Example
        ○ Input : { a: “Hello” } & { a: 1 }
        ○ Output: false
    ● Example
        ○ Input : { a: 1 } & { a: 1 }
        ○ Output: true
*/

const one = {a:2}
const two = {a:1}
const three = {a:'Hello'}
const four = {a:1}

function isEqual(a,b){
    a===b ? console.log(`${a} Its equal! ${b}`) : console.log(`${a} Not equal! ${b}`)
}

isEqual(one.a,two.a);
isEqual(three.a,two.a);
isEqual(four.a,two.a);

/*
2. Create a function to get the intersection of two objects
    ● Example
        ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
        ○ Output: { a: 1 }
*/

const five = {a: 1, b: 2}
const six = {a: 1, b:7, c: 3}
function intersection(a,b){
    const section = {};
    //for-in loop untuk check keys dari a ada di b
    for (const key in a) {
        // jika b ada key yang sama dan value dari key a dan key b sama maka key dan value di-add ke section
        if (b.hasOwnProperty(key) && a[key] === b[key]) {
            section[key] = a[key];
        }
    }
    return console.log(section);
}

intersection(five,six);

/*
3. Create a function to merge two array of student data and remove duplicate data
    ● Student data : name & email
        ● Example : 
            Array1 → [
            { name: ‘Student 1’, email : ‘student1@mail.com’ }, 
            { name: ‘Student 2’, email : ‘student2@mail.com’ }
            ]
            Array2 → [
            { name: ‘Student 1’, email : ‘student1@mail.com’ }, 
            { name: ‘Student 3’, email : ‘student3@mail.com’ }
            ]
        ● Result : 
            ArrayResult → [
            { name: ‘Student 1’, email : ‘student1@mail.com’ }, 
            { name: ‘Student 2’, email : ‘student2@mail.com’ },
            { name: ‘Student 3’, email : ‘student3@mail.com’ }
            ]
*/

const array1 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
];

const array2 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' }
];

function uniqueArray(a,b){
    const uniqueArray = [];
    const mergeArray = a.concat(b);

    for (let i = 0; i < mergeArray.length; i++) {
    let isDuplicate = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (uniqueArray[j].email === mergeArray[i].email) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniqueArray.push(mergeArray[i]);
        }
    }
    return console.log(uniqueArray);
}

uniqueArray(array1, array2);

/*
4. Create a function that can accept input as an array of objects and switch all values into property and  property into value
    ● Example : 
        ○ Input : [{ name: ‘David’, age: 20 }]
        ○ Output : [{ David: ‘name’, 20: ‘age’}]
*/

const input = [{ name: 'David', age: 20 }];

function switchKeysAndValues(input) {
    const newArray = [];
    for (let i = 0; i < input.length; i++) {
        const obj = input[i];
        const switchedObject = {};

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) { 
                switchedObject[obj[key]] = key;
            }
        }
        newArray.push(switchedObject);
    }
    return console.log(newArray);
}

switchKeysAndValues(input);

/*
5. Create a function to find a factorial number using recursion
    ● Example
        ○ Input : 5
        ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

const number = 5;

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(`${number}! = ${factorial(number)}`);

/*
6. Shooting Games
● Specifications :
    ○ Create a shooting game between two player
    ○ Each player has three properties : name, health and power
    ○ Each player will take turns to shooting
    ○ Before shooting, players get a chance to get random items (health +10 or power +10)
    ○ The game will continue until one of the players has health < 0
● Requirements : 
    ○ Create ShootingGame & Player class
    ○ ShootingGame class : 
        ■ constructor(player1, player2) → player objects as a parameter
        ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
        ■ start() → start shooting games
    ○ Player class :
        ■ Property → name, health (default 100), power (default 10)
        ■ hit(power) → subtract player health
        ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
        ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
    ○ ShootingGame start() function flow :
        ■ In every turn :
            ● Show each player status before shooting
            ● Get random item for each player before shooting
            ● Show each player status after shooting
        ■ Show winner name
*/

class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {

        let health = Math.random();
        let power = Math.random();
        
        if(health <= 0.5) {
            health=0; power=10
        }else{
            health=10; power=0
        } 
        
        return {health, power};
    }

    start() {
        start() {
            for (;this.player1.health > 0 && this.player2.health > 0;) {
                // PLAYER A RANDOM ITEM
                const item1 = this.getRandomItem();
                if(item1.health!=0){
                    console.log("Player A got a health Potion : Health +", item1.health);
                }else{
                    console.log("Player A got a power Potion : Power +", item1.power);
                }
                this.player1.useItem(item1);
        
                console.log("Player A uses an item:");
                this.player1.showStatus();
        
                // PLAYER B RANDOM ITEM
                console.log("Player B's turn:");
                this.player2.showStatus();
        
                const item2 = this.getRandomItem();
                if(item2.health!=0){
                    console.log("Player B got a health Potion : Health +", item2.health);
                }else{
                    console.log("Player B got a power Potion : Power +", item2.power);
                }
                this.player2.useItem(item2);
        
                console.log("Player B uses an item:");
                this.player2.showStatus();
        
                // PLAYER A HIT PLAYER B
                this.player1.hit(this.player2.power);
                console.log("Player A shoots Player B!");
                this.player1.showStatus();
        
                if (this.player1.health <= 0) {
                    console.log("Player B wins!");
                    break;
                }
        
                // PLAYER B HIT PLAYER A
                this.player2.hit(this.player1.power);
                console.log("Player B shoots Player A:");
                this.player2.showStatus();
        
                if (this.player2.health <= 0) {
                    console.log("Player A wins!");
                    break;
                }
            }
        }        
    }
}

const p1 = new Player("Player A");
const p2 = new Player("Player B");
const game = new ShootingGame(p1, p2);
game.start();
