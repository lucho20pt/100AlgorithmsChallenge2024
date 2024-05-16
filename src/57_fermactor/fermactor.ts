export function fermactor(n: number): number[] {
  let resultArr: number[] = []
  let a: number = Math.ceil(Math.sqrt(n))
  let b2: number = a * a - n
  let b: number = Math.round(Math.sqrt(b2))

  const fermatFactorization = (n: number): any => {
    if (a * a - b * b === n) return resultArr.push(a, b)

    a++
    b2 = a * a - n
    b = Math.round(Math.sqrt(b2))

    return fermatFactorization(n)
  }
  fermatFactorization(n)

  return resultArr
}

console.log(fermactor(15))
console.log(fermactor(21))
console.log(fermactor(157))
