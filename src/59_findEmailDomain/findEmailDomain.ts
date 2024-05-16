export function findEmailDomain(address: string): string {
  const index = address.lastIndexOf('@')
  const domain = address.slice(index + 1)

  return domain
}

console.log(findEmailDomain('prettyandsimple@example.com'))
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'))
