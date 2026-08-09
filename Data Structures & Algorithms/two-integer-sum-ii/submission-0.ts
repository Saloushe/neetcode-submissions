class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let first = 0
        let second = numbers.length - 1
        // Dont want O(n^2)
        // Take advantage of the array being sorted
        while (numbers[first] + numbers[second] != target) {
            if (numbers[first] + numbers[second] > target) {
                second -= 1
            }
            if (numbers[first] + numbers[second] < target) {
                first += 1
            }
        }
        return [first + 1, second + 1]
    }
}
