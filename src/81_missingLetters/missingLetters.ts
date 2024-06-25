export function missingLetters(str: string): string {
  const strArray: string[] = str.split('')
  let temp: number = strArray[0].charCodeAt(0)

  for (const char of strArray) {
    const curr = Number(char.charCodeAt(0))

    if (temp !== curr) {
      return String.fromCharCode(temp)
    } else {
      temp++
    }
  }
}

console.log(missingLetters('bce'))
console.log(missingLetters('abce'))
console.log(missingLetters('abcdefghjklmno'))
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'))
