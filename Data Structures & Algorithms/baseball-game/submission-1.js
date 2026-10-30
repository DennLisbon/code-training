
class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];

        for (const op of operations) {
            if (op === "+") {
                const last = record[record.length - 1];
                const secondLast = record[record.length - 2];

                record.push(last + secondLast);
            } 
            else if (op === "D") {
                const last = record[record.length - 1];

                record.push(last * 2);
            } 
            else if (op === "C") {
                record.pop();
            } 
            else {
                record.push(Number(op));
            }
        }

        return record.reduce((sum, score) => sum + score, 0);
    }
}

