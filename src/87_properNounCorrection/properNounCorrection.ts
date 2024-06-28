export function properNounCorrection(noun: string): string {
  const lowercase: string[] = noun.toLowerCase().split('')
  const name: string = lowercase
    .shift()
    .toUpperCase()
    .concat(lowercase.join(''))
  return name
}

console.log(properNounCorrection('pARiS'))
console.log(properNounCorrection('John'));
