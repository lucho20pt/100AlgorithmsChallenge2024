export function ratingThreshold(
  threshold: number,
  ratings: number[][]
): number[] {
  //
  const toBeReviewed: number[] = []

  ratings.forEach((row, r) => {
    let sum: number = null

    row.forEach((col, c) => {
      sum += col
    })

    const rate = sum / row.length
    if (threshold > rate) {
      toBeReviewed.push(r)
    }
  })

  return toBeReviewed
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]))
