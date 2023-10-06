// Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time 
// and return the rotated array. Rotation of the array means that each element is shifted right 
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]

// Solution
function rotateArrayRightOnce(arr) {
    if (arr.length <= 1) {
        return arr; // No need to rotate if the array has 0 or 1 element
    }

    const rotatedArray = [];

    // The last element becomes the first element
    rotatedArray.push(arr[arr.length - 1]);

    // Copy the rest of the elements
    for (let i = 0; i < arr.length - 1; i++) {
        rotatedArray.push(arr[i]);
    }

    return rotatedArray;
}

// Test the function
const rotatedArray = rotateArrayRightOnce([3, 8, 9, 7, 6]);
console.log(rotatedArray);
