class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words: string[]): string[] {
        let out = []
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words.length; j++) {
                if (i == j) continue
                if (words[i].length > words[j].length) continue
                if (words[j].indexOf(words[i]) != -1) {
                    out.push(words[i])
                    break
                }
            }
        }
        return out
    }
}
