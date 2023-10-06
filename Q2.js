// Q#2: Write a function that will take a string as input, check and return if it is palindrome or 
// not. For example, if the string is “madam” the function should return true and if the string 
// is “doctor” it should return false.

// solution
function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();    
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("doctor"));  
