// Max Subarray sum

var maxSubArray = function(nums) {
    let tempSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        tempSum = tempSum + nums[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
        if (tempSum < 0) { 
            tempSum = 0;
        }
        
    }
    
    return maxSum;
    
};

// does not work for [-2,1] because it does not consider the last elemt being singly max