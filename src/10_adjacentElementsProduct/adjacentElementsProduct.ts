export function adjacentElementsProduct(inputArray: number[]): number {
  let output = 0
  for (let i = 0; i < inputArray.length; i++) {
    const el = inputArray[i] * inputArray[i + 1]
    if (output <= el) {
      output = el
    }
    // console.log(output)
  }
  return output
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
