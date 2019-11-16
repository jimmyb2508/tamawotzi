const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Tamawotzi')).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });
  it('has an initial age of 0', () => {
    const pet = new Pet('Harrison');

    expect(pet.age).toEqual(0);
  });
  it('should have an initial hunger of 0', () => {
    const pet = new Pet('Tommy');

    expect(pet.hunger).toEqual(0);
  })
  it('should have an initial fitness of 10', () => {
    const pet = new Pet('Hannah');

    expect(pet.fitness).toEqual(10);
  })
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
  it('increments hunger by 5', () => {
    const pet = new Pet('Sam');

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  })
  it('decrements fitness by 3', () => {
    const pet = new Pet('Jean');

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  })
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Jon');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  })
  it('increases fitness by a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  })
}) 

describe('feed', () => {
  it('decreases hunger by 3', () => {
    const pet = new Pet('Jaws');

    pet.hunger = 4;
    pet.feed();

    expect(pet.hunger).toEqual(1);
  });
  it('hunger should never go below 0', () => {
    const pet = new Pet('Harry');

    pet.hunger = 1;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Billy');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('poop', () => {
  it('increases poo by 1', () => {
    const pet = new Pet('Samson');

    pet.poo = 0
    pet.poop()

    expect(pet.poo).toEqual(1)
  });
  it('poo should never exceed 3', () => {
    const pet = new Pet('Trumpy');

    pet.poo = 3
    pet.poop()

    expect(pet.poo).toEqual(3)
  });
});

describe('checkUp', () => {
  it('requests walk if fitness 3 or below', () => {
    const pet = new Pet('Sarah');

    pet.fitness = 3
    pet.checkUp()

    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('requests feed if hunger is 5 or more', () => {
    const pet = new Pet('Willy');

    pet.hunger = 5;
    pet.checkUp()

    expect(pet.checkUp()).toBe('I am hungry');
  });
  it('requests walk and feed if hungry and unfit', () => {
    const pet = new Pet('Hobbit');

    pet.fitness = 3
    pet.hunger = 5
    pet.checkUp()

    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('states all OK if fit and fed', () => {
    const pet = new Pet('Frodo');

    pet.fitness = 10;
    pet.hunger = 3;
    pet.checkUp()

    expect(pet.checkUp()).toBe('I feel great!');
  });
});

describe('isAlive', () => {
  it('returns false if fitness is 0 or below', () => {
    const pet = new Pet('Jo');

    pet.fitness = 0
    pet.isAlive;

    expect(pet.isAlive).toBe(false);
  });
  it('returns false if pet hunger is 10 or more', () => {
    const pet = new Pet('Herschel');

    pet.hunger = 10
    pet.isAlive;

    expect(pet.isAlive).toBe(false);
  });
  it('returns false if pet age is 30 or more', () => {
    const pet = new Pet('Tilda');

    pet.age = 30
    pet.isAlive;

    expect(pet.isAlive).toBe(false);
  });
  it('returns true if otherwise', () => {
    const pet = new Pet('Simon');

    pet.fitness = 5
    pet.hunger = 5
    pet.age = 5

    expect(pet.isAlive).toBe(true);
  });
});

describe('haveBaby', () => {
  it('parent has child', () => {
    const pet = new Pet('Fido');
    pet.haveBaby('Kid');
    expect(pet.children).toBeInstanceOf(Array);
  });
});
