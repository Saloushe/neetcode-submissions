class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let seen = new Set()
        for (const num of nums) {
            seen.add(num)
        }
        for (let i = 0; i < nums.length + 1; i++) {
            if (seen.has(i)) continue
            return i
        }
    }
}
