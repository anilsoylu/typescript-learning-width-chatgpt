class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
  }
}

let anil = new Person("Anil", 28)

anil.greet()
