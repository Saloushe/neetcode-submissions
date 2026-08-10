class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isUgly(n: number): boolean {
        let copy = n
        while (copy % 5 == 0) {
            copy = copy / 5
        }
        while (copy % 3 == 0) {
            copy = copy / 3
        }
        while (copy % 2 == 0) {
            copy = copy / 2
        }
        return copy == 1
    }
}
