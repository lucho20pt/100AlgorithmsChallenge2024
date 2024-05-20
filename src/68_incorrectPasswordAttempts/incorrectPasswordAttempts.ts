export function incorrectPasscodeAttempts(
  passcode: string,
  attempts: string[]
): boolean {
  const consecutiveAttempts = 10
  let failedAttempt = 0

  for (let i = 0; i < attempts.length; i++) {
    if (passcode === attempts[i]) {
      failedAttempt = 0
    } else {
      failedAttempt++
    }
    if (failedAttempt === consecutiveAttempts) return true
  }

  return false
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));