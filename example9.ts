function add1(a: string, b: string): string {
  return a + b
}

function add2(a: number, b: number): number {
  return a + b
}

function add3(a: any, b: any): any {
  return a + b
}

console.log(add1("Hello", "World"))
console.log(add2(1, 2))
console.log(add3("Hello", 2))
