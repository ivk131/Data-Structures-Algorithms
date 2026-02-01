function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        // If target is found: returns the index immediately
        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return low;
}


// Time Complexity: O(log n)
// Explanation:

// Binary search divides the search space in half with each iteration
// With each comparison, we eliminate half of the remaining elements
// For an array of size n, we need at most log₂(n) iterations



// Space Complexity: O(1)
// Explanation:

// Uses only a constant amount of extra space
// Variables used: low, high, mid (3 variables regardless of input size)
// No recursive calls (iterative approach)
// No additional data structures created