const getSum = (a, b) => {
  if (a === 0) {
    return 0
  }
  if (b === 0) {
    return 1
  }
  return a + b
}

const getArr = () => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve('OK')
    }, 1000);
  })
}

module.exports = {
  getSum,
  getArr
}