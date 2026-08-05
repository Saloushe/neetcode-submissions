class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0
        let right = nums.length - 1
        let mid = Math.floor((nums.length - 1)/2);

        while (left <= right) {
            if (nums[mid] == target) {
                return mid
            }
            if (nums[mid] < target) {
                left = mid + 1 // otherwise endlessly loops when left and right are 1 apart
                mid = left + Math.floor((right - left) / 2)
                continue
            }
            if (nums[mid] > target) {
                right = mid - 1
                mid = left + Math.floor((right - left) / 2)
                continue
            }
        }
        return -1
    }
}
