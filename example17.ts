class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`)
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  bark() {
    console.log(`${this.name} barked!`)
  }
}

const dog = new Dog("Buddy")
dog.bark()
dog.move(10)
