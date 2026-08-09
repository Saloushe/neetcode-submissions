class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let seen = new Set()
        let max = 0
        for (let i = 0; i < nums.length; i++) {
            seen.add(nums[i])
        }
        for (const num of seen) {
            if (seen.has(Number(num) - 1)) {
                continue
            }
            // start
            let curr = 1
            while (seen.has(Number(num) + curr)) {
                curr += 1
            }
            if (curr > max) {
                max = curr
            }
        }
        return max
    }
}
