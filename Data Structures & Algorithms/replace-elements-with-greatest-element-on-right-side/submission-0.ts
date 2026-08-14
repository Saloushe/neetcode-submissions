class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let max = 0
        let temp
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] > max) {
                temp = arr[i]
                arr[i] = max
                max = temp
                continue
            }
            arr[i] = max
        }
        arr[arr.length - 1] = -1
        return arr
    }
}
