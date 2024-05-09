export function chunkyMonkey(arr: any[], size: number): any[][] {
  let monkey = (a: any[], s: number) => {
    return Array(Array(...a.slice(0, s)), Array(...a.slice(s)))
  }

  return monkey(arr, size)
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2))
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4))
