export function alphabetSubsequence(s: string): boolean {
  const alphabet = [...Array(26)].map((_, index) =>
    String.fromCharCode(index + 97)
  )
  const arr = s.split('')
  let index = null
  let lastIndex = -1

  for (const letter of arr) {
    index = alphabet.findIndex((el) => el.includes(letter))

    if (index > lastIndex) {
      lastIndex = index
    } else {
      return false
    }
  }

  return index === lastIndex ? true : false
}

console.log(alphabetSubsequence('defgh'))
console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
