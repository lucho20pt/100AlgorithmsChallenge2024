export function matrixElementsSum(matrix: any[][]): number {
  //
  let totalPrice: number = 0
  let freeRooms: number[] = []

  matrix.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell === 0) freeRooms.push(c)
      if (c !== freeRooms[c]) {
        totalPrice += cell
      }
    })
  })

  return totalPrice
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
)
