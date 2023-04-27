function reverse<T>(items: T[]): T[] {
  const reversed = []

  for (let i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i])
  }
  return reversed
}

const letters = ["a", "b", "c", "d", "e"]
const numbers = [1, 2, 3, 4, 5]

console.log(reverse(letters))
console.log(reverse(numbers))
