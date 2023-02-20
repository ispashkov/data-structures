export function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log(array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        let tmp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = tmp;
      }
    }
  }

  return array;
}
