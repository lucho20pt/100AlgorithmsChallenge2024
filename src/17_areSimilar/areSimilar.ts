export function areSimilar(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false

  // copy and sort arr
  const A = a.slice().sort()
  const B = b.slice().sort()

  return A.every((el, i) => {
    const j = B[i]
    const result = el - j
    if (result !== 0) return false
    return true
  })
}

console.log(areSimilar([1, 2, 3, 10], [1, 2, 3, 10]))
console.log(areSimilar([1, 2, 3], [2, 1, 3]))
console.log(areSimilar([1, 2, 2], [2, 1, 1]))
