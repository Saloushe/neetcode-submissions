class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        // O(n * 4^n): first n is per digit. What does 4^n represent? ^n is per digit. But there are only    three options per digit? Where does the 4 come from? ACTUALLY, SOME BUTTONS HAVE FOUR LETTERS
        if (digits.length == 0) {
            return []
        }
        let out = []
        let updated = []
        let convertTable = new Map<number, string>();
        convertTable[2] = "abc"
        convertTable[3] = "def"
        convertTable[4] = "ghi"
        convertTable[5] = "jkl"
        convertTable[6] = "mno"
        convertTable[7] = "pqrs"
        convertTable[8] = "tuv"
        convertTable[9] = "wxyz"
        for (let i = 0; i < digits.length; i++) {
            if (out.length == 0) {
                for (const ltr of convertTable[Number(digits[i])]) {
                    out.push(ltr)
                }
                // here, out is ["d", "e", "f"]
                continue
            }
            updated = []
            for (let j = 0; j < out.length; j++) {
                for (const ltr of convertTable[Number(digits[i])]) {
                    updated.push(out[j] + ltr)
                }
            }
            out = updated
        }
        return out
    }
}