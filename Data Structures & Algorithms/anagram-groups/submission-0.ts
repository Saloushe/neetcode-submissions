class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let maps: Map<string, string[]> = new Map()
        for (const str of strs) {
            let groupkey = str.split('').sort().join()
            if (!maps.has(groupkey)) {
                maps.set(groupkey, [])
            } 
            maps.get(groupkey).push(str)
        }
        return [...maps.values()]
    }
}
