export function addBorder(picture: string[]): string[] {
  const borderArr: string[] = []

  borderArr.push('*****')

  picture.forEach((el) => {
    borderArr.push(`*${el}*`)
  })

  borderArr.push('*****')

  return borderArr
}

console.log(addBorder(['abc', 'ded']))
