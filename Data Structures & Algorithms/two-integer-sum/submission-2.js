class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let result = new Map();
       for(let i=0; i<nums.length; i++){
        const diff = target - nums[i];
        if(result.has(diff)){
            return [result.get(diff), i];
        }

        result.set(nums[i], i)
       }

       return [];
    }
}
