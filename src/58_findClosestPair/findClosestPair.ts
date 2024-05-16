export function findClosestPair(numbers: number[], sum: number): number {
  let result = -1

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
      let a = numbers[i]
      let b = numbers[j + 1]

      if (a + b === sum) {
        let temp = Math.abs(i - j) + 1
        if (result === -1) result = temp
        temp < result ? (result = temp) : null
      }
    }
  }

  return result
}

console.log(findClosestPair([1, 0, 2, 4], 5))
console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5))
console.log(findClosestPair([2, 3, 7], 8))
