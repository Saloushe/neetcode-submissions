class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Set or string as collection for each row, col, square.
        // Pre-initialize sets here?
        // When is the board not valid?
        // > Not enough empty slots for the remaining numbers
        // >
        let rowSets: Set<string>[] = [
            new Set(), new Set(), new Set(), new Set(), new Set(),
            new Set(), new Set(), new Set(), new Set()
        ]
        let colSets: Set<string>[] = [
            new Set(), new Set(), new Set(), new Set(), new Set(),
            new Set(), new Set(), new Set(), new Set()
        ]
        let sqSets: Set<string>[] = [
            new Set(), new Set(), new Set(), new Set(), new Set(),
            new Set(), new Set(), new Set(), new Set()
        ]

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                let curr = board[i][j]
                // MISSING: "." has many dupes, will trigger .has()
                if (curr === '.') continue; 
                // Check sq sets. How? Calc. sq index from i,j
                let sqIdx = 3 * Math.floor(i / 3) + Math.floor(j / 3)
                if (rowSets[i].has(curr) 
                    || colSets[j].has(curr)
                    || sqSets[sqIdx].has(curr)) {
                    return false
                }  
                rowSets[i].add(curr)
                colSets[j].add(curr)
                sqSets[sqIdx].add(curr)
            }
        }
        return true
    }
}
