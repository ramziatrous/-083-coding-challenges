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
  
  
  const unsortedArray = [69, 11, 81, 21, 9, 45];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray);