export function extractMatrixColumn(
  matrix: number[][],
  column: number
): number[] {
  const arr: number[] = []

  for (let i = 0; i < matrix.length; i++) {
    let el = matrix[i][column]
    arr.push(el)
  }

  return arr
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6]
    ],
    2
  )
)
