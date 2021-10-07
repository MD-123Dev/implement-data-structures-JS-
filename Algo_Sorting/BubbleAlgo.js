 /**work 100*100 */
let bubbleSort = (arr) => {

    let len = arr.length;

    for (let i = 0; i < len-1; i++) {

        for (let j = 0; j < len-1; j++) { //**each time it decreases by 1  */

            if (arr[j] > arr[j + 1]) {

                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};


console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6]