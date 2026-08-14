class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let counter = new Map()
        for (const num of nums) {
            if (!counter.has(num)) {
                counter.set(num, 1)
                continue
            }
            counter.set(num, counter.get(num) + 1)
        }
        for (const [k, v] of counter) {
            if (v > Math.floor(nums.length/2)) return k
        }
        return -1
    }
}
