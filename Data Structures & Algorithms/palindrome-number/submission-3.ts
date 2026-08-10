class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {
        let asStr = x.toString()
        if (asStr.length % 2 == 0) {
            return asStr.substring(0, asStr.length / 2) == asStr.substring(asStr.length/2, asStr.length).split('').reverse().join('')
        }
        return asStr.substring(0, asStr.length / 2) == asStr.substring(asStr.length/2 + 1, asStr.length).split('').reverse().join('')
    }
}
