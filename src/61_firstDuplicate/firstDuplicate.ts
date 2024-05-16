export function firstDuplicate(a: number[]): number {
  let result = -1
  let minIndex = -1

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      const aa = a[i]
      const bb = a[j]
      
      if (aa - bb === 0) {
        let tempIndex = Math.abs(i - j)

        if (minIndex === -1) {
          minIndex = tempIndex
          result = aa
        } else if (minIndex > tempIndex) {
          minIndex = tempIndex
          result = aa
        }
      }
    }
  }
  return result
}

console.log(firstDuplicate([2, 1, 4, 5, 4, 2]))
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))
console.log(firstDuplicate([2, 4, 3, 5, 1]))
