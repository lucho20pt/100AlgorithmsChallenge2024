// scope chain describes how javascript engine search for a reference in the lexical scope chain

let a = 2
function outer() {
  let b = 3
  function inner() {
    let c = 5
    console.log(a + b + c)
    return a + b + c
  }
  inner()
}
outer()
