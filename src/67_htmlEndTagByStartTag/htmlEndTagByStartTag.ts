export function htmlEndTagByStartTag(startTag: string): string {
  let tagName = startTag.split(' ')[0].slice(1)

  if (tagName.endsWith('>')) {
    tagName = tagName.slice(0, -1)
  }

  return `</${tagName}>`
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"))
console.log(htmlEndTagByStartTag('<i>'))
console.log(htmlEndTagByStartTag('<a href="https://www.google.com">'))
