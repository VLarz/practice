function arrayChallenge(arr) {
    // Create an array for longest increasing substrings lengths and
    // fill it with 1s. This means that each element of the arr
    // is itself a minimum increasing subsequence.
    const arrayLength = Array(arr.length).fill(1);
  
    let prevElIdx = 0;
    let currElIdx = 1;
  
    while (currElIdx < arr.length) {
      if (arr[prevElIdx] < arr[currElIdx]) {
        // If current element is bigger then the previous one. then
        // it is a part of increasing subsequence where length is
        // by 1 bigger then the length of increasing subsequence
        // for the previous element.
        const newLength = arrayLength[prevElIdx] + 1;
        if (newLength > arrayLength[currElIdx]) {
          // Increase only if previous element would give us a
          // bigger subsequence length then we already have for
          // current element.
          arrayLength[currElIdx] = newLength;
        }
      }
  
      // Move previous element index right.
      prevElIdx += 1;
  
      // If previous element index equals to current element index then
      // shift current element right and reset previous element index to zero.
      if (prevElIdx === currElIdx) {
        currElIdx += 1;
        prevElIdx = 0;
      }
    }
  
    // Find the largest element in arrayLength, as it
    // will be the biggest length of increasing subsequence.
    let longestIncreasingLength = 0;
  
    for (let i = 0; i < arrayLength.length; i += 1) {
      if (arrayLength[i] > longestIncreasingLength) {
        longestIncreasingLength = arrayLength[i];
      }
    }
  
    return longestIncreasingLength;
  }

  console.log(LISsolveDP([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]))