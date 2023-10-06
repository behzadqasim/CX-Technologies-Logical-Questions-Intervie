// Q#5: Write a function that will take an array of numbers and return the number most repeated 
// in the array with how many times it was repeated. For example, if the array is 
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.

// Solution
function findMostRepeatedNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty.");
    }

    let mostRepeatedNumber = arr[0];
    let maxFrequency = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let currentFrequency = 1;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === currentNumber) {
                currentFrequency++;
            }
        }

        if (currentFrequency > maxFrequency) {
            mostRepeatedNumber = currentNumber;
            maxFrequency = currentFrequency;
        }
    }

    return `${mostRepeatedNumber} is repeated ${maxFrequency} times.`;
}

// Test the function
const result = findMostRepeatedNumber([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5]);
console.log(result);
