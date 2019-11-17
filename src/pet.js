const STARTING_AGE = 0;
const MAXIMUM_FITNESS = 10;
const MAXIMUM_POO = 3;
const NEED_WALK = 'I need a walk';
const NEED_FEED = 'I am hungry!';
const HUNGRY_UNFIT= 'I am hungry AND I need a walk';
const FEEL_GOOD = 'I feel great!';

function Pet(name) {
  this.name = name;
  this.age = STARTING_AGE;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
  this.poo = 0;
  this.children = [];
};

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
}

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  } this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  } if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  } if ((this.hunger - 3) >= STARTING_AGE) {
    this.hunger -= 3;
  } else {
    this.hunger = STARTING_AGE;
  }
};

Pet.prototype.poop = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  } if ((this.poo + 1) <= MAXIMUM_POO) {
    this.poo += 1;
  } else {
    this.poo = MAXIMUM_POO;
  }
}

Pet.prototype.checkUp = function() {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return HUNGRY_UNFIT;
  } else if (this.fitness <= 3) {
    return NEED_WALK;
  } else if (this.hunger >= 5 ) {
    return NEED_FEED;
  } else return FEEL_GOOD;
}

Pet.prototype.haveBaby = function(babyName) {
  const child = new Pet(babyName);
  child.parent = this.name;
  this.children.push(child.name);
}

const newPet = new Pet('Tamawotzi');

document.getElementById('checkStatus').innerHTML = `${newPet.checkUp()}`
document.getElementById('Age').innerHTML = `Age: ${newPet.age}`;
document.getElementById('Fitness').innerHTML = `Fitness: ${newPet.fitness}`;
document.getElementById('Hunger').innerHTML = `Hunger: ${newPet.hunger}`;

function upGrow() {
  newPet.growUp();
  document.getElementById('checkStatus').innerHTML = `${newPet.checkUp()}`
  document.getElementById('Age').innerHTML = `Age: ${newPet.age}`;
  document.getElementById('Fitness').innerHTML = `Fitness: ${newPet.fitness}`;
  document.getElementById('Hunger').innerHTML = `Hunger: ${newPet.hunger}`;
}

function exercise() {
  newPet.walk();
  document.getElementById('checkStatus').innerHTML = `${newPet.checkUp()}`
  document.getElementById('Age').innerHTML = `Age: ${newPet.age}`;
  document.getElementById('Fitness').innerHTML = `Fitness: ${newPet.fitness}`;
  document.getElementById('Hunger').innerHTML = `Hunger: ${newPet.hunger}`;
}

function eat() {
  newPet.feed();
  document.getElementById('checkStatus').innerHTML = `${newPet.checkUp()}`
  document.getElementById('Age').innerHTML = `Age: ${newPet.age}`;
  document.getElementById('Fitness').innerHTML = `Fitness: ${newPet.fitness}`;
  document.getElementById('Hunger').innerHTML = `Hunger: ${newPet.hunger}`;
}


module.exports = Pet;