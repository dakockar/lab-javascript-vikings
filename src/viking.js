// Soldier
class Soldier {
    constructor(health, strength) {
          this.health = health;
          this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);        // wow, this one came in handy!

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    // no need for a constructor since it will use the constructor of its parent directly

    receiveDamage(damage) {
        super.receiveDamage(damage);
        
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }


    vikingAttack() {
        
        return this.attack("viking");

        // the code I wrote before refactoring
        // ---------------------------------------------------------
        // let randomNum = randomNumber(this.saxonArmy.length);
        // let randomSaxon = this.saxonArmy[randomNum];
        // let randomViking = this.vikingArmy[randomNumber(this.vikingArmy.length)];

        // let output = randomSaxon.receiveDamage(randomViking.strength);

        // if (randomSaxon.health <= 0) {
        //     this.saxonArmy.splice(randomNum, 1);
        // }

        // return output; 
        // ---------------------------------------------------------
    }

    saxonAttack() {

        return this.attack("saxon");

        // the code I wrote before refactoring
        // -------------------------------------------------------
        // let randomNum = randomNumber(this.vikingArmy.length);
        // let randomViking = this.vikingArmy[randomNum];
        // let randomSaxon = this.saxonArmy[randomNumber(this.saxonArmy.length)];

        // let output = randomViking.receiveDamage(randomSaxon.strength);

        // if (randomViking.health <= 0) {
        //     this.vikingArmy.splice(randomNum, 1);
        // }

        // return output;
        // -------------------------------------------------------
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }


    // SUPER BONUS!!
    // please give feedback :)

    attack(attacker) {
        let randomIndexViking = randomNumber(this.vikingArmy.length);
        let randomIndexSaxon = randomNumber(this.saxonArmy.length);
        let randomViking = this.vikingArmy[randomIndexViking];
        let randomSaxon = this.saxonArmy[randomIndexSaxon];
        let output;

        if (attacker === "viking") {
            output = randomSaxon.receiveDamage(randomViking.strength);
            if (randomSaxon.health <= 0) {
                this.saxonArmy.splice(randomIndexSaxon, 1);
            }
        }
        else if (attacker === "saxon") {
            output = randomViking.receiveDamage(randomSaxon.strength);
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(randomIndexViking, 1);
            }
        }
        else {
            output = "no such attacker!";
        }

        return output;
    }
}

// wrote this to make things easier

randomNumber = maxValue => Math.floor(Math.random() * maxValue);
