export function htmlEndTagByStartTag(startTag: string): string {
  let strArr = startTag.split(' ')
  let index = 1
  let endTag = ''

  if (strArr.length === 1) {
    let first = strArr[0].slice(0, index) + '/' + strArr[0].slice(index)
    endTag = first
  } else {
    let first = strArr[0].slice(0, index) + '/' + strArr[0].slice(index) + '>'
    endTag = first
  }
  return endTag
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"))
console.log(htmlEndTagByStartTag('<i>'))
console.log(htmlEndTagByStartTag('<a href="https://www.google.com">'))
