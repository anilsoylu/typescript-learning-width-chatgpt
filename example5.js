function greet(person) {
    console.log("Hello, my name is ".concat(person.name, " and I am ").concat(person.age, " years old."));
}
function hire(person) {
    console.log("Welcome aboard, ".concat(person.name, "! Your ID is ").concat(person.id, " and your position is ").concat(person.position, "."));
}
var anil = {
    name: "Anil",
    age: 29,
    id: 123,
    position: "Developer",
};
greet(anil);
hire(anil);
