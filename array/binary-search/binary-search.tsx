function searchInsert(nums: number[], target: number): number {
    let low=0;
    let high= nums.length-1;
    
    while (low <= high){
        let mid = Math.floor((low+high)/2);

        if(nums[mid] === target) return mid;
        if(nums[mid] < target ){
            if(low === high) return mid+1;
            low = mid + 1;
        }
        if(nums[mid] > target ){
            high = mid -1;
            if(low > high) return low;
        }
    }
    
};