interface Person {
  name: string
  age: number
}

interface Employee extends Person {
  id: number
  position: string
}

function greet(person: Person) {
  console.log(
    `Hello, my name is ${person.name} and I am ${person.age} years old.`
  )
}

function hire(person: Employee) {
  console.log(
    `Welcome aboard, ${person.name}! Your ID is ${person.id} and your position is ${person.position}.`
  )
}

let anil: Employee = {
  name: "Anil",
  age: 29,
  id: 123,
  position: "Developer",
}

greet(anil)
hire(anil)
