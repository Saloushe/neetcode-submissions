class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let temp
        for (let i = 0; i < Math.floor(s.length/2); i++) {
            temp = s[s.length - 1 - i]
            s[s.length - 1 - i] = s[i]
            s[i] = temp
        }
    }
}
