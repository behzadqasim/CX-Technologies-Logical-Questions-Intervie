// Q#3: Write a function that will take an array as input and return the sum of the two largest 
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30 
// because 11 and 19 are the largest numbers. 

//solution
function sumOfTwoLargestNumbers(arr) {
    if (arr.length < 2) {
        throw new Error("Array should contain at least two numbers.");
    }

    let largest = arr[0];
    let secondLargest = arr[1];

    if (largest < secondLargest) {
        [largest, secondLargest] = [secondLargest, largest]; 
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return largest + secondLargest;
}

// Test the function
const result = sumOfTwoLargestNumbers([3, 7, 1, 5, 11, 19]);
console.log(result); 
