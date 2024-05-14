export function differentSymbolsNaive(s: string): number {
  const sArr: string[] = s.split('')
  const newArr: string[] = []

  for (let i = 0; i < sArr.length; i++) {
    if (!newArr.includes(sArr[i])) {
      newArr.push(sArr[i])
    }
  }

  return newArr.length
}

console.log(differentSymbolsNaive('cabca'))
