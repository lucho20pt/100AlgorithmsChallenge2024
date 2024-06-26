export function pigLatin(str: string): string {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u']
  const strArr: string[] = str.split('')

  // Function to check if a character is a vowel
  const isVowel = (char: string): boolean => {
    return vowels.includes(char)
  }

  // Check if the first character is a vowel
  const firstChar: string = strArr[0].toLowerCase()
  if (isVowel(firstChar)) return str + 'way'
  else {
    // Find the consonant cluster
    let cluster = ''
    while (strArr.length > 0 && !isVowel(strArr[0])) {
      cluster += strArr.shift()
    }
    return strArr.join('') + cluster + 'ay'
  }
}

console.log(pigLatin('glove'))
console.log(pigLatin('eight'))
console.log(pigLatin('why'))
