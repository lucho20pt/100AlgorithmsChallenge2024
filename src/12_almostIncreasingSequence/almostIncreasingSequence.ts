export function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0
  sequence.forEach((value, index) => {
    if (
      sequence[index + 1] - value !== 1 &&
      sequence[index + 2] !== undefined
    ) {
      //   count++
      if (sequence[index + 2] - value !== 1) {
        return count++
      }
    }
  })

  return count < 1 || count === -1 ? true : false
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([1, 3]))
console.log(almostIncreasingSequence([1, 5, 2, 3, 4, 5]))
