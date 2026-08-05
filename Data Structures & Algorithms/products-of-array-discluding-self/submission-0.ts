class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let curr = 1 // to be wiped per iteration
        let out = new Array(nums.length).fill(1) 
        for (let i = 0; i < out.length; i++) { 
            for (let j = 0; j < nums.length; j++) {
                if (i != j) {
                    out[i] = out[i] * nums[j]
                }
            }
        }
        return out
    }
}
