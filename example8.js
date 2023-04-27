function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    // add any
    return a + b;
}
console.log(add("Hello", "World"));
console.log(add(1, 2));
console.log(add("Hello", 2));
