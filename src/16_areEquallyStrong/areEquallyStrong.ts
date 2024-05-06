export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendLeft: number,
  friendRight: number
): boolean {
  // check witch arm is strong or weak
  const yourStrongArm = yourLeft > yourRight ? yourLeft : yourRight
  const yourWeakArm = yourLeft < yourRight ? yourLeft : yourRight
  const friendsStrongArm = friendLeft > friendRight ? friendLeft : friendRight
  const friendsWeakArm = friendLeft < friendRight ? friendLeft : friendRight

  // compare arms with friend
  if (yourStrongArm === friendsStrongArm && yourWeakArm === friendsWeakArm) {
    return true
  } else {
    return false
  }
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
