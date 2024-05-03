export function allLongestStrings(inputArray: string[]): string[] {
  let longestString = 0
  const arrLongestStrings: string[] = []

  inputArray.forEach((value) => {
    longestString = value.length > longestString ? value.length : longestString
  })

  inputArray.forEach((el) => {
    if (el.length === longestString) {
        arrLongestStrings.push(el)
    }
  })

  return arrLongestStrings

}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']))
console.log(allLongestStrings(['z', 'aaa', 'ad', 'vcd', 'aba']))
