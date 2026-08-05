class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const combined = new Map<string, number>()
        for (const s_ltr of s) {
            combined.set(s_ltr, (combined.get(s_ltr) ?? 0) + 1);
        }
        for (const t_ltr of t) {
            combined.set(t_ltr, (combined.get(t_ltr) ?? 0) - 1);
        }
        for (const val of combined.values()) {
            if (val !== 0) {
                return false
            }
        }
        return true
    }
}
