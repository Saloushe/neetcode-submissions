class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (nums.length === 2) {
            return [0, 1]
        }

        for (let first = 0; first < nums.length - 1; first++) {
            for (let second = first + 1; second < nums.length; second++) {
                if (nums[first] + nums[second] === target) {
                    return [first, second]
                }
            }
        }
    }
}
