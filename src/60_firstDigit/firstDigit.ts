export function firstDigit(inputString: string): string {
  const strArr = inputString.split('')
  let result = null

  strArr.some((el) => {
    const n = parseInt(el)
    if (!isNaN(n)) {
      result = el
      return true
    }
  })
  return result
}

console.log(firstDigit('var_1__Int'))
console.log(firstDigit('q2q-q'))
console.log(firstDigit('0ss'))
