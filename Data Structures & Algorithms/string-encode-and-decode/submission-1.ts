class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // Don't use a delimiter. Go with original Length + str combo
        let res = ''
        if (strs.length == 0) {
            return res
        } 
        for (const str of strs) {
            res = res + str.length + "`" + str
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0
        let out = []
        while (i < str.length) {
            let ind = str.indexOf("`", i) // first ` starting at i
            let subLength = Number(str.slice(i, ind))
            out.push(str.slice(ind + 1, ind + 1 + subLength))
            i = ind + subLength + 1
        }
        return out
    }
}
