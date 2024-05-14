export function digitDegree(n: number): number {
  let resultCounter = 0
  if (n < 10) return resultCounter

  let numArr: number[] = n.toString().split('').map(Number)

  while (true) {
    // if (numArr.length === 1) return numArr[0]
    if (numArr.length === 1) return resultCounter

    const tempNum = numArr.reduce((a, b) => a + b)
    const temp = tempNum.toString().split('').map(Number)
    numArr = temp

    resultCounter++
  }
}

console.log(digitDegree(5))
console.log(digitDegree(100))
console.log(digitDegree(91))
