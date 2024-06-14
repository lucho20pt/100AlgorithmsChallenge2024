export function longestDigitsPrefix(inputString: string): string {
  let resultArr: string[] = []
  let tempArr: string[] = []
  let count = 0
  let max = 0

  inputString.split('').forEach((char) => {
    if (!isNaN(Number(char))) {
      // is char a number?
      tempArr.push(char)
      count++
      if (count > max) {
        resultArr = [...tempArr]
        max = count
      }
    } else {
      // is char not a number?
      tempArr = []
      count = 0
    }
  })

  return resultArr.join('')
}

console.log(longestDigitsPrefix('123aa1'))
