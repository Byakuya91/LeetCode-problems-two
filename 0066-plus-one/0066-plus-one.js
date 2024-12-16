/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
//     Understand the problem(ONGOING)
// Main case: incrementing the last digit and carry over numbers for edge cases
// Layman's terms: increment the last digit by one
// if it's 9, make the digit zero and carry the 1 to the next digit[9 became 10]
// if it is NOT 9, increment it and you're finished
// if you run OUT of digits, add one to the front.
    
//     STEP ONE: Step through the digits starting backwards
    for(let i = digits.length -1; i >=0; i--){
//         If the digits are 9, turn it 0 and carry 1.
        if(digits[i]===9){
            digits[i] = 0;
        } else{
            digits[i]++;
            return digits;
        }
        
        
    }
    
    
     // If the  the loop is finished, all digits were 9, so add 1 at the front
       digits.unshift(1);
       return digits;
    
};