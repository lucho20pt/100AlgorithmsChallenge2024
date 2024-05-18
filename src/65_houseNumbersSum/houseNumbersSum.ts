export function houseNumbersSum(inputArray: number[]): number {
  let index = inputArray.findIndex((value) => value === 0)
  index
  let arr = inputArray.splice(0, index)
  return arr.reduce((a, b) => a + b, 0)
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]))
