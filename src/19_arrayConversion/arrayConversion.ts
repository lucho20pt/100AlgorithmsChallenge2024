export function arrayConversion(inputArray: number[]): number {
  let arr: number[] = inputArray.slice()
  let isEven: boolean = false
  let length = arr.length

  const sum = (a: number, b: number) => a + b
  const prod = (a: number, b: number) => a * b

  const recursive = (count: number) => {
    if (count > 1) recursive(count - 1)
    if (arr.length === 1) return arr[0]

    isEven = !isEven
    let temp: number[] = []

    if (isEven) {
      for (let i = 0; i < arr.length; i += 2) {
        temp.push(sum(arr[i], arr[i + 1]))
      }
      arr = temp
    } else {
      for (let i = 0; i < arr.length; i += 2) {
        temp.push(prod(arr[i], arr[i + 1]))
      }
      arr = temp
    }
  }
  recursive(length)
  return arr[0]
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))
