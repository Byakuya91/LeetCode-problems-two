/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//     Breakdown on solving the problem
// STEP ONE: Understanding the problem(DONE)
// STEP TWO: code out a solution.
    
// SOLUTION STEP ONE: Intialize a Hashmap
    const numMap = {};
    
// SS TWO: iterate through the Nums
    for (let i = 0; i < nums.length; i++) {
//     SS THREE: figure out the complement to help figure out the target value
//  NOTE the complement is the number you use to subtract from the target to figure 
// out the pair. So if 9 is the target and we subtract two from it 9-2= 7   7+2=9

        const complement = target - nums[i];
        
// SS THREE Check if the complement exists in the hashmap
        
     if(numMap.hasOwnProperty(complement)){
         return [numMap[complement], i]; // If complement found, return the indices
         
         

        
        
        }
        
      //SS FOUR If complement not found, add the current number and its index to the hashmap
        numMap[nums[i]] = i;  
        
    }
    
    //SS FIVE If no solution found, return an empty array or handle the case as needed
    return [];
};