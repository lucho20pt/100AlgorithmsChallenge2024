export function crossingSum(matrix: number[][], a: number, b: number): number {
  let sum: number = 0
  const row = matrix[a].reduce((a, b) => a + b, 0)
  for (let i = 0; i < matrix.length; i++) {
    const col = i !== a ? matrix[i][b] : 0
    sum += col
  }
  sum += row
  return sum
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ],
    1,
    3
  )
)
