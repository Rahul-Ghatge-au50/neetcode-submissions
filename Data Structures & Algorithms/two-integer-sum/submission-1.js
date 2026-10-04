class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const arr = []
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                let val = nums[i] + nums[j];
                if(val == target){
                    arr.push(i,j)
                    return arr;
                }
            }
        }
        return arr;
    }
}
