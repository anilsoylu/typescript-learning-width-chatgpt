function identity<T>(arg: T): T {
  return arg
}

const str: string = identity("Hello World")
const num: number = identity(42)

console.log(str)
console.log(num)
