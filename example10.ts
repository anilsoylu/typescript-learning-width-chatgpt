interface Person {
  name: string
  age: number
  email: string
}

function sendEmail(to: Person) {
  console.log(`Email sent to ${to.email}`)
}

const person = {
  name: "Anıl SOYLU",
  age: 29,
  email: "business@anilsoylu.com",
}

sendEmail(person)
