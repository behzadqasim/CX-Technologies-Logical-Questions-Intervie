// Q#1: Write a function that will take an array as input, sort, and return the array in descending 
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].

//Solution
function sortArrayInDescendingOrder(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


const result = sortArrayInDescendingOrder([3, 2, 7, 4, 6, 9]);
console.log(result);
