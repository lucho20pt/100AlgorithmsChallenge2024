export function alternatingSums(a: number[]): number[] {
  const evenArr: number[] = []
  const oddArr: number[] = []

  a.forEach((el, index) => {
    const isEven = index % 2 === 0
    isEven ? evenArr.push(el) : oddArr.push(el)
  })

  const even = evenArr.reduce((acc, curr) => acc + curr, 0)
  const odd = oddArr.reduce((acc, curr) => acc + curr, 0)

  return [even, odd]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
