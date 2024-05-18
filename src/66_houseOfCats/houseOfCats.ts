export function houseOfCats(legs: number): number[] {
  if (legs === 2) return [1]

  const people: number[] = []

  for (let i = 0; i <= legs; i += 2) {
    if (i !== 0 && (legs - i) % 4 === 0) {
      people.push(i / 2)
    }
  }
  return people
}

console.log(houseOfCats(12))
console.log(houseOfCats(6))
console.log(houseOfCats(2))
