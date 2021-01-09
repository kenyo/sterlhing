function countSwaps(a) {
    let sortCount = 0;
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length - 1; j++) {

            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                sortCount += 1;
            }
        }

    }

    console.log('Array is sorted in', sortCount, 'swaps.');
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[a.length - 1]);

}


function maximumToys(prices, k) {
  const sortedPrices = prices.sort((x, y) => x - y)
  let maxToyCount = 0

  while (k > 0) {
    let cheapestToy = sortedPrices.shift()

    k -= cheapestToy

    if (k > 0) {
      maxToyCount++
    }
  }

  return maxToyCount
}
