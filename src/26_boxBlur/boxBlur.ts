export function boxBlur(image: number[][]): number[][] {
  let res: number[][] = []

  // sum inner arr
  for (let i = 1; i < image.length - 1; i++) {
    const row = []
    for (let j = 1; j < image[i].length - 1; j++) {
      // => 7
      let count = 0
      let sum = 0

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          sum += image[i + x][j + y]
          count++
        }
      }
      row.push(Math.floor(sum / count))
    }
    res.push(row)
  }

  return res
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
  ])
)
