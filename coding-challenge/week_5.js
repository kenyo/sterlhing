function rotLeft(a, d) {
  const rotatedArray = new Array(a.length)

  a.forEach((x, i) => {
    const newIndex = i - d
    rotatedArray.splice(newIndex, 1, x)
  })

  return rotatedArray
}
