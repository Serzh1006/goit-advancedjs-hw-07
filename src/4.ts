class Key {
  private signature: string;
  constructor() {
    this.signature = Math.random().toString(15);
  }
  getSignature(): string {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome!");
    } else {
      console.log("Door is closed.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("Door is opened.");
    } else {
      console.log("Wrong key!");
    }
  }
}

const key = new Key();
const wrongKey = new Key();
const house = new MyHouse(key);
const Sergey = new Person(key);

const house1 = new MyHouse(key);
const Bob = new Person(wrongKey);

house.openDoor(Sergey.getKey());
house.comeIn(Sergey);
house1.openDoor(Bob.getKey());
house1.comeIn(Bob);
