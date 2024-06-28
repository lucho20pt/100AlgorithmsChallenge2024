/**
 * Categorizes professionals based on their preferences.
 *
 * @param pros - An array of professional names.
 * @param preferences - A 2D array of job preferences for each professional.
 * @returns A 3D array representing the categorized professionals.
 */

export function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  const categories: { [key: string]: string[] } = {}

  // filter unique categories
  preferences.forEach((row, r) => {
    row.forEach((job, j) => {
      if (!categories.hasOwnProperty(job)) {
        categories[job] = Array(pros[r])
      } else {
        categories[job] = Array(...categories[job], pros[r])
      }
    })
  })

  // order by categories
  const ordered: { [key: string]: string[] } = Object.keys(categories)
    .sort()
    .reduce((obj: { [key: string]: string[] }, key: string) => {
      obj[key] = categories[key]
      return obj
    }, {})

  // construct result as requested format
  const result: string[][][] = Object.entries(ordered).map(([job, pros]) => [
    [job],
    pros,
  ])

  return result
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      ['Computer lessons', 'Computer repair', 'Data recovery service'],
      ['Computer lessons', 'House cleaning'],
    ]
  )
)
