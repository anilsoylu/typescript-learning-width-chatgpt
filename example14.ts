class Animal {
  name: string
  age: number
  type: string

  constructor(name: string, age: number, type: string) {
    this.name = name
    this.age = age
    this.type = type
  }

  makeSound(): void {
    console.log(`${this.type} is making sound`)
  }
}

class Dog extends Animal {
  bread: string

  constructor(name: string, age: number, bread: string) {
    super(name, age, "Dog")
    this.bread = bread
  }

  bark(): void {
    console.log("Woof! Woof!")
  }
}

const dog = new Dog("Max", 3, "Bulldog")
console.log(dog.name)
console.log(dog.age)
console.log(dog.type)
console.log(dog.bread)
dog.makeSound()
dog.bark()
