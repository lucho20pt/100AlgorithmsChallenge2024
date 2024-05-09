export function isCaseInsensitivePalindrome(inputString: string): boolean {
  let temp = inputString.split('').reverse().join('').toLocaleLowerCase()
  return temp === inputString.toLocaleLowerCase()
}

console.log(isCaseInsensitivePalindrome('AaBaa'))
console.log(isCaseInsensitivePalindrome('aBac'))
