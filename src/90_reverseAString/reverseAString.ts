export function reverseAString(str: string): string {
  const newString = str.split('').reverse().join('')
  return newString
}

console.log(reverseAString('hello'))
console.log(reverseAString('Howdy'))
