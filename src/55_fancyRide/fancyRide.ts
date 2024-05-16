export function fancyRide(l: number, fares: number[]): string {
  const uberOptions: string[] = [
    'UberX',
    'UberXL',
    'UberPlus',
    'UberBlack',
    'UberSUV'
  ]
  const maxMoney = 20

  if (maxMoney < fares[0] * l)
    return 'you do not have enougth money for that ride'
  else if (maxMoney >= fares[fares.length - 1] * l)
    return uberOptions[uberOptions.length - 1]

  for (let i = 0; i < fares.length; i++) {
    let fare = fares[i]
    let ridesCost = fare * l
    if (ridesCost > maxMoney) {
      return uberOptions[i - 1]
    }
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]))
