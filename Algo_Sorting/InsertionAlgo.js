
function insertionSort(arr) {
    let n = arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
           
            arr[j+1] = current;
        }
    return arr;
}

console.log(insertionSort([6, 1, 23, 4, 2, 3])); // [1, 2, 3, 4, 6, 23]

