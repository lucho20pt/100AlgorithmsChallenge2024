/**
 * Counts the number of common characters between two strings.
 *
 * @param s1 - The first string.
 * @param s2 - The second string.
 * @returns The number of common characters.
 */

export function commonCharacterCount(s1: string, s2: string): number {
  const objCounter: { [key: string]: number } = {}
  let counter = 0

  for (let char of s1) {
    if (objCounter[char]) {
      objCounter[char]++
    } else {
      objCounter[char] = 1
    }
  }

  for (let char of s2) {
    if (objCounter[char] > 0) {
      objCounter[char]--
      counter++
    }
  }

  return counter
}

console.log(commonCharacterCount('aabcc', 'adcaa'))

// /* using split() & hasOwnProperty*/
// export function commonCharacterCount(s1: string, s2: string): number {
//   const arr1 = s1.split('')
//   const arr2 = s2.split('')

//   const obj: { [key: string]: number } = {}
//   let counter: number = 0

//   arr1.forEach((letter) => {
//     if (obj.hasOwnProperty(letter)) {
//       obj[letter] += 1
//     } else {
//       obj[letter] = 1
//     }
//   })

//   arr2.forEach((letter) => {
//     if (obj.hasOwnProperty(letter) && obj[letter] > 0) {
//       counter += 1
//       obj[letter] -= 1
//     }
//   })

//   return counter
// }
