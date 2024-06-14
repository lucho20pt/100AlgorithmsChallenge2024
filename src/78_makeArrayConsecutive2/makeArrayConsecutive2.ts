export function makeArrayConsecutive2(statues: number[]): number {
  statues.sort((a, b) => a - b)
  let resultCounter = 0

  statues.forEach((num, index) => {
    const next = statues[index + 1]
    if (num + 1 !== next && next !== undefined) {
      resultCounter += next - num - 1
    }
  })
  return resultCounter
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))
console.log(makeArrayConsecutive2([6, 2, 3, 9]))
