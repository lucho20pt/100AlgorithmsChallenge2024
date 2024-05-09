// /* my first solution */
export function characterParity(symbol: string): string {
  const isNumber = (str: string) => !isNaN(Number(str))
  if (isNumber(symbol)) {
    return parseInt(symbol) % 2 === 0 ? 'even' : 'odd'
  } else {
    return 'not a digit'
  }
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))

/* my second solution */
// export function characterParity(symbol: string): string {
//   const isNumber = (str: string): boolean => {
//     return !isNaN(Number(str))
//   }
//   const isOddEvenNumber = (str: string): string => {
//     if (isNumber(str)) {
//       const isEven = parseInt(str) % 2 === 0
//       return isEven ? 'even' : 'odd'
//     } else {
//       return 'not a digit'
//     }
//   }
//   return isOddEvenNumber(symbol)
// }
