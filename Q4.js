// Q#4: Write a function that will take an array as input and return an array with every missing 
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest 
// entry is 9, and missing numbers are [0,5,8]

//Solution
function findMissingElements(arr) {
    const maxElement = findMax(arr); // Find the highest entry in the array
    const missingElements = [];

    for (let i = 0; i <= maxElement; i++) {
        if (!contains(arr, i)) {
            missingElements.push(i);
        }
    }

    return missingElements;
}

// Function to find the maximum element in an array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Function to check if an element is in an array
function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Test the function
const missingNumbers = findMissingElements([3, 4, 9, 1, 7, 3, 2,6]);
console.log(missingNumbers); 
