function identity<T>(arg: T): T {
  return arg
}

console.log(identity<string>("Hello, World!"))
console.log(identity<number>(123))
console.log(identity<boolean>(true))
