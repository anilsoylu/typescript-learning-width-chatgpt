class Person {
  name: string
  age: number
  email: string

  constructor(name: string, age: number, email: string) {
    this.name = name
    this.age = age
    this.email = email
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`)
  }
}

const person = new Person("Anıl SOYLU", 29, "business@anilsoylu.com")
person.sendEmail()
