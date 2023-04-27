interface Person {
  name: string
  age: number
  email: string
  sendEmail: (message: string) => void
}

const person: Person = {
  name: "Anıl",
  age: 29,
  email: "business@anilsoylu.com",
  sendEmail: (message: string) => {
    console.log(`Email sent ${message}`)
  },
}

person.sendEmail("Hello, how are you?")
