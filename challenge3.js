function bubbleSort(arr) {
    const length = arr.length;
    
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    
    return arr;
  }


  function mergeAndRemoveDuplicates(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = bubbleSort(mergedArray);
    
    const uniqueArray = sortedArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    
    return uniqueArray;
  }
  
  // Beispielaufruf
  const array1 = [5, 3, 8, 2, 1, 4];
  const array2 = [7, 2, 6, 1, 4, 9];
  const mergedAndUniqueArray = mergeAndRemoveDuplicates(array1, array2);
  console.log(mergedAndUniqueArray);