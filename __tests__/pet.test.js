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
  })
});