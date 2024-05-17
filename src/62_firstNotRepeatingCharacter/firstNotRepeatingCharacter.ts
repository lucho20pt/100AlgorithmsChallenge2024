export function firstNotRepeatingCharacter(s: string): string {
  const strArr = s.split('')
  const duplicates: { [string: string]: { count: number; index: number } } = {}
  let result = '_'
  let indexResult = s.length

  strArr.forEach((element, index) => {
    // if duplicates do not exist
    if (!duplicates.hasOwnProperty(element)) {
      duplicates[element] = {
        count: 1,
        index
      }
    } else {
      duplicates[element].count++
      duplicates[element].index = index
    }
  })

  // find the lowest index
  for (const key in duplicates) {
    if (duplicates[key].count === 1 && duplicates[key].index < indexResult) {
      indexResult = duplicates[key].index
      result = key
    }
  }

  return result
}

console.log(firstNotRepeatingCharacter('aba'))
console.log(firstNotRepeatingCharacter('aaxy'))
console.log(firstNotRepeatingCharacter('abacabad'))
console.log(firstNotRepeatingCharacter('abacabaabacaba'))
