export function domainType(domains: string[]): string[] {
  const domainType: string[] = []
  domains.forEach((value) => {
    if (value.endsWith('.org')) domainType.push('organization')
    else if (value.endsWith('.com')) domainType.push('commercial')
    else if (value.endsWith('.net')) domainType.push('network')
    else if (value.endsWith('.info')) domainType.push('information')
  })
  return domainType
}

console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
)
