export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  //
  let resArr: number[] = []

  for (let i = 0; i < changes.length; i++) {
    const backupDate = changes[i][0]
    const file = changes[i][1]

    if (lastBackupTime < backupDate) {
      resArr.push(file)
    }
  }

  return resArr
    .filter((value, index, arr) => {
      return arr.indexOf(value) === index
    })
    .sort((a, b) => a - b)
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
  ])
)
