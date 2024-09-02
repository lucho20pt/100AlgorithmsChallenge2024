// A closure is the combination of the bundle whithin a function and it's lexical scope
function outerFn() {
  let counter = 0
  function inner() {
    counter++
    console.log(counter)
  }
  return inner
}

const fn = outerFn()
fn()
fn()
