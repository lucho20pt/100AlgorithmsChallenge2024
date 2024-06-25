export function newNumeralSystem(number: string): string[] {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i++)
  )
  const result: string[] = []

  const N: number = alphabet.indexOf(number)
  let temp: number = N

  for (let i = 0; i < alphabet.length; i++) {
    if (i + temp === N) {
      const str: string = `${alphabet[i]} + ${alphabet[temp]}`
      result.push(str)
    }
    if (i - temp === 0) return result
    temp--
  }

  result
}

console.log(newNumeralSystem('G'))
