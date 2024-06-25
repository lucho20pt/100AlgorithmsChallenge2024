export function maxMultiple(divisor: number, bound: number): number {
  while (bound % divisor !== 0) {
    bound--
  }
  return bound
}

console.log(maxMultiple(3, 10))
