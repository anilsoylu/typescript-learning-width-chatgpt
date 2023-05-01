import React, { useState } from "react"

interface Person {
  name: string
  age: number
}

function App() {
  const [person, setPerson] = useState<Person>({ name: "", age: 0 })

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, name: e.target.value })
  }

  function handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({ ...person, age: parseInt(e.target.value) })
  }

  return (
    <div>
      <label htmlFor="Name">Name: </label>
      <input
        type="text"
        name="Name"
        value={person.name}
        onChange={handleNameChange}
      />
      <br />
      <br />

      <label htmlFor="Age">Age: </label>
      <input
        type="number"
        name="Age"
        value={person.age}
        onChange={handleAgeChange}
      />
    </div>
  )
}

export default App
