type Pet = {
  name: string
  age: number
  species: string
}

type Owner = {
  name: string
  age: number
  pets: Pet[]
}

const owner: Owner = {
  name: "Bob",
  age: 42,
  pets: [
    {
      name: "Fluffy",
      age: 3,
      species: "cat",
    },
    {
      name: "Fido",
      age: 5,
      species: "dog",
    },
  ],
}

console.log(owner.pets[0].name) // Fluffy
console.log(owner.pets[1].species) // Dog
