export function reflectString(inputString: string): string {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  )
  const alphabetReverse = alphabet.slice().reverse()
  let newString: string = ''

  inputString.toLowerCase().split('').forEach((char) => {
    newString += alphabetReverse[alphabet.indexOf(char)]
  })
  return newString
}

console.log(reflectString('name'))
