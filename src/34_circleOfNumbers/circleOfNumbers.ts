export function circleOfNumbers(n: number, firstNumber: number): number {
  const radially = (n: number, firstNumber: number): number => {
    const half = n / 2
    return (firstNumber + half) % n
  }
  return radially(n, firstNumber)
}

console.log(circleOfNumbers(10, 6))
console.log(circleOfNumbers(8, 6))
