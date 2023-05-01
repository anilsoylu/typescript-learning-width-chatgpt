var owner = {
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
};
console.log(owner.pets[0].name); // Fluffy
console.log(owner.pets[1].species); // Dog
