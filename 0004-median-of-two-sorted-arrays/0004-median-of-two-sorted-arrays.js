/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Understanding the problem(ONGOING)
    // Odd number of items, median is the middle item
    // middle item -> Math.floor(arr.length/2)
    // even number of items, medianis the avg of the two middle nums
    
// STEP ONE: Merge two sorted arrays
    const merge = [];
    
    let i = 0; // Pointer for nums1
    let j = 0; // Pointer for nums2
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merge.push(nums1[i]);
            i++;
        } else {
            merge.push(nums2[j]);
            j++;
        }
    }
    
    // Append remaining elements from nums1, if any
    while (i < nums1.length) {
        merge.push(nums1[i]);
        i++;
    }
    
    // Append remaining elements from nums2, if any
    while (j < nums2.length) {
        merge.push(nums2[j]);
        j++;
    }
    
    // STEP TWO: Find the median in the merged array
    const n = merge.length;
    if (n % 2 === 0) { // Even number of elements
        const mid = n / 2;
        return (merge[mid - 1] + merge[mid]) / 2;
    } else { // Odd number of elements
        return merge[Math.floor(n / 2)];
    }
};