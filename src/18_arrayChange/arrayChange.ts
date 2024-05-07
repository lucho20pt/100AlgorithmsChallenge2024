export function arrayChange(inputArray: number[]): number {
  let sum = 0
  const arr = [...inputArray]

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i]
    let last = arr[i - 1]

    if (last >= el) {
      let diff = last - el + 1
      sum += diff
      arr[i] = el + diff
      diff = 0
    }
  }

  return sum
}

console.log(arrayChange([1, 1, 1]))
console.log(arrayChange([2, 1, 1, 1]))
