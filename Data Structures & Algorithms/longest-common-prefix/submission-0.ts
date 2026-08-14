class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length == 0) return ""
        let prefix = ""
        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (strs[0][i] != strs[j][i]) return prefix

            }
            prefix = prefix + strs[0][i]
        }
        return prefix
    }
}
