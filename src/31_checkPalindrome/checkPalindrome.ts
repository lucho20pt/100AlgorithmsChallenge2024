export function checkPalindrome(inputString: string): boolean {
  const str = inputString.split('').reverse().join('').toLocaleLowerCase()
  return str === inputString
}

console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('abac'))
console.log(checkPalindrome('a'))
