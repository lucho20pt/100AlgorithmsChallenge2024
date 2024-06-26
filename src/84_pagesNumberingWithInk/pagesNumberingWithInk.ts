export function pagesNumberingWithInk(
  current: number,
  numberOfDigits: number
): number {
  let sumCurrentSize = current.toString().length
  let lastPrintedPage = null

  for (let i = 0; i < numberOfDigits; i++) {
    const currentSize = current.toString().length

    lastPrintedPage = current
    sumCurrentSize += currentSize
    current++

    if (sumCurrentSize > numberOfDigits) return lastPrintedPage
  }
}

console.log(pagesNumberingWithInk(1, 5))
console.log(pagesNumberingWithInk(21, 5))
console.log(pagesNumberingWithInk(8, 4))
