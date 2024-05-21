export function lateRide(n: number): number {
  const hours = Math.floor(n / 60)
  const minuts = n % 60

  const time = hours.toString() + minuts.toString()

  let clock: number = 0

  for (let i = 0; i < time.length; i++) {
    clock += parseInt(time[i])
  }

  return clock
}

console.log(lateRide(240))
console.log(lateRide(600))
console.log(lateRide(808))
