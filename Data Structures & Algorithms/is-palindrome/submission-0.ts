class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let ptr1 = 0
        let ptr2 = str.length - 1
        for (ptr1; ptr1 < Math.floor(str.length / 2); ptr1++) {
            if (str[ptr1] !== str[ptr2]) {
                return false
            }
            ptr2--
        }
        return true
    }
}
