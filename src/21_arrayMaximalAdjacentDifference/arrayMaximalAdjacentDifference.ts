export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = 0

  for (let i = 0; i < inputArray.length - 1; i++) {
    let temp = Math.abs(inputArray[i]) - Math.abs(inputArray[i + 1])

    max < temp ? (max = temp) : max
  }

  return max
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))
