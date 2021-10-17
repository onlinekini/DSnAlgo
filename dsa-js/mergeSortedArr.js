arr1 = [0, 3, 4, 9, 31]
arr2 = [4, 6, 7, 30]

function mergeSortedArrays(arr1, arr2) {
  let outputArr = [];
  let j = 0; // temp counter

  if (!Array.isArray(arr2) || arr2.length == 0)  {
    return arr1;
  }

  if (!Array.isArray(arr1) || arr1.length == 0)  {
    return arr2;
  }

  for (let i = 0; i < arr1.length; i++) {
    while (arr2[j] < arr1[i]) {
      outputArr.push(arr2[j])
      j++
    }
    outputArr.push(arr1[i]);
  }
  return outputArr;
}

console.log(mergeSortedArrays(arr1, arr2));