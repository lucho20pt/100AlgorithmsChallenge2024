export function arrayPreviousLess(items: number[]): number[] {
  const arr: number[] = []
  for (let i = 0; i < items.length; i++) {
    let el = items[i]
    let prev = items[i - 1]
    el > prev ? arr.push(prev) : arr.push(-1)
  }
  return arr
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]))
