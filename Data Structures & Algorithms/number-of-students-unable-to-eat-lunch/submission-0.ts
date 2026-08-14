class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let skipCount = 0
        while (sandwiches.length > 0) {
            while (students.length > 0) {
                if (students[0] == sandwiches[0]) {
                    students.splice(0, 1)
                    sandwiches.splice(0, 1)
                    skipCount = 0
                } else {
                    students.push(students[0])
                    students.splice(0, 1)
                    skipCount++
                }
                if (skipCount == students.length) return students.length
            }
        }
    }
}
