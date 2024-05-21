export function isLucky(n: number): boolean {
  const tempArr = n.toString().split('')
  const halfLength = Math.floor(tempArr.length / 2)

  const leftArr = tempArr.slice(0, halfLength)
  const rightArr = tempArr.slice(halfLength)

  const left = leftArr.reduce((acc, curr) => acc + parseInt(curr), 0)
  const right = rightArr.reduce((acc, curr) => acc + parseInt(curr), 0)

  return left === right ? true : false
}

console.log(isLucky(1230))
console.log(isLucky(239017))
