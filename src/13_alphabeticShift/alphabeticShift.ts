export function alphabeticShift(inputString: string): string {
  const alphabet = [...Array(26)].map((_, index) =>
    String.fromCharCode(index + 97)
  )
  const inputStringArr = inputString.split('')
  const newStringArr: string[] = []

  inputStringArr.forEach((value) => {
    const index = alphabet.findIndex((el) => el.includes(value))
    let letter = alphabet.at(index + 1)

    if (letter === undefined) {
      letter = 'a'
    }
    newStringArr.push(letter)
  })

  return newStringArr.join('')
}

console.log(alphabeticShift('crazy'))
