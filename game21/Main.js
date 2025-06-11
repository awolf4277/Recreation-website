// Constructor Function
function Character(name, classType, level, health, inventory, stats) {
  this.name = name;
  this.classType = classType;
  this.level = level;
  this.health = health;
  this.inventory = inventory;
  this.stats = stats;

    // Methods are now defined on the prototype for efficiency
  }
  
  // Method to level up the character
  Character.prototype.levelUp = function () {
    this.level += 1;
    this.stats.attack += 5;
    this.stats.defense += 3;
    this.stats.speed += 2;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  };
  
  // Method to take damage
  Character.prototype.takeDamage = function (damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
    console.log(`${this.name} took ${damage} damage, health is now ${this.health}.`);
  };
  
  // Method to print character summary
  Character.prototype.printSummary = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Class: ${this.classType}`);
    console.log(`Level: ${this.level}`);
    console.log(`Health: ${this.health}`);
};

// Create two character instances
const hero1 = new Character(
  "Aria",
  "Mage",
  5,
  100,
  ["Magic Wand", "Potion"],
  { attack: 20, defense: 10, speed: 15 }
);

const hero2 = new Character(
  "Drax",
  "Warrior",
  7,
  150,
  ["Sword", "Shield"],
  { attack: 25, defense: 20, speed: 10 }
);

// Use methods
hero1.printSummary();
hero2.printSummary();

hero1.levelUp();
hero2.takeDamage(30);

// Loop through stats
console.log("\nHero1 Stats:");
for (let stat in hero1.stats) {
  console.log(`${stat}: ${hero1.stats[stat]}`);
}

console.log("\nHero2 Stats:");
for (let stat in hero2.stats) {
  console.log(`${stat}: ${hero2.stats[stat]}`);
}
