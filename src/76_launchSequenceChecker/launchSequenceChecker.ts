export function launchSequenceChecker(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  //
  const obj: { [key: string]: number } = {}

  for (let i = 0; i < systemNames.length; i++) {
    const system = systemNames[i]
    const step = stepNumbers[i]

    if (!obj.hasOwnProperty(system)) {
      obj[system] = step
    } else if (obj[system].valueOf() >= step) {
      return false
    }
  }
  return true
}

console.log(
  launchSequenceChecker(
    ['stage_1', 'stage_2', 'dragon', 'stage_1', 'stage_2', 'dragon'],
    [1, 10, 11, 2, 12, 111]
  )
)
console.log(
  launchSequenceChecker(
    ['stage_1', 'stage_1', 'stage_2', 'dragon'],
    [2, 1, 12, 111]
  )
)
