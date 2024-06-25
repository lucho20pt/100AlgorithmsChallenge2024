export function palindromeRearranging(inputString: string): boolean {
  const reverse = inputString.split('').reverse().join('').toLowerCase()
  let counter = 0
  const obj: { [key: string]: number } = {}

  for (let i = 0; i < inputString.length; i++) {
    const char = reverse[i]
    if (!obj.hasOwnProperty(char)) {
      obj[char] = 1
      counter++
    } else {
      obj[char]++
      counter--
    }
  }
  return counter < 2 ? true : false
}

console.log(palindromeRearranging('aabb'))
console.log(palindromeRearranging('WasitRtIsaw'))
