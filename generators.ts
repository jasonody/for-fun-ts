const numberGenerator = function*() {
  let i = 1

  while (i < 10) {
    yield i
    i++
  }
}

const work = () => {
  for (const num of numberGenerator()) {
    console.log(num)
  }
}

work()